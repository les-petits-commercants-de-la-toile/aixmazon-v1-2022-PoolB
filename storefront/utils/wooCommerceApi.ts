import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Order } from "./types/wooCommerceTypes";

// initialize WooCommerceRestApi //
// NOTE: must execute these API calls server-side because env vars
// only available there and it is more secure
const api = new WooCommerceRestApi({
  url: process.env.WORDPRESS_URL!,
  consumerKey: process.env.WOOCOMMERCE_API_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_API_SECRET!,
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchProducts() {
  try {
    const response = await api.get("products");
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

// create new order by passing in required data object //
export async function createOrder(data: Order) {
  try {
    const response = await api.post("orders", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function findProductById(productId: string) {
  try {
    const response = await api.get(`products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
