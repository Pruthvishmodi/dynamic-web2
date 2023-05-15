import React from "react";
import Image from "next/image";
import AboImg from "../../public/images/aboimg.jpg";
import AbouImg from "../../public/images/img.jpg";
import AboutImg from "../../public/images/about.jpg";

const About = ({ data }) => {
  return (
    <section className="px-6 py-20 lg:flex lg:flex-row gap-9 mx-auto">
      <div className="mb-4 lg:flex relative lg:flex-1">
        <Image
          src={AboImg}
          alt=""
          className="rounded-lg aspect-video h-[500px] mb-6"
        />
        {/* <div className="gap-4 md:flex flex-row md:gap-6 relative aspect-video">
          <Image
            src={AbouImg}
            alt=""
            className="rounded-lg h-[160px] lg:w-[250px]"
          />
          <Image
            src={AboutImg}
            alt=""
            className="rounded-lg h-[160px] lg:w-[230px]"
          />
        </div> */}
      </div>

      <div className=" flex flex-col  lg:justify-center px-4 lg:flex-1">
        <h3 className="text-[#aab0bc] text-base mb-2">{data?.header}</h3>
        <h1 className="mb-7 text-4xl">
          {data?.title}
          {/* We bring <span className="text-blue-900">solutions</span> to make
          <br />
          life easier for our customers. */}
        </h1>

        <div className="block">
          {/* <h3 className="mb-1 text-xl text-[#343f52]">Creativity</h3> */}
          <p className="text-[#60697b] text-lg inline-block">
            {data?.description}
            {/* Curabitur blandit lacus magna ridiculus mus duis mollis. <br />
            Curabitur blandit lacus magna ridiculus mus duis mollis. <br />
            Curabitur blandit lacus magna ridiculus mus duis mollis.
            <br />
            Curabitur blandit lacus magna ridiculus mus duis mollis. */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
