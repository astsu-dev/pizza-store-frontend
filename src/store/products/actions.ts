import { IProduct } from "models";

enum ProductsActionType {
  FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START",
  SET_PRODUCTS = "SET_PRODUCTS",
}

interface FetchProductsStartAction {
  type: ProductsActionType.FETCH_PRODUCTS_START;
}

interface SetProductsAction {
  type: ProductsActionType.SET_PRODUCTS;
  payload: IProduct[];
}

type ProductsAction = FetchProductsStartAction | SetProductsAction;

const startProductsFetching = (): FetchProductsStartAction => {
  return {
    type: ProductsActionType.FETCH_PRODUCTS_START,
  };
};

const setProducts = (products: IProduct[]): SetProductsAction => {
  return {
    type: ProductsActionType.SET_PRODUCTS,
    payload: products,
  };
};

export {
  ProductsActionType,
  ProductsAction,
  startProductsFetching,
  setProducts,
};
