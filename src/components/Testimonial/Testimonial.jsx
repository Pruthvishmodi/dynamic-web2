"use client";
import React from "react";
import Image from "next/image";
import Icon from "../../public/icons/Icon.svg";
import ProfessionalImg from "../../public/images/testi.jpg";
import StarIcon from "../../public/icons/staricon.svg";
import { useTranslation } from "@/app/i18n";
const carddata = [
  {
    id: 1,
    rating: <StarIcon className="h-6 w-6" />,
    icon: <Icon className="w-14 h-12" />,
    header:
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibusdolor auctor.Vestibulum id ligula porta felis euismodsemper. Cras justo odio dapibus facilisis sociis natoque.",
    src: <ProfessionalImg />,
    title: "Coriss Ambady",
    desc: "Financial Analyst",
  },
  {
    id: 2,
    rating: <StarIcon className="h-6 w-6" />,
    icon: <Icon className="w-14 h-12" />,
    header:
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibusdolor auctor.Vestibulum id ligula porta felis euismodsemper. Cras justo odio dapibus facilisis sociis natoque.",
    src: <ProfessionalImg />,
    title: "Coriss Ambady",
    desc: "Financial Analyst",
  },
  {
    id: 3,
    rating: <StarIcon className="h-6 w-6" />,
    icon: <Icon className="w-14 h-12" />,
    header:
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibusdolor auctor.Vestibulum id ligula porta felis euismodsemper. Cras justo odio dapibus facilisis sociis natoque.",
    src: <ProfessionalImg />,
    title: "Coriss Ambady",
    desc: "Financial Analyst",
  },
  {
    id: 4,
    rating: <StarIcon className="h-6 w-6" />,
    icon: <Icon className="w-14 h-12" />,
    header:
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibusdolor auctor.Vestibulum id ligula porta felis euismodsemper. Cras justo odio dapibus facilisis sociis natoque.",
    src: <ProfessionalImg />,
    title: "Coriss Ambady",
    desc: "Financial Analyst",
  },
  {
    id: 5,
    rating: <StarIcon className="h-6 w-6" />,
    icon: <Icon className="w-14 h-12" />,
    header:
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibusdolor auctor.Vestibulum id ligula porta felis euismodsemper. Cras justo odio dapibus facilisis sociis natoque.",
    src: <ProfessionalImg />,
    title: "Coriss Ambady",
    desc: "Financial Analyst",
  },
  {
    id: 6,
    rating: <StarIcon className="h-6 w-6" />,
    icon: <Icon className="w-14 h-12" />,
    header:
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibusdolor auctor.Vestibulum id ligula porta felis euismodsemper. Cras justo odio dapibus facilisis sociis natoque.",
    src: <ProfessionalImg />,
    title: "Coriss Ambady",
    desc: "Financial Analyst",
  },
];

async function Testimonials({ data, lang }) {
  const { t } = await useTranslation(lang);
  return (
    <section className="bg-[#f0f0f8] font-sans font-normal text-lg leading-7">
      <div className="z-[2] w-full h-full max-w-7xl min-h-[30px] mx-auto px-12 py-5 relative">
        <div className="inline-block w-full py-32">
          <div className=" mb-12 mx-auto text-center">
            <h3 className="uppercase text-base font-semibold text-[#aab0bc] mt-0 mb-3">
              {t("testimonialTitle")}
            </h3>
            <h2 className="mb-4 text-4xl text-[#343f52] mt-0">
              {t("testimonialDec")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data?.map((val, i) => {
              console.log(val);
              return (
                <div key={val.id} className="bg-[#fff] rounded-xl lg:px-3 py-7">
                  <div>
                    <div className="flex items-center pl-10 p-4">
                      {carddata[i].rating}
                      {carddata[i].rating}
                      {carddata[i].rating}
                      {carddata[i].rating}
                      {carddata[i].rating}
                    </div>
                    <div className="px-10 pb-5 relative overflow-hidden">
                      <div className="absolute">{carddata[i].icon}</div>
                      <blockquot>{val.description}</blockquot>
                    </div>
                    <div className="flex items-center px-7 gap-5">
                      <Image
                        src={ProfessionalImg}
                        alt="#"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h5 class="margin-bottom-none">{val.name}</h5>
                        <div>{val.post}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
