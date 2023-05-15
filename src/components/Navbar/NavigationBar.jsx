import React from "react";
import BannerLogo from "../../public/icons/bannerlogo.svg";
import LanguageChange from "../ToggleLanguage";
import { useTranslation } from "@/app/i18n";

const NavigationBar = async ({ lang, data }) => {
  const { t } = await useTranslation(lang);

  return (
    <section className="px-4 py-6 box-border">
      <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
        <div>
          <BannerLogo className="h-28 w-28" />
        </div>
        <LanguageChange lang={lang} />
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
          <div className="text-lg text-blue-800">
            {t("contact")}: {data?.contactNo}
          </div>
          <label htmlFor="email" className="text-lg text-black">
            {t("email")}: {data?.email}
          </label>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
