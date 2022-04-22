import CategoryButton from "./CategoryButton";
import { ICategory } from "models";
import React from "react";

interface Props {
  categories: ICategory[];
  selectedCategoryIndex: number;
  onSelectCategoryIndex: (index: number) => any;
}

const CategoryList: React.FC<Props> = ({
  categories,
  selectedCategoryIndex,
  onSelectCategoryIndex,
}) => {
  return (
    <div className="grid grid-cols-[repeat(2,max-content)] md:grid-cols-none md:grid-flow-col md:auto-cols-max gap-[1.125rem] justify-center md:justify-start px-[1.875rem] ssm:px-0">
      {categories.map((category, index) => (
        <CategoryButton
          key={category.id}
          name={category.name}
          isActive={index === selectedCategoryIndex}
          onClick={() => onSelectCategoryIndex(index)}
        />
      ))}
    </div>
  );
};

export default CategoryList;
