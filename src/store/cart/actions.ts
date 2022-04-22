import { ICartItem } from "models";

enum CartActionTypes {
  ADD_CART_ITEM = "ADD_CART_ITEM",
  MINUS_CART_ITEM = "MINUS_CART_ITEM",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  CLEAR_CART = "CLEAR_CART",
}

interface AddCartItemAction {
  type: CartActionTypes.ADD_CART_ITEM;
  payload: ICartItem;
}

interface MinusCartItemAction {
  type: CartActionTypes.MINUS_CART_ITEM;
  payload: ICartItem;
}

interface RemoveCartItemAction {
  type: CartActionTypes.REMOVE_CART_ITEM;
  payload: ICartItem;
}

interface ClearCartAction {
  type: CartActionTypes.CLEAR_CART;
}

type CartAction =
  | AddCartItemAction
  | MinusCartItemAction
  | RemoveCartItemAction
  | ClearCartAction;

const addCartItem = (item: ICartItem): AddCartItemAction => {
  return { type: CartActionTypes.ADD_CART_ITEM, payload: item };
};

const minusCartItem = (item: ICartItem): MinusCartItemAction => {
  return { type: CartActionTypes.MINUS_CART_ITEM, payload: item };
};

const removeCartItem = (item: ICartItem): RemoveCartItemAction => {
  return { type: CartActionTypes.REMOVE_CART_ITEM, payload: item };
};

const clearCart = (): ClearCartAction => {
  return { type: CartActionTypes.CLEAR_CART };
};

export {
  CartActionTypes,
  CartAction,
  addCartItem,
  minusCartItem,
  removeCartItem,
  clearCart,
};
