import minusIcon from "assets/minus.svg";
import plusIcon from "assets/plusCircle.svg";
import removeIcon from "assets/remove.svg";
import { ICartItem } from "models";
import React from "react";
import SecondaryButton from "ui/CircleButton";

interface Props {
  cartItem: ICartItem;
  amount: number;
  onAdd: (cartItem: ICartItem) => any;
  onMinus: (cartItem: ICartItem) => any;
  onRemove: (cartItem: ICartItem) => any;
}

const CartItem: React.FC<Props> = ({
  cartItem,
  amount,
  onAdd,
  onMinus,
  onRemove,
}) => {
  const { imageURL, productName, variantName, price } = cartItem;

  const onMinusClick = () => onMinus(cartItem);
  const onAddClick = () => onAdd(cartItem);
  const onRemoveClick = () => onRemove(cartItem);

  return (
    <div
      className={[
        "grid",
        "grid-cols-1 md:grid-cols-2",
        "gap-[1.5rem]",
        "justify-between",
        "items-center",
        "py-[1.25rem]",
        "border-[rbga(0,0,0,0.1)] border-b-[0.125rem] first:border-t-[0.125rem]",
      ].join(" ")}
    >
      <div className="grid grid-flow-col justify-start items-center gap-[0.25rem] md:gap-[1.5rem]">
        <img
          src={imageURL}
          alt="Product"
          className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem]"
        />
        <span className="font text-[1.25rem]">
          {productName} ({variantName})
        </span>
      </div>
      <div className="grid grid-flow-col items-center justify-between">
        <div className="grid grid-flow-col gap-[1rem] items-center">
          <SecondaryButton disabled={amount === 1} onClick={onMinusClick}>
            <img
              src={minusIcon}
              alt="Minus"
              className="w-[2.25rem] h-[2.25rem]"
            />
          </SecondaryButton>
          <span className="text-[1.25rem]">{amount}</span>
          <SecondaryButton onClick={onAddClick}>
            <img src={plusIcon} alt="Add" className="w-[2.25rem] h-[2.25rem]" />
          </SecondaryButton>
        </div>
        <span className="text-[1.25rem]">${(price * amount).toFixed(2)}</span>
        <SecondaryButton onClick={onRemoveClick}>
          <img
            src={removeIcon}
            alt="Remove"
            className="w-[2.25rem] h-[2.25rem]"
          />
        </SecondaryButton>
      </div>
    </div>
  );
};

export default CartItem;
