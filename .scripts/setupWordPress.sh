#!/usr/bin/env bash
set -o allexport
source .env
set +o allexport

function install {
  # Auto setup admin access
  docker compose exec --user=www-data cms wp core install \
    --url="$WORDPRESS_URL" \
    --title="Aixmazon" \
    --admin_user="$WORDPRESS_ADMIN_USERNAME" \
    --admin_email="$WORDPRESS_ADMIN_EMAIL_ADDRESS" \
    --admin_password="$WORDPRESS_ADMIN_PASSWORD" \
    --skip-email &> /dev/null
}

echo -n "Installing: "
while ! install
do
  echo -n "."
  sleep 0.5
done
echo " Done ✅"

set -e

# Activate plugins
docker compose exec --user=www-data cms wp plugin activate woocommerce wordpress-importer woocommerce-gateway-stripe

# Enable Wordpress json API
docker compose exec --user=www-data cms wp rewrite structure '/%postname%/' --hard

# Woocommerce setup
docker compose exec --user=www-data cms wp option update woocommerce_store_address '413 Av. Gaston Berger'
docker compose exec --user=www-data cms wp option update woocommerce_store_city 'Aix-en-Provence'
docker compose exec --user=www-data cms wp option update woocommerce_store_postcode 13100
docker compose exec --user=www-data cms wp option update woocommerce_default_country FR
docker compose exec --user=www-data cms wp option update woocommerce_currency "EUR"
docker compose exec --user=www-data cms wp option update woocommerce_price_decimal_sep ","
docker compose exec --user=www-data cms wp option update woocommerce_price_thousand_sep " "


docker compose exec --user=www-data cms wp option update woocommerce_onboarding_profile --format=json '
{
  "is_agree_marketing": false,
  "store_email": "admin@example.com",
  "is_store_country_set": true,
  "industry": [
    {
      "slug": "other",
      "detail": "Books"
    }
  ],
  "product_types": [
    "physical",
    "downloads"
  ],
  "product_count": "0",
  "selling_venues": "no",
  "setup_client": false,
  "business_extensions": [],
  "theme": "twentytwentythree",
  "completed": true
}
'

# Generate Woocommerce api key pair
docker compose exec \
--user=www-data cms \
wp option get aixmazon_storefront_key_generated &> /dev/null || \
(
  docker compose exec \
    --user=www-data \
    --env WOOCOMMERCE_API_KEY=$WOOCOMMERCE_API_KEY \
    --env WOOCOMMERCE_API_SECRET=$WOOCOMMERCE_API_SECRET \
    cms wp eval '
      global $wpdb;
      echo $wpdb->insert(
        $wpdb->prefix . "woocommerce_api_keys",
        array(
          "user_id" => 1,
          "description" => "storefront",
          "permissions" => "read_write",
          "consumer_key"=> wc_api_hash(getenv("WOOCOMMERCE_API_KEY")),
          "consumer_secret" => getenv("WOOCOMMERCE_API_SECRET"),
          "truncated_key" => substr(getenv("WOOCOMMERCE_API_SECRET"), -7)
        )
      );' \
  && docker compose exec \
  --user=www-data cms \
  wp option add aixmazon_storefront_key_generated 1 &>/dev/null
)

# Load sample products catalog
docker compose exec --user=www-data cms wp option get aixmazon_storefront_product_catalog_loaded &> /dev/null || \
(
  docker compose exec \
    --user=www-data \
    cms bash -c "
      curl -OL https://raw.githubusercontent.com/woocommerce/woocommerce/master/sample-data/sample_products.xml \
      && wp import sample_products.xml --authors=create && rm sample_products.xml \
    " \
  && docker compose exec --user=www-data cms wp option add aixmazon_storefront_product_catalog_loaded 1 &> /dev/null
)
