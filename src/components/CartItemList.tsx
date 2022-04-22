import CartItem from "./CartItem";
import { ICartItem } from "models";
import React from "react";
import { count } from "utils";

interface Props {
  uniqueItems: ICartItem[];
  itemIds: string[];
  onAdd: (item: ICartItem) => any;
  onMinus: (item: ICartItem) => any;
  onRemove: (item: ICartItem) => any;
}

const CartItemList: React.FC<Props> = ({
  uniqueItems,
  itemIds,
  onAdd,
  onMinus,
  onRemove,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-flow-row first:border-t-[0.125rem]">
      {uniqueItems.map((item) => (
        <CartItem
          key={item.variantId}
          cartItem={item}
          amount={count(item.variantId, itemIds)}
          onAdd={onAdd}
          onMinus={onMinus}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default CartItemList;
