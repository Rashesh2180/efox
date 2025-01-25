import Image from "next/image";
import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-bgcolor lg:pt-24 pt-10 pb-64 relative">
      <div className="max-w-[99.81rem] max-sm:px-0 px-4 mx-auto">
        <h6 className="text-[2.62rem] text-center font-semibold">
          One <span className="text-primary tracking-letterspace">eSIM</span>{" "}
          for All,{" "}
        </h6>
        <h1 className="text-center lg:text-7xl text-5xl leading-[3.13rem] lg:leading-[7rem] mb-5  tracking-letterspace font-bold">
          Here, There and Everywhere.
        </h1>
        <div className="flex lg:mb-10 mb-7 lg:items-center lg:justify-center lg:gap-10 gap-6 max-lg:flex-col px-4">
          <div className="flex gap-3 items-center lg:max-w-56">
            <Image src={"/svg/earth.svg"} width={52} height={52} alt="earth" />
            <span className="font-semibold">190 Countries 8 Regions</span>
          </div>
          <div className="px-0.5 bg-black h-20 max-lg:hidden  opacity-20"></div>
          <div className="flex gap-3.5 items-start max-w-[53.31rem]">
            <Image src={"/svg/sim.svg"} width={38} height={51} alt="earth" />
            <span className="text-xl font-semibold leading-7">
              Enjoy the convenience of one eSIM for all your destinations— top
              up and extend data plans for any country you visit, all on a
              single eSIM.
            </span>
          </div>
        </div>
        <div className="px-4 max-w-3xl mx-auto">
        <div className="mb-40 py-3 pl-5 pr-2 bg-white border-bordercolor border overflow-hidden mx-auto rounded-full flex gap-5">
          <Image
            src={"/svg/search.svg"}
            alt="search_icon"
            height={21}
            width={21}
          />
          <input
            type="text"
            placeholder="Where do you need internet?"
            className="leading-6 text-lg  bg-white outline-none flex-1"
          />

          <button className="h-14 w-14 rounded-full bg-primary flex justify-center items-center">
            <Image
              src={"/svg/wifi.svg"}
              alt="search_icon"
              height={23}
              width={30}
            />
          </button>
        </div>
        </div>
        <div className="flex gap-5 overflow-x-auto">
          <div className="max-lg:z-20 min-w-44 max-w-[18.56rem] sm:h-48 h-24 relative mx-auto">
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
          <div className="max-lg:z-20 min-w-44 max-w-[18.56rem] sm:h-48 h-24 relative mx-auto">
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
          <div className="max-w-xl max-sm:min-w-[24rem] absolute left-1/2 -translate-x-1/2 bottom-0 z-10">
            <div className="sm:h-[36.62rem] h-[29.62rem] relative">
              <Image
                src={"/images/hero/phonbe_img.png"}
                alt="phone"
                width={576}
                height={586}
                className="w-full h-full"
              />
              <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex-col justify-center items-center">
                <Image
                  src={"/svg/wifigreen.svg"}
                  alt="wifi_logo"
                  width={48}
                  height={48}
                  className="mb-4 mx-auto"
                />
                <h5 className="text-center text-xl font-bold mb-9">
                  Connected
                </h5>
                <div className="text-sm text-neutral2 text-center flex items-center leading-6 justify-center gap-4">
                  <span>Downlaod by</span>
                  <div className="flex gap-2 items-center">
                    <Link
                      href={"#"}
                      className="bg-black flex items-center justify-center rounded-full h-10 w-10"
                    >
                      <Image
                        src={"/svg/applelogo.svg"}
                        height={19}
                        width={16}
                        alt="apple_logo"
                      />
                    </Link>
                    <Link
                      href={"#"}
                      className="bg-bordercolor flex justify-center items-center rounded-full h-10 w-10"
                    >
                      <Image
                        src={"/svg/playstore.svg"}
                        height={17}
                        width={16}
                        alt="apple_logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="z-20 min-w-44 max-w-[18.56rem] sm:h-48 h-24 relative mx-auto">
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
          <div className="max-lg:z-20 min-w-44 max-w-[18.56rem] sm:h-48 h-24 relative mx-auto">
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
          <div className="max-lg:z-20 min-w-44 max-w-[18.56rem] sm:h-48 h-24 relative mx-auto">
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
      </div>
    </section>
  );
};

export default Hero;
