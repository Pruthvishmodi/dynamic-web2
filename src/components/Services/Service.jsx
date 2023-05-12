import React from "react";
import Image from "next/image";
import Services from "../../public/images/services.png";
import Services1 from "../../public/images/services1.png";
import Services2 from "../../public/images/services2.png";
import Services3 from "../../public/images/services3.png";
import Services4 from "../../public/images/services4.png";
import Services5 from "../../public/images/services5.png";
const servicedata = [
  {
    id: 1,
    src: Services,
    title: "Marketing Automation",
    desc: "Duis mollis gravida commodo id luctus erat porttitorligula, eget lacinia odio sem aget elit.",
  },
  {
    id: 2,
    src: Services1,
    title: "Project Management",
    desc: "Duis mollis gravida commodo id luctus erat porttitorligula, eget lacinia odio sem aget elit.",
  },
  {
    id: 3,
    src: Services2,
    title: "Web Analytics",
    desc: "Duis mollis gravida commodo id luctus erat porttitorligula, eget lacinia odio sem aget elit.",
  },

  {
    id: 4,
    src: Services3,
    title: " SEO Services",
    desc: "Duis mollis gravida commodo id luctus erat porttitorligula, eget lacinia odio sem aget elit.",
  },

  {
    id: 5,
    src: Services4,
    title: "Market Research",
    desc: "Duis mollis gravida commodo id luctus erat porttitorligula, eget lacinia odio sem aget elit.",
  },
  {
    id: 6,
    src: Services5,
    title: "Marketing Automation",
    desc: "Duis mollis gravida commodo id luctus erat porttitorligula, eget lacinia odio sem aget elit.",
  },
];

function Service() {
  return (
    <section className="bg-[#fdfdfd] max-w-7xl min-h-[30px] mx-auto px-6">
      <div className="py-36 lg:grid lg:grid-cols-2">
        <div className="top-36 self-start lg:sticky">
          <h3 className="text-base font-semibold uppercase text-[#aab0bc]">
            What We Do?
          </h3>
          <h2 className="text-4xl mb-6 font-semibold text-[#343f52]">
            The service we offer is{" "}
            <span className="text-[#605dba] px-1 font-serif italic">
              specifically
            </span>
            <br />
            designed to meet <br /> your needs.
          </h2>
          <p className="mb-9 text-[17px]">
            Cras mattis consectetur purus sit amet <br /> fermentum. Donec
            ullamcorper nulla non metus <br /> auctor fringilla. Integer posuere
            erat a ante <br />
            venenatis dapibus posuere velit aliquet.
          </p>
        </div>
        <div>
          <div>
            {servicedata.map((val) => (
              <div
                key={val.id}
                className="p-9 
                rounded-lg bg-[#fff] shadow-xl mt-8"
              >
                <div className="md:flex gap-x-8">
                  <div className="w-20 flex">
                    <Image src={val.src} alt="#" className="" />
                  </div>
                  <div>
                    <h3 className="text-[#343f52] mb-3 text-xl font-semibold">
                      {val.title}
                    </h3>
                    <div className="text-base">{val.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
