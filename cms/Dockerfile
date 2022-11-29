# syntax = docker/dockerfile:1.4
FROM wordpress:6-php8.1-apache
ARG USER_ID
ARG GROUP_ID
ENV WP_CLI_CONFIG_PATH=/wp-cli.yml
RUN <<eot bash -e
  apt update
  apt install -y less
  curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
  chmod +x wp-cli.phar
  mv wp-cli.phar /usr/local/bin/wp
  # Update internal user of wordpress service to dev user & group idss
  groupmod --gid ${USER_ID} www-data
  usermod --gid ${GROUP_ID} www-data
  usermod --uid ${GROUP_ID} www-data
  chown -R www-data:www-data /var/www
  cat > /wp-cli.yml <<YML
  apache_modules:
    - mod_rewrite
YML
  chown -R www-data:www-data /wp-cli.yml
eot

