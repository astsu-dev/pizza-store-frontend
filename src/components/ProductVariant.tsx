import React from "react";

interface Props {
  name: string;
  isActive: boolean;
  onClick: () => any;
}

const ProductVariant: React.FC<Props> = ({ name, isActive, onClick }) => {
  return (
    <button
      className={[
        "px-[0.75rem] py-[0.5rem]",
        "rounded-[0.625rem]",
        isActive ? "bg-[#fff0c8]" : "bg-[#ffffff]",
        isActive ? "shadow-[0_0_8px_0_rgba(0,0,0,0.25)]" : "",
        "font-medium",
        "cursor-pointer",
      ].join(" ")}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ProductVariant;
