import ProductLoader from "./ProductLoader";
import React from "react";

const ProductLoaderList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ssm:gap-[2.5rem]">
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
    </div>
  );
};

export default ProductLoaderList;
