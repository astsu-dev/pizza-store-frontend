import cartIcon from "assets/cartIcon.svg";
import circleCheckIcon from "assets/circleCheckSolid.svg";
import noteIcon from "assets/comment.svg";
import addressIcon from "assets/location.svg";
import boxIcon from "assets/package.svg";
import phoneIcon from "assets/phone.svg";
import CartItemList from "components/CartItemList";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";
import { ICartItem } from "models";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ordersService } from "services";
import {
  addCartItem,
  clearCart,
  minusCartItem,
  removeCartItem,
} from "store/cart/actions";
import Button from "ui/Button";
import ButtonLoader from "ui/ButtonLoader";
import Input from "ui/Input";
import Modal from "ui/Modal";
import { count } from "utils";

interface OrderForm {
  phone: string;
  address: string;
  note: string;
}

const Cart: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderForm>({ mode: "onBlur" });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [orderIsProcessing, setOrderIsProcessing] = useState(false);
  const [orderStatusModalIsOpen, setOrderStatusModalIsOpen] = useState(false);
  const { items, totalPrice, totalCount } = useAppSelector(
    (state) => state.cart
  );

  const itemsMap = new Map(items.map((item) => [item.variantId, item]));
  const itemIds = items.map((item) => item.variantId);
  const uniqueItems = [...itemsMap.values()];
  const dispatch = useAppDispatch();

  const onAddItem = (item: ICartItem) => {
    dispatch(addCartItem(item));
  };
  const onMinusItem = (item: ICartItem) => {
    dispatch(minusCartItem(item));
  };
  const onRemoveItem = (item: ICartItem) => {
    dispatch(removeCartItem(item));
  };
  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const handleOrderStatusModalClose = () => setOrderStatusModalIsOpen(false);

  const createOrder = async (orderForm: OrderForm) => {
    const order = {
      items: uniqueItems.map((item) => ({
        variantId: item.variantId,
        amount: count(item.variantId, itemIds),
      })),
      phone: orderForm.phone,
      address: orderForm.address,
      note: orderForm.note,
    };
    return ordersService.createOrder(order);
  };

  const onSubmit = async (orderForm: OrderForm) => {
    setOrderIsProcessing(true);
    setTimeout(async () => {
      await createOrder(orderForm);
      setOrderIsProcessing(false);
      setModalIsOpen(false);
      dispatch(clearCart());
      setOrderStatusModalIsOpen(true);
    }, 0);
  };

  return (
    <main
      className={[
        "grid gap-[1.25rem]",
        "px-[1.25rem] py-[1.25rem] ssm:p-[2.5rem]",
        "border-[0.125rem] border-[rgba(0, 0, 0, 0.10)] rounded-[1.5625rem]",
      ].join(" ")}
    >
      <div className="grid grid-flow-col gap-[1rem] max-w-max">
        <img src={cartIcon} alt="Cart" className="w-[2rem] h-[2rem]" />
        <span className="text-[2rem] font-medium">Cart</span>
      </div>
      {totalCount === 0 ? (
        <div className="grid justify-self-center grid-flow-col gap-[0.75rem] items-center p-[1rem]">
          <img src={boxIcon} alt="Empty box" className="w-[4rem] h-[4rem]" />
          <span className="text-[1.75rem]">Your cart is empty.</span>
        </div>
      ) : (
        <CartItemList
          uniqueItems={uniqueItems}
          itemIds={itemIds}
          onAdd={onAddItem}
          onMinus={onMinusItem}
          onRemove={onRemoveItem}
        />
      )}
      <div className="grid grid-flow-row md:grid-flow-col md:justify-between items-center gap-[1.5rem] text-[1.25rem]">
        <span>Total price: ${totalPrice.toFixed(2)}</span>
        <Button
          disabled={totalCount === 0}
          onClick={handleOpenModal}
          className="px-[1.25rem] py-[0.625rem] font-medium text-[1.25rem] justify-self-center"
        >
          $ Order now
        </Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        modalClassName={[
          "grid gap-[1.5625rem] justify-center bg-[#ffffff] rounded-[1.5625rem]",
          "px-[2.5rem] md:px-[7.5rem] py-[2.5rem]",
        ].join(" ")}
      >
        <h2 className="font-medium text-[1.75rem] text-center">
          Order Details
        </h2>
        <div className="grid gap-[1.25rem]">
          <Input
            id="phoneInput"
            error={errors?.phone?.message}
            register={register("phone", { required: "* Required" })}
            type="tel"
          >
            <div className="grid grid-flow-col auto-cols-max gap-[0.625rem] items-center">
              <img
                src={phoneIcon}
                alt="Phone"
                className="w-[0.75rem] h-[0.75rem]"
              />
              <span>Phone</span>
            </div>
          </Input>
          <Input
            id="addressInput"
            error={errors?.address?.message}
            register={register("address", { required: "* Required" })}
          >
            <div className="grid grid-flow-col auto-cols-max gap-[0.625rem] items-center">
              <img
                src={addressIcon}
                alt="Address"
                className="w-[0.6875rem] h-[0.9375rem]"
              />
              <span>Address</span>
            </div>
          </Input>
          <Input id="noteInput" register={register("note")} required>
            <div className="grid grid-flow-col auto-cols-max gap-[0.625rem] items-center">
              <img
                src={noteIcon}
                alt="Description"
                className="w-[0.75rem] h-[0.75rem]"
              />
              <span>Comment</span>
            </div>
          </Input>
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={orderIsProcessing}
            className="grid grid-flow-col gap-[0.625rem] items-center justify-self-center px-[1.25rem] py-[0.625rem] font-medium text-[1.25rem]"
          >
            {orderIsProcessing && <ButtonLoader />}
            <span>$ Order now</span>
          </Button>
        </div>
      </Modal>
      <Modal
        isOpen={orderStatusModalIsOpen}
        onClose={handleOrderStatusModalClose}
        modalClassName={[
          "grid grid-rows-[repeat(max-content)]",
          "grid-cols-[max-content_1fr] gap-y-[0.3125rem] gap-x-[0.625rem]",
          "bg-[#ffffff] rounded-[1.5625rem]",
          "p-[1.5rem] items-center",
        ].join(" ")}
      >
        <img
          src={circleCheckIcon}
          alt="Success"
          className="w-[2.8125rem] h-[2.8125rem] row-span-2 text-[#4bb543]"
        />
        <h2 className="text-[1.5rem]">Success</h2>
        <span className="text-[1rem] text-[rgba(0,0,0,0.5)]">
          Order was created successfully. Wait for your order.
        </span>
      </Modal>
    </main>
  );
};

export default Cart;
