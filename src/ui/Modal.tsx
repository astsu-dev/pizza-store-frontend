import React, { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => any;
  backgroundClassName?: string;
  modalClassName?: string;
  children?: ReactNode;
}

const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  children,
  backgroundClassName = "",
  modalClassName = "",
}) => {
  return (
    <>
      <div
        className={[
          "absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.3)] z-0",
          isOpen ? "" : "hidden",
          backgroundClassName,
        ].join(" ")}
        onClick={onClose}
      ></div>
      <div
        className={[
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10",
          isOpen ? "" : "hidden",
          modalClassName,
        ].join(" ")}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
