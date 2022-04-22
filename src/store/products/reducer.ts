import { ProductsAction, ProductsActionType } from "./actions";
import { IProduct } from "models";

interface ProductsState {
  products: IProduct[];
  loading: boolean;
}

const initialState: ProductsState = {
  products: [],
  loading: true,
};

const productReducer = (
  state = initialState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    case ProductsActionType.FETCH_PRODUCTS_START:
      return { ...state, loading: true };
    case ProductsActionType.SET_PRODUCTS:
      return { ...state, products: action.payload, loading: false };
    default:
      return state;
  }
};

export default productReducer;
