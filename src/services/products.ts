import axios from "axios";
import { ICategory, IProduct, IProductVariant } from "models";

interface IAPIProductVariant {
  id: string;
  name: string;
  weight: number;
  weight_units: string;
  price: number;
}

interface IAPIProduct {
  id: string;
  name: string;
  category: ICategory;
  description: string;
  variants: IAPIProductVariant[];
  image_url: string;
}

const mapApiProductVariantToProductVariant = (
  variant: IAPIProductVariant
): IProductVariant => {
  return {
    id: variant.id,
    name: variant.name,
    weight: variant.weight,
    weightUnits: variant.weight_units,
    price: variant.price,
  };
};

const mapApiProductToProduct = (product: IAPIProduct): IProduct => {
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    description: product.description,
    imageURL: product.image_url,
    variants: product.variants.map(mapApiProductVariantToProductVariant),
  };
};

class ProductsService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async getCategories(): Promise<ICategory[]> {
    const response = await axios.get<ICategory[]>(
      this.create_url("/categories")
    );
    return response.data;
  }

  async getCategory(id: string): Promise<ICategory> {
    const response = await axios.get<ICategory>(
      this.create_url(`/categories/${id}`)
    );
    return response.data;
  }

  async getProducts(categoryId?: string): Promise<IProduct[]> {
    const params = categoryId ? { category_id: categoryId } : {};
    const response = await axios.get<IAPIProduct[]>(
      this.create_url("/products"),
      { params }
    );
    const result: IProduct[] = response.data.map(mapApiProductToProduct);
    return result;
  }

  async getProduct(id: string): Promise<IProduct> {
    const response = await axios.get<IAPIProduct>(
      this.create_url(`/products/${id}`)
    );
    return mapApiProductToProduct(response.data);
  }

  private create_url(path: string): string {
    return this.baseURL + path;
  }
}

export default ProductsService;
