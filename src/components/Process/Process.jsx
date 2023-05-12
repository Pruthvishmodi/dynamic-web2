import React from "react";
import Image from "next/image";
import ProcessImg from "../../public/images/processimg.jpg";

const Process = () => {
  return (
    <section className="py-28 px-4 bg-[#fdfdfd]">
      <div className="max-w-7xl min-h-[30px] mx-auto px-6">
        <div className="py-28">
          <div className="top-36 text-center lg:sticky">
            <h3 className=" text-base font-semibold uppercase text-[#aab0bc]">
              Why Choose Us?
            </h3>
            <h2 className="text-4xl my-6 font-semibold text-[#343f52]">
              Here are a few{" "}
              <span className="text-transparent text-blue-800 px-1 font-serif italic">
                
                reasons
              </span>{" "}
              why our customers choose Flux.
            </h2>
          </div>
          <div>
            <div className=" lg:flex lg:gap-x-5">
              <div className="flex gap-x-5 p-5 rounded-lg bg-slate-200 shadow-xl mt-8">
                <div className=" text-5xl font-semibold bg-gradient-to-l from-green-300 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  01
                </div>
                <div>
                  <h3 className=" mt-0 mb-3 text-xls ">Collect Ideas</h3>
                  <div>Duis mollis commodo luctus cursus commodo tortor.</div>
                </div>
              </div>
              <div className="flex gap-x-5 p-5 rounded-lg bg-slate-200 shadow-xl mt-8">
                <div className=" text-5xl font-semibold bg-gradient-to-l from-green-300 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  02
                </div>
                <div>
                  <h3 className=" mt-0 mb-3 text-xls ">Data Analysis</h3>
                  <div>
                    Vivamus sagittis lacus augue fusce dapibus tellus nibh.
                  </div>
                </div>
              </div>
              <div className="flex gap-x-5 p-5 rounded-lg bg-slate-200 shadow-xl mt-8">
                <div className=" text-5xl font-semibold bg-gradient-to-l from-green-300 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  03
                </div>
                <div>
                  <h3 className=" mt-0 mb-3 text-xls ">Finalize Product</h3>
                  <div>
                    Vestibulum ligula porta felis maecenas faucibus mollis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-4 flex flex-col md:items-center">
        <h3 className="text-base">Why Choose Us?</h3>
        <h2 className="text-3xl mb-4">
          Here are a few reasons why our
          <br />
          customers choose Sandbox
        </h2>
      </div>
      <div className="m-0 flex flex-col overflow-hidden gap-4 lg:grid grid-cols-2">
        <div className="relative aspect-square">
          <Image src={ProcessImg} alt="" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4 md:pl-4 items-start">
          <h2 className="text-3xl">Collect Ideas</h2>
          <p className="text-lg">
            Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
            nulla non metus auctor fringilla. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo
            sit amet risus.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Process;
