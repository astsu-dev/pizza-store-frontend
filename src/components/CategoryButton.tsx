import React from "react";
import Button from "ui/Button";

interface Props {
  name: string;
  isActive: boolean;
  onClick: () => any;
}

const CategoryButton: React.FC<Props> = ({ name, isActive, onClick }) => {
  return (
    <Button
      className={[
        "px-[1.25rem] py-[0.375rem]",
        isActive ? "bg-[#ffe192]" : "",
      ].join(" ")}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default CategoryButton;
