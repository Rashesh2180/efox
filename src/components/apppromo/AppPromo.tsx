import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppPromo = () => {
  return (
    <section className="bg-gradient-to-b from-secondary to-white max-lg:py-20">
      <div className="mx-auto max-w-[109.12rem] px-4">
      <div className="flex items-center max-lg:flex-col-reverse">
        <div className="">
          <Image
            src={"/images/donoloadbanner.png"}
            alt=""
            layout="fill"
            className="!w-[64.25rem]  !relative   md:!h-[39rem] !h-72"
          />
        </div>
        <div className="lg:max-w-[30.75rem] max-lg:text-center ">
          <h2 className="section-heading max-sm:text-center">Download the</h2>
          <h3 className="section-title  max-sm:text-center">eSIM Fox App</h3>
          <p className="text-lg text-neutral leading-8 tracking-letterspace mb-14">
            Download the App and easily add, manage, and extend your data plans
            for multiple destinations-all from one eSIM.
          </p>
          <div className="text-sm text-neutral2 text-center flex max-lg:justify-center items-center leading-6  gap-4">
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
    </section>
  );
};

export default AppPromo;
