import ProductVariant from "./ProductVariant";
import plusIcon from "assets/plus.svg";
import { ICartItem, IProductVariant } from "models";
import React, { useState } from "react";
import Button from "ui/Button";

interface Props {
  name: string;
  description: string;
  variants: IProductVariant[];
  imageURL: string;
  onAdd: (cartItem: ICartItem) => any;
}

const ProductCard: React.FC<Props> = ({
  name,
  description,
  variants,
  imageURL,
  onAdd,
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const selectedVariant = variants[selectedVariantIndex];

  const onVariantClick = setSelectedVariantIndex;

  const onAddClick = () => {
    onAdd({
      productName: name,
      variantName: selectedVariant.name,
      variantId: selectedVariant.id,
      price: selectedVariant.price,
      imageURL: imageURL,
    });
  };

  return (
    <div
      className={[
        "flex flex-col justify-between items-center",
        "px-[1.875rem] py-[1.875rem]",
        "ssm:rounded-[1.5625rem]",
        "border-b-[0.125rem] first:border-t-[0.125rem] ssm:border-y-[0.125rem] ssm:border-x-[0.125rem] border-[rgba(0,0,0,0.1)] md:border-none",
        "md:shadow-[0_0_8px_2px_rgba(0,0,0,0.25)]",
        "md:hover:shadow-[0_0_20px_0_rgba(0,0,0,0.25)]",
      ].join(" ")}
    >
      <img src={imageURL} alt={name} className="w-[13.75rem] h-[13.75rem]" />
      <h2 className="font-medium text-[1.75rem] text-center mt-[0.3125rem]">
        {name}
      </h2>
      <p className="text-center text-[1rem] leading-normal mt-[0.625rem]">
        {description}
      </p>
      <div className="grid grid-flow-col gap-[1.25rem] justify-center mt-[1.25rem]">
        {variants.map((variant, index) => (
          <ProductVariant
            key={variant.id}
            name={variant.name}
            isActive={selectedVariant.id === variant.id}
            onClick={() => onVariantClick(index)}
          />
        ))}
      </div>
      <div className="flex justify-between items-center w-full font-medium mt-[0.9375rem]">
        <span className="text-[1.25rem]">${selectedVariant.price}</span>
        <span className="text-[0.875rem] leading-normal">{`${selectedVariant.weight}${selectedVariant.weightUnits}`}</span>
        <Button
          className="grid grid-flow-col gap-[0.3125rem] pl-[0.4375rem] pr-[0.625rem] py-[0.5rem] font-medium"
          onClick={onAddClick}
        >
          <img
            src={plusIcon}
            alt="Add product icon"
            className="w-[1.25rem] h-[1.25rem]"
          />
          <span className="text-[1.25rem]">Add</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
