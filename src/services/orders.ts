import axios from "axios";
import { IOrder } from "models";

interface IAPIOrderCreated {
  id: string;
}

class OrdersService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async createOrder(order: IOrder): Promise<IAPIOrderCreated> {
    const data = {
      items: order.items.map((item) => ({
        product_variant_id: item.variantId,
        amount: item.amount,
      })),
      phone: order.phone,
      address: order.address,
      note: order.note,
    };
    const response = await axios.post<IAPIOrderCreated>(
      this.create_url("/orders"),
      data
    );
    return response.data;
  }

  private create_url(path: string): string {
    return this.baseURL + path;
  }
}

export default OrdersService;
