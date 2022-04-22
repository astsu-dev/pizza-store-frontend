import React from "react";

interface Props extends React.ImgHTMLAttributes<SVGImageElement> {}

const ButtonLoader: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={["animate-spin w-[1.25rem] h-[1.25rem]", className].join(" ")}
      fill="none"
    >
      <circle
        className="opacity-25 stroke-current"
        strokeWidth="4"
        cx="50%"
        cy="50%"
        r="10"
      ></circle>
      <path
        className="opacity-75 fill-current"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default ButtonLoader;
