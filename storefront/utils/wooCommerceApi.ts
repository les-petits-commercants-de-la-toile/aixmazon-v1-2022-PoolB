import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Order } from "./types/wooCommerceTypes";

// initialize WooCommerceRestApi //
// NOTE: must execute these API calls server-side because env vars
// only available there and it is more secure
const api = new WooCommerceRestApi({
  url: 'https://on1zuma-miniature-train-wqr9465747v2v5qp-8000.preview.app.github.dev',
  consumerKey: 'ck_1197383bf65c260e88a6bde7ea5ccf3b70bbf7eb',
  consumerSecret: 'cs_811f9bb74541847ab13cd90c63279d8dca752392',
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
