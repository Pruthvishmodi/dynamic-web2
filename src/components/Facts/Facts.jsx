import React from "react";
import Image from "next/image";

const Facts = () => {
  return (
    <section className="px-4 py-24 lg:grid grid-cols-2 flex flex-col lg:flex-row lg:gap-16">
      <div>
        <Image
          src="https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640afa543c13563175af1d23_solutions.jpg"
          height={"512"}
          width={"1000"}
          alt=""
        />
      </div>
      <div className=" flex flex-col py-20  lg:justify-center">
        <h3 className="text-[#aab0bc] mb-3 text-base">Customer Satisfaction</h3>
        <h1 className="mb-6 text-4xl">
          We make your spending{" "}
          <span class="text-gradient text-emphasize">stress-free</span> for you
          to have the perfect control.
        </h1>
        <p className="text-lg mb-7">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Praesent commodo cursus. Maecenas sed diam eget risus varius
          blandit sit amet non magna.
        </p>
        <div className=" flex flex-col md:grid grid-cols-2 gap-4">
          <div>
            <h4 className="mb-0 text-4xl">99.7%</h4>
            <h5 className="mb-1 text-lg">Customer Satisfaction</h5>
          </div>
          <div>
            <h4 className="mb-0 text-4xl">4x</h4>
            <h5 className="mb-1 text-lg">New Visitors</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
