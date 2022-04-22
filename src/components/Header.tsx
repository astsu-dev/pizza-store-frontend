import CartButton from "./CartButton";
import logo from "assets/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-[1.25rem] ssm:px-[2.5rem] py-[1.125rem] rounded-b-[1.5625rem] shadow-header">
    <Link to="/">
      <div className="grid grid-flow-col items-center gap-[1.125rem] mr-[1.875rem]">
        <img src={logo} alt="Logo" className="w-[4rem] h-[4rem]" />
        <span className="font-[Pacifico] text-[2rem] hidden md:inline">
          Pizza Store
        </span>
      </div>
    </Link>
    <CartButton />
  </header>
);

export default Header;
