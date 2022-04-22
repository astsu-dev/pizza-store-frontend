import CategoryLoader from "./CategoryLoader";
import React from "react";

const CategoryLoaderList: React.FC = () => {
  return (
    <div className="grid gap-[1.125rem] grid-cols-[repeat(2,max-content)] md:grid-flow-col md:auto-cols-max justify-center md:justify-start">
      <CategoryLoader />
      <CategoryLoader />
      <CategoryLoader />
      <CategoryLoader />
    </div>
  );
};

export default CategoryLoaderList;
