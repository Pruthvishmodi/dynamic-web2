"use client";
import { useTranslation } from "@/app/i18n";
import { useRouter } from "next/navigation";
import React from "react";

const LanguageChange = ({ lang }) => {
  const router = useRouter();
  const { t } = useTranslation(lang);
  return (
    <div>
      <form className="flex gap-2 hover:text-blue-700 text-xl duration-300 font-semibold">
        {/* <label for="cars">Language :</label> */}
        <select
          value={lang}
          onChange={(e) => {
            router.replace(`/${e?.target?.value}`);
          }}
          name="language"
          id="language"
        >
          <option value="en">English</option>
          <option value="he">Hebrew (עִברִית)</option>
        </select>
      </form>
    </div>
  );
};

export default LanguageChange;
