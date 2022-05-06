import email from "assets/email.svg";
import facebook from "assets/facebook.svg";
import instagram from "assets/instagram.svg";
import location from "assets/locationRed.svg";
import phone from "assets/phone.svg";
import telegram from "assets/telegram.svg";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className={[
      "flex justify-center",
      "border-[rgba(0, 0, 0, 0.1)] border-[0.125rem] rounded-[1.5625rem]",
      "px-[2.5rem] py-[1.25rem] mb-[2.5rem]",
    ].join(" ")}>
      <div
        className={[
          "md:w-full",
          "flex flex-col gap-x-[3.625rem] gap-y-[1rem] md:flex-row justify-between",
        ].join(" ")}
      >
        <div className="flex justify-between md:gap-[1.5rem]">
          <a href="#">
            <img src={facebook} alt="Facebook" className="w-[1.5rem] h-[1.5rem]" />
          </a>
          <a href="#">
            <img src={telegram} alt="Telegram" className="w-[1.5rem] h-[1.5rem]" />
          </a>
          <a href="#">
            <img
              src={instagram}
              alt="Instagram"
              className="w-[1.5rem] h-[1.5rem]"
            />
          </a>
        </div>
        <div className="grid grid-flow-row md:grid-rows-none md:grid-cols-[repeat(3,max-content)] gap-[1rem] lg:gap-[3.625rem]">
          <div className="flex gap-[0.625rem] items-center">
            <img src={email} alt="Email" className="w-[1.5rem] h-[1.5rem] ml-[-0.125rem]" />
            <span className="text-[0.875rem]">pizza.store@gmail.com</span>
          </div>
          <div className="flex gap-[0.625rem] items-center">
            <img src={phone} alt="Phone" className="w-[1.125rem] h-[1.125rem]" />
            <span className="text-[0.875rem]">+38 037 382 24 12</span>
          </div>
          <div className="flex gap-[0.625rem] items-center">
            <img src={location} alt="Location" className="w-[1rem] h-[1.375rem]" />
            <span className="text-[0.875rem]">Baker Street 221 B</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
