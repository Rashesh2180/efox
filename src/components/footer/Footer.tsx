"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [open, setOpen] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = (index) => {
    if (windowWidth < 1024) {
      setOpen(open === index ? null : index);
    }
  };

  return (
    <footer className="bg-black">
      <div className="inside_container max-lg:gap-12 max-lg:flex-col flex justify-between w-full lg:border-b max-lg:px-7 border-neutral2 lg:pt-24 pt-14 lg:pb-[5.5rem]">
        <div className="mx-auto">
          <Link href="#" className="h-16 mb-8 block">
            <Image
              src={"/svg/footerlogo.svg"}
              className="h-full w-full lg:max-w-56"
              width="0"
              height="0"
              alt="logo"
            />
          </Link>
          <button className="custom-button bg-primary !text-white mb-7">
            Get My eSIM
          </button>
          <div className="flex gap-2.5 items-center">
            {[
              "/svg/socialmedialogo/fb.svg",
              "/svg/socialmedialogo/youtube.svg",
              "/svg/socialmedialogo/tiktok.svg",
              "/svg/socialmedialogo/pinterest.svg",
            ].map((ele, ind) => (
              <Link
                key={ind}
                href={"#"}
                className="h-12 w-12 bg-neutral3 opacity-90 rounded-lg flex justify-center items-center"
              >
                <Image src={ele} alt="" height={18} width={14} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full lg:justify-end justify-between max-lg:flex-col xl:gap-28 lg:gap-12 gap-5">
          <div className="max-lg:border-b border-neutral2 max-lg:pb-5">
            <h3
              onClick={() => handleToggle(0)}
              className={`${
                open === 0 || windowWidth >= 1024
                  ? "mb-4 text-white"
                  : "mb-0 text-neutral2"
              }  text-lg max-lg:flex max-lg:cursor-pointer  w-full justify-between items-center font-semibold leading-9 `}
            >
              TopDestinations
              {open !== 0 && windowWidth < 1024 ? (
                <span>
                  <Image
                    src={"/svg/downchhevron.svg"}
                    alt="down_chevron"
                    className="lg:hidden"
                    width={15}
                    height={9}
                  />
                </span>
              ) : (
                <span>
                  <Image
                    src={"/svg/upchevron.svg"}
                    alt="up_chevron"
                    className="lg:hidden"
                    width={15}
                    height={9}
                  />
                </span>
              )}
            </h3>

            {(open === 0 || windowWidth >= 1024) && (
              <ul className="lg:max-w-56 max-lg:grid grid-cols-2">
                {[
                  "Europe",
                  "USA",
                  "Japan",
                  "Turkey",
                  "Spain",
                  "France",
                  "TheWorld",
                ].map((ele, ind) => (
                  <li
                    key={ind}
                    className="text-lg leading-9 text-neutral2 hover:text-primary transition-all duration-300 ease-out hover:tracking-widest"
                  >
                    <Link href="#">{ele}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="max-lg:border-b border-neutral2 max-lg:pb-5">
            <h3
              onClick={() => handleToggle(1)}
              className={`${
                open === 1 || windowWidth >= 1024
                  ? "mb-4 text-white"
                  : "mb-0 text-neutral2"
              }  text-lg max-lg:flex max-lg:cursor-pointer  w-full justify-between items-center font-semibold leading-9 `}
            >
              Legal
              {open !== 1 && windowWidth < 1024 ? (
                <span>
                  <Image
                    src={"/svg/downchhevron.svg"}
                    alt="down_chevron"
                    className="lg:hidden"
                    width={15}
                    height={9}
                  />
                </span>
              ) : (
                <span>
                  <Image
                    src={"/svg/upchevron.svg"}
                    alt="up_chevron"
                    className="lg:hidden"
                    width={15}
                    height={9}
                  />
                </span>
              )}
            </h3>

            {(open === 1 || windowWidth >= 1024) && (
              <ul className="lg:max-w-60 max-lg:grid grid-cols-2">
                {[
                  "Terms and Conditions",
                  "Privacy Policy",
                  "Cookies Policy",
                  "Refund Policy",
                  "Website Terms of Use",
                ].map((ele, ind) => (
                  <li
                    key={ind}
                    className="text-lg leading-9 text-neutral2 hover:text-primary transition-all duration-300 ease-out hover:tracking-widest"
                  >
                    <Link href="#">{ele}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="max-lg:border-b border-neutral2 max-lg:pb-5">
            <h3
              onClick={() => handleToggle(2)}
              className={`${
                open === 2 || windowWidth >= 1024
                  ? "mb-4 text-white"
                  : "mb-0 text-neutral2"
              }  text-lg max-lg:flex max-lg:cursor-pointer  w-full justify-between items-center font-semibold leading-9 `}
            >
              Interest
              {open !== 2 && windowWidth < 1024 ? (
                <span>
                  <Image
                    src={"/svg/downchhevron.svg"}
                    alt="down_chevron"
                    className="lg:hidden"
                    width={15}
                    height={9}
                  />
                </span>
              ) : (
                <span>
                  <Image
                    src={"/svg/upchevron.svg"}
                    alt="up_chevron"
                    className="lg:hidden"
                    width={15}
                    height={9}
                  />
                </span>
              )}
            </h3>

            {(open === 2 || windowWidth >= 1024) && (
              <ul className="lg:max-w-60 max-lg:grid grid-cols-2">
                {[
                  "What is an eSIM",
                  "eSIM compatible devices",
                  "How to install",
                  "FAQs",
                  "Blog",
                ].map((ele, ind) => (
                  <li
                    key={ind}
                    className="text-lg leading-9 text-neutral2 hover:text-primary transition-all duration-300 ease-out hover:tracking-widest"
                  >
                    <Link href="#">{ele}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="py-12 flex items-center justify-center gap-1 text-center text-neutral2 leading-9 tracking-letterspace2 text-lg px-5">
        Made with{" "}
        <span>
          <Image src={"/svg/heart.svg"} width={20} height={18} alt="heart" />
        </span>{" "}
        by people who love to travel. eSIM Fox 2024 ®
      </div>
    </footer>
  );
};

export default Footer;
