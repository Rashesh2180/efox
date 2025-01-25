import Image from "next/image";
import React from "react";

const OfferSection = () => {
  return (
    <section className="max-w-[118.25rem] sm:pb-44 pb-20 mx-auto px-4 flex xl:gap-7 gap-6 max-lg:flex-col w-full items-end">
      <div className="sm:py-20 py-14 bg-black rounded-lg sm:px-5 px-16 2xl:px-10 min-w-72 lg:max-w-[29.5rem] grow max-lg:w-full">
       <div className="lg:max-w-80">
       <h3 className="text-4xl font-semibold leading-[3rem] text-white tracking-letterspace2 mb-5">
          Meet Internet without borders
        </h3>
        <p className="text-xl leading-[2.8rem] text-gray-400 mb-9">
          We’re creating the easiest way to connect globally. Min hassle.{" "}
          <span className=" bg-white text-black font-semibold py-1 px-2 rounded-full">
            Max flexibility.
          </span>{" "}
          Instant activation.
        </p>
        <button className="custom-button bg-primary !text-white">
          Explore
        </button>
       </div>
      </div>
      <div className="rounded-lg bg-bordercolor lg:max-w-[22.31rem] max-lg:w-full overflow-hidden">
        <Image
          src={"/images/girlimg.png"}
          alt="girl_img"
          height={100}
          width={100}
          className="sm:h-[18.75rem] h-80 w-full object-cover object-top"
        />
      </div>
      <div className="lg:max-w-xl max-lg:w-full rounded-lg bg-primary py-12 sm:py-[4.37rem] px-8 sm:px-3 xl:px-5 grow min-w-72">
        <div className="sm:mb-8 mb-5">
          <div className="bg-black tracking-letterspace2 relative 1440:left-24 xl:left-10 sm:left-0 left-11 text-white inline-block rounded-lg text-center font-semibold rotate-[-1deg] py-1.5 px-5 xl:text-4xl text-2xl leading-9 sm:leading-[3.5rem]">
            At eSIMFOX,
          </div>
          <div className="bg-white tracking-letterspace2 relative top-1 1440:left-36 xl:left-14 sm:left-5 left-20 rotate-[2deg] text-black font-semibold inline-block text-center rounded-lg py-1.5 xl:px-5 px-3 xl:text-4xl text-2xl leading-9 sm:leading-[3.5rem]">
            We have One eSIM
          </div>
          <div className="bg-black tracking-letterspace2 relative top-1 xl:left-8 rotate-[-2deg] text-white font-semibold inline-block text-center rounded-lg py-1.5 px-5 xl:text-4xl text-2xl  leading-9 sm:leading-[3.5rem">
            For All Countries.
          </div>
        </div>
        <p className="text-center text-lg text-white leading-7 max-sm:max-w-56 mx-auto">
          Install once, use forever. No need to re-install!
        </p>
      </div>
      <div className="bg-secondary2 max-lg:w-full grow rounded-lg text-center lg:max-w-[22.56rem] px-5 flex flex-col justify-center items-center py-24 sm:py-[8.5rem]">
        <span className="text-primary text-7xl font-semibold tracking-letterspace2 leading-[6.56rem] mb-1">
          -50%
        </span>
        <p className="text-2xl font-semibold tracking-letterspace2 mb-1 max-w-60">
          eSIMs emit 50% less CO2 than regular SIMs
        </p>
      </div>
    </section>
  );
};

export default OfferSection;
