import React from "react";
import Image from "next/image";
import BannerImage from "../../public/images/BannerImg.jpg";

const Banner = ({ data }) => {
  return (
    <section className="px-4 py-16 bg-[#f0f0f8]">
      <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-12">
        <div className=" flex flex-col gap-6 items-start md:pl-4 lg:justify-center lg:flex-1">
          <h1 className="text-4xl">
            {data?.welcomeText}
            {/* We bring <br />
            <span class="text-blue-700">solutions</span>
            to make life easier for our customers. */}
          </h1>
          <p className="text-2xl">
            {data?.description}
            {/* We have considered our{" "}
            <span className="text-slate-500">solutions</span> to support every{" "}
            <br />
            stage of your growth. */}
          </p>
          <button>{data?.btnText}</button>
        </div>

        <div clasName="relative overflow-hidden md:justify-center  aspect-square flex lg:flex-1">
          <Image src={BannerImage} alt="img" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
