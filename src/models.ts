interface ICategory {
  id: string;
  name: string;
}

interface IProductVariant {
  id: string;
  name: string;
  weight: number;
  weightUnits: string;
  price: number;
}

interface IProduct {
  id: string;
  name: string;
  category: ICategory;
  description: string;
  variants: IProductVariant[];
  imageURL: string;
}

interface ICartItem {
  productName: string;
  variantName: string;
  variantId: string;
  price: number;
  imageURL: string;
}

interface IOrderItem {
  variantId: string;
  amount: number;
}

interface IOrder {
  items: IOrderItem[];
  phone: string;
  address: string;
  note: string;
}

export { ICategory, IProductVariant, IProduct, ICartItem, IOrderItem, IOrder };
