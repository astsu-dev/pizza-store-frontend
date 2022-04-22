import React from "react";

interface Props {
  disabled?: boolean;
  className?: string;
  onClick?: () => any;
  children?: React.ReactNode | React.ReactNode[];
}

const SecondaryButton: React.FC<Props> = ({
  disabled = false,
  className = "",
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        disabled ? "opacity-20" : "opacity-60 hover:opacity-100",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
