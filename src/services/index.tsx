import OrdersService from "./orders";
import ProductsService from "./products";

const baseURL = process.env.API_BASE_URL || "";
const productsService = new ProductsService(baseURL);
const ordersService = new OrdersService(baseURL);

export { productsService, ordersService };
