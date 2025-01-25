import Image from "next/image";
import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-bgcolor lg:pt-24 pt-10 sm:pb-64 pb-36 relative">
      <div className="max-w-[99.81rem] max-sm:px-0 px-4 mx-auto">
        <h6 className="sm:text-[2.62rem] text-3xl text-center font-semibold">
          One <span className="text-primary tracking-letterspace">eSIM</span>{" "}
          for All,{" "}
        </h6>
        <h1 className="text-center lg:text-7xl text-5xl leading-[3.13rem] lg:leading-[7rem] sm:mb-5 mb-8  tracking-letterspace font-bold">
          Here, There and Everywhere.
        </h1>
        <div className="flex lg:mb-10 mb-7 lg:items-center lg:justify-center lg:gap-10 gap-6 max-lg:flex-col px-7">
          <div className="flex gap-3 items-center lg:max-w-56">
            <Image src={"/svg/earth.svg"} width={52} height={52} alt="earth" className="max-sm:w-9 max-sm:h-9" />
            <span className="font-semibold text-xl">190 Countries 8 Regions</span>
          </div>
          <div className="px-0.5 bg-black h-20 max-lg:hidden  opacity-20"></div>
          <div className="flex gap-3.5 items-start max-w-[53.31rem]">
            <Image src={"/svg/sim.svg"} width={38} height={51} alt="earth" className="max-sm:w-7 max-sm:h-10"/>
            <span className="text-xl font-semibold leading-7">
              Enjoy the convenience of one eSIM for all your destinations— top
              up and extend data plans for any country you visit, all on a
              single eSIM.
            </span>
          </div>
        </div>
        <div className="px-4 sm:max-w-3xl max-w-[25.5rem] mx-auto max-sm:mb-24">
        <div className="sm:mb-40 mb-0 sm:py-3 py-2 pl-7 pr-2 bg-white border-bordercolor border overflow-hidden mx-auto rounded-full flex sm:gap-5 gap-1.5">
          <Image
            src={"/svg/search.svg"}
            alt="search_icon"
            height={21}
            width={21}
          />
          <input
            type="text"
            placeholder="Where do you need internet?"
            className="leading-6 text-lg max-sm:text-sm  bg-white outline-none flex-1"
          />

          <button className="sm:h-14 sm:w-14 h-12 w-12 rounded-full bg-primary flex justify-center items-center">
            <Image
              src={"/svg/wifi.svg"}
              alt="search_icon"
              height={23}
              width={30}
              className="max-sm:w-6 max-sm:h-5"
            />
          </button>
        </div>
        </div>
        <div className="flex gap-5 overflow-x-auto">
          <div className="max-lg:z-20 min-w-[10rem] max-w-[18.56rem] sm:h-48 h-[6.56rem] relative mx-auto">
            <Image
              src={"/images/hero/card_1.png"}
              alt=""
              height={192}
              width={297}
              className="object-cover rounded-lg w-full h-full"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-10">
              <h6 className="text-base text-white">eSIM for </h6>
              <p className="text-3xl font-semibold text-white">France</p>
            </div>
          </div>
          <div className="max-lg:z-20 min-w-[10rem] max-w-[18.56rem] sm:h-48 h-[6.56rem] relative mx-auto">
            <Image
              src={"/images/hero/card_2.png"}
              alt=""
              height={192}
              width={297}
              className="object-cover rounded-lg w-full h-full"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-10">
              <h6 className="text-base text-white">eSIM for </h6>
              <p className="text-3xl font-semibold text-white">Italy</p>
            </div>
          </div>
         
         
          <div className="z-20 min-w-[10rem] max-w-[18.56rem] sm:h-48 h-[6.56rem] relative mx-auto">
            <Image
              src={"/images/hero/card_4.png"}
              alt=""
              height={192}
              width={297}
              className="object-cover rounded-lg w-full h-full"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-10">
              <h6 className="text-base text-white">eSIM for </h6>
              <p className="text-3xl font-semibold text-white">Dubia</p>
            </div>
          </div>
          <div className="max-lg:z-20 min-w-[10rem] max-w-[18.56rem] sm:h-48 h-[6.56rem] relative mx-auto">
            <Image
              src={"/images/hero/card_3.png"}
              alt=""
              height={192}
              width={297}
              className="object-cover rounded-lg w-full h-full"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-10">
              <h6 className="text-base text-white">eSIM for </h6>
              <p className="text-3xl font-semibold text-white">USA</p>
            </div>
          </div>
          <div className="max-lg:z-20 min-w-[10rem] max-w-[18.56rem] sm:h-48 h-[6.56rem] relative mx-auto">
            <Image
              src={"/images/hero/card_4.png"}
              alt=""
              height={192}
              width={297}
              className="object-cover rounded-lg w-full h-full"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-10">
              <h6 className="text-base text-white">eSIM for </h6>
              <p className="text-3xl font-semibold text-white">Dubia</p>
            </div>
          </div>
        </div>
        <div className="max-w-xl max-sm:min-w-[20.62rem] absolute left-1/2 -translate-x-1/2 bottom-0 z-10">
            <div className="sm:h-[36.62rem] h-[20.62rem] relative">
              <Image
                src={"/images/hero/phonbe_img.png"}
                alt="phone"
                width={576}
                height={586}
                className="w-full h-full"
              />
              <div className="absolute sm:bottom-14 bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col justify-center items-center">
                <Image
                  src={"/svg/wifigreen.svg"}
                  alt="wifi_logo"
                  width={48}
                  height={48}
                  className="sm:mb-4 mb-1.5 mx-auto max-sm:h-6 max-sm:w-7"
                />
                <h5 className="text-center sm:text-xl text-xs font-bold sm:mb-9 mb-5">
                  Connected
                </h5>
                <div className="text-xs text-neutral2 text-center flex items-center leading-6 justify-center gap-3">
                  <span>Downlaod by</span>
                  <div className="flex gap-1.5 items-center">
                    <Link
                      href={"#"}
                      className="bg-black flex items-center justify-center rounded-full h-8 w-8"
                    >
                      <Image
                        src={"/svg/applelogo.svg"}
                        height={14}
                        width={12}
                        alt="apple_logo"
                      />
                    </Link>
                    <Link
                      href={"#"}
                      className="bg-bordercolor flex justify-center items-center rounded-full h-8 w-8"
                    >
                      <Image
                        src={"/svg/playstore.svg"}
                        height={14}
                        width={12}
                        alt="apple_logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
