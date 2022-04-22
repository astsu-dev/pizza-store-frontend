import cartIcon from "assets/cartIcon.svg";
import useAppSelector from "hooks/useAppSelector";
import React from "react";
import { Link } from "react-router-dom";
import Button from "ui/Button";

const CartButton: React.FC = () => {
  const { totalCount, totalPrice } = useAppSelector((state) => state.cart);

  return (
    <Link to="/cart">
      <Button className="grid grid-flow-col gap-[0.625rem] items-center p-[0.625rem] box-border">
        <span className="px-[0.45rem] py-[0.3125rem] rounded-[50%] border-[0.125rem] border-black text-[0.75rem] text-center align-middle font-medium">
          {totalCount}
        </span>
        <img
          src={cartIcon}
          alt="Cart icon"
          className="w-[1.75rem] h-[1.75rem]"
        />
        <span className="text-[1.375rem] font-medium">
          ${totalPrice.toFixed(2)}
        </span>
      </Button>
    </Link>
  );
};

export default CartButton;
