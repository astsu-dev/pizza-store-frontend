import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string;
  register?: UseFormRegisterReturn;
  labelClassName?: string;
  children?: React.ReactNode;
}

const Input: React.FC<Props> = ({
  id,
  error,
  className = "",
  labelClassName = "",
  register,
  children,
  ...rest
}) => {
  return (
    <div>
      <label
        className={["grid text-[1rem] gap-[0.3125rem]", labelClassName].join(
          " "
        )}
      >
        {error && <span className="text-red-500">{error}</span>}
        {children}
        <input
          className={[
            "border-[0.125rem] border-[rgba(0,0,0,0.5)] active:border-[#000000]",
            "rounded-[0.625rem] bg-[rgba(255,240,200,0.25)]",
            "py-[0.75rem] px-[1rem] text-[1rem]",
            className,
          ].join(" ")}
          {...register}
          {...rest}
        />
      </label>
    </div>
  );
};

export default Input;
