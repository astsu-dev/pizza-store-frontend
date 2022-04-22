import ProductCard from "./ProductCard";
import { ICartItem, IProduct } from "models";
import React from "react";

interface Props {
  products: IProduct[];
  onAddProduct: (cartItem: ICartItem) => any;
}

const ProductList: React.FC<Props> = ({ products, onAddProduct }) => {
  return (
    <div
      className={[
        "grid",
        "ssm:gap-[2.5rem]",
        "grid-cols-[repeat(1,minmax(0,18.75rem))]",
        "md:grid-cols-[repeat(2,minmax(0,18.75rem))]",
        "lg:grid-cols-[repeat(3,minmax(0,18.75rem))]",
        "2xl:grid-cols-[repeat(4,minmax(0,18.75rem))]",
        "transition-all duration-500",
      ].join(" ")}
    >
      {products.map((product) =>
        product.variants.length ? (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            variants={product.variants}
            imageURL={product.imageURL}
            onAdd={onAddProduct}
          />
        ) : null
      )}
    </div>
  );
};

export default ProductList;
