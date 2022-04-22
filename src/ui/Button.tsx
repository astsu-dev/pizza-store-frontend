import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({
  className = "",
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <button
      className={[
        "btn",
        disabled
          ? "opacity-60 hover:bg-[#fff0c8] active:bg-[#fff0c8]"
          : "opacity-100",
        className,
      ].join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
