import { CartAction, CartActionTypes } from "./actions";
import { ICartItem } from "models";

interface CartState {
  items: ICartItem[];
  totalPrice: number;
  totalCount: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  let newItems;
  let totalPrice;
  let totalCount;

  switch (action.type) {
    case CartActionTypes.ADD_CART_ITEM:
      newItems = state.items.concat([action.payload]);
      totalPrice = newItems.reduce(
        (acc: number, item: ICartItem) => item.price + acc,
        0
      );
      totalCount = newItems.length;
      return { ...state, items: newItems, totalPrice, totalCount };

    case CartActionTypes.MINUS_CART_ITEM:
      newItems = Array.from(state.items);
      // Reverse array for delete last match item
      newItems = newItems.reverse();
      const index = newItems.indexOf(action.payload);

      // If item not found return not modified state
      if (index === -1) {
        return state;
      }

      newItems.splice(index, 1);
      newItems = newItems.reverse();

      totalPrice = newItems.reduce(
        (acc: number, item: ICartItem) => item.price + acc,
        0
      );
      totalCount = newItems.length;

      return { ...state, items: newItems, totalPrice, totalCount };

    case CartActionTypes.REMOVE_CART_ITEM:
      newItems = state.items.filter(
        (item) => item.variantId !== action.payload.variantId
      );
      totalPrice = newItems.reduce(
        (acc: number, item: ICartItem) => item.price + acc,
        0
      );
      totalCount = newItems.length;
      return { ...state, items: newItems, totalPrice, totalCount };

    case CartActionTypes.CLEAR_CART:
      return { ...state, items: [], totalPrice: 0, totalCount: 0 };

    default:
      return state;
  }
};

export default cartReducer;
