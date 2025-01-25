import Image from "next/image";
import React from "react";

const ImageBanner = () => {
  return (
    <section className="md:pt-32 pt-16 pb-20 lg:pb-44 inside_container max-sm:!px-7">
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center pb-20 sm:pb-40">
        <span className="border-2 mb-4 border-bordercolor sm:px-7 px-6 rounded-full py-1.5 text-center sm:text-2xl text-lg leading-9 font-bold text-primary">
          Good news!
        </span>
        <h2 className="text-2xl leading-[2.8rem] max-lg:text-center">
          Grab your data plan anytime. It starts the moment you land.
        </h2>
        <h3 className="text-2xl leading-[2.8rem] font-bold mb-12 max-lg:text-center">
          Stress-free travel, instant connection!
        </h3>
        <button className="custom-button bg-primary !text-white">See All Countries</button>
      </div>
      <div className="bg-secondary w-full rounded-2xl overflow-hidden  max-lg:flex-col flex relative flex-row-reverse  lg:pr-10 1440:pr-24 ">
        <div className="lg:ml-auto mx-auto lg:max-w-[32.6rem] py-16 max-lg:text-center lg:py-24">
          <h6 className="text-2xl font-medium text-neutral leading-10">
            Free offer Oui, it’s really free!
          </h6>
          <h2 className="lg:text-6xl text-4xl font-bold leading-9 lg:leading-[4.66rem] lg:mb-9 mb-6">
            1GB of Data on us to try eSIMFOX!
          </h2>
          <button className="custom-button !bg-primary !text-white">
            Grab the deal
          </button>
        </div>
        <div>
        <Image
          src={"/images/imagebanner/imagbanner.png"}
          className=" max-1440:!w-[80%]  !relative 1440:!-left-16 xl:!left-0 md:!h-[31.94rem] !h-72 lg:!-top-2.5 z-10 max-lg:mx-auto"
          alt="banner_men"
          layout="fill"
        />
        </div>
        <Image
          src={"/images/imagebanner/darkellipse.png"}
          alt=""
          width={100}
          height={100}
          className="h-[28.81rem] w-full lg:w-[28.81rem] absolute lg:-left-[3%] lg:-top-28 max-lg:bottom-0 max-lg:left-0 max-lg:rotate-180"
        />
        <Image
          src={"/images/imagebanner/leighellipse.png"}
          alt=""
          width={100}
          height={100}
          className=" absolute h-[38.81rem] lg:w-[38.81rem] w-full  lg:-left-[7%] lg:-top-52 max-lg:bottom-0 max-lg:rotate-180"
        />
      </div>
    </section>
  );
};

export default ImageBanner;
