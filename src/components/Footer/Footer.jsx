import React from "react";
import Image from "next/image";
import SocialIcon from "../../components/SocialIcon/SocialIcon";

const Footer = () => {
  return (
    <section className="overflow-hidden px-4 py-20 sm:pl-16 bg-[#343f52]">
      <div className="flex flex-col md:flex-row py-8 gap-6">
        <div className="flex-1">
          <Image
            src="https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/6411d21ae68e4c71de3eff91_logo-light.svg"
            height="110"
            alt=""
            width="119"
          />
          <div className="mb-10 text-white text-lg">
            © Flux by{" "}
            <a
              href="https://webflow.com/templates/designers/elemis"
              target="_blank"
              class="link-hover link-white"
            >
              elemis
            </a>
            . <br />
            Powered by
            <a href="https://webflow.com" target="_blank">
              Webflow
            </a>
            .
          </div>
          <SocialIcon />
        </div>
        <div className="flex-1">
          <h4 className="text-white mb-2 text-xl">Get in Touch</h4>
          <div className="mb-5 text-white text-base">
            Moonshine St. 14/05 London, <br /> United Kingdom
          </div>
          <a href="#" className="link-hover link-white text-white text-base">
            info@email.com
          </a>
          <div className="text-white text-base">00 (123) 456 78 90</div>
        </div>
        <div className="flex-1">
          <h4 className="text-white mb-3 text-xl">Services</h4>
          <ul className="">
            <li className="mb-1">
              <a href="#" className="text-white text-base">
                Home
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-white text-base">
                Services
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-white text-base">
                Blog
              </a>
            </li>{" "}
            <li className="mb-1">
              <a href="#" className="text-white text-base">
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
