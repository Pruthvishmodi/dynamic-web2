"use client";
import React, { useState } from "react";
import HamburgerIcon from "../../public/icons/hemburger.svg";
import CloseIcon from "../../public/icons/closeicon.svg";
import BannerLogo from "../../public/icons/bannerlogo.svg";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <section className="px-4 py-6 box-border">
      <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
        <div>
          <BannerLogo className="h-28 w-28" />
        </div>
        {/* <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          {open ? (
            <CloseIcon className="h-9 w-9" />
          ) : (
            <HamburgerIcon className="h-9 w-9" />
          )}
        </button>
      </div> */}
        <div className="text-left lg:text-right">
          <div className="text-lg text-blue-800">Contact: +012-345-6789</div>
          <label htmlFor="email" className="text-lg text-black">
            Email: Example@gmail.com
          </label>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
