import {
  CreateParams,
  CreateResult,
  DeleteManyParams,
  DeleteManyResult,
  DeleteParams,
  DeleteResult,
  GetListParams,
  GetListResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
} from "react-admin";
import { productsService } from "services";

class AdminDataProvider {
  async getList(
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> {
    switch (resource) {
      case "products":
        const products = await productsService.getProducts();
        return { data: products, total: products.length };
      case "categories":
        const categories = await productsService.getCategories();
        return { data: categories, total: categories.length };
    }
    throw new Error("Not implemented resource.");
  }

  async getOne(resource: string, params: GetOneParams): Promise<GetOneResult> {
    switch (resource) {
      case "products":
        const product = await productsService.getProduct(params.id);
        return { data: product };
      case "categories":
        const category = await productsService.getCategory(params.id);
        return { data: category };
    }
    throw new Error("Not implemented resource.");
  }

  async getMany(
    resource: string,
    params: GetManyParams
  ): Promise<GetManyResult> {
    throw new Error("Not implemented error");
  }

  async getManyReference(
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult> {
    throw new Error("Not implemented error");
  }

  async update(resource: string, params: UpdateParams): Promise<UpdateResult> {
    throw new Error("Not implemented error");
  }

  async updateMany(
    resource: string,
    params: UpdateManyParams
  ): Promise<UpdateManyResult> {
    throw new Error("Not implemented error");
  }

  async create(resource: string, params: CreateParams): Promise<CreateResult> {
    throw new Error("Not implemented error");
  }

  async delete(resource: string, params: DeleteParams): Promise<DeleteResult> {
    throw new Error("Not implemented error");
  }

  async deleteMany(
    resource: string,
    params: DeleteManyParams
  ): Promise<DeleteManyResult> {
    throw new Error("Not implemented error");
  }
}

const adminDataProvider = new AdminDataProvider();

export default adminDataProvider;
