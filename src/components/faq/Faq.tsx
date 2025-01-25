"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "What is an eSIM?",
    description:
      "Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.",
  },
  {
    id: 2,
    title: "What is an eSIM profile?",
    description:
      "Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.",
  },
  {
    id: 3,
    title: "How many profiles can I have on an eSIM?",
    description:
      "Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.",
  },
  {
    id: 4,
    title: "How do I activate my eSIM?",
    description:
      "Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.",
  },
  {
    id: 5,
    title: "Where can I find my eSIM activation code?",
    description:
      "Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.",
  },
  {
    id: 6,
    title: "When does the validity of my eSIM start to count?",
    description:
      "Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.",
  },
  {
    id: 7,
    title: "Do I need an ID card or passport to purchase a SIM Card?",
    description:
      "Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.",
  },
  {
    id: 8,
    title: "Is my smartphone eSIM-compatible?",
    description:
      "Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.",
  },
  {
    id: 9,
    title: "Does the iPhone 15 arrive only with eSIM in Europe?",
    description:
      "Simply said, an eSIM profile is a collection of data that ensures your device functionality (in other cases this information is carried by a SIM card). An eSIM profile is digitally saved on your eSIM card.",
  },
];
const Faq = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (ind) => {
    setOpen(open === ind ? null : ind);
  };
  return (
    <section className="inside_container sm:py-44 max-md:!px-7 pt-16 sm:pb-32 pb-24">
      <div className="flex max-lg:flex-col max-lg:gap-4 justify-between">
        <div className="lg:max-w-[29.5rem] max-lg:text-center">
          <h2 className="section-heading max-sm:text-center">FAQ</h2>
          <h3 className="section-title  max-sm:text-center mb-3.5">
            eSIM Questions
          </h3>
          <p className="text-lg text-neutral leading-8 tracking-letterspace mb-7">
            Aenean vel arcu sed ipsum ullamcorper blandit. Nullam quis sodales
            odio. Praesent vulputate gravida nisi non ultrices.
          </p>
          <div className="max-lg:hidden">
            <p className="text-2xl leading-9 font-semibold mb-5">
              Still need help?
            </p>
            <div className="lg:flex gap-2.5 items-center mb-4">
              <span className="h-10 w-10 rounded-full bg-secondary2 flex justify-center items-center">
                <Image
                  src={"/svg/phone.svg"}
                  alt="call"
                  height={16}
                  width={16}
                />
              </span>
              <div>
                <span className="leading-5 text-sm block">Phone</span>
                <Link href={"#"} className="leading-5 text-lg font-bold">
                  +3197010283954
                </Link>
              </div>
            </div>
            <div className="flex gap-2.5 items-center mb-16">
              <span className="h-10 w-10 rounded-full bg-secondary2 flex justify-center items-center">
                <Image
                  src={"/svg/email.svg"}
                  alt="call"
                  height={16}
                  width={16}
                />
              </span>
              <div>
                <span className="leading-5 text-sm block">Email</span>
                <Link
                  href={"#"}
                  className="leading-5 text-lg font-medium text-primary underline"
                >
                  +3197010283954
                </Link>
              </div>
            </div>
            <button className="custom-button bg-primary !text-white">
              Visit Help Center
            </button>
          </div>
        </div>
        <div className="flex lg:gap-5 gap-4 flex-col lg:max-w-[47.18rem] grow max-lg:mb-12">
          {accordionData &&
            accordionData.map((ele, ind) => (
              <div
                key={ele.id}
                className={`shadow-custom-shadow hover:border-primary hover:shadow-hover-shadow pl-8 pr-5 rounded-xl border-2 border-bordercolor ${
                  open === ind ? "sm:py-8 py-6" : "py-5 "
                }`}
              >
                <button
                  onClick={() => setOpen(ind)}
                  className={`${
                    open === ind ? "mb-5" : "mb-0"
                  } flex justify-between items-center  w-full gap-3`}
                >
                  <p className="sm:text-fs22 text-lg font-semibold leading-8 capitalize tracking-letterspace2 text-start">
                    {ele.title}
                  </p>
                  {open !== ind ? (
                    <button className="bg-bordercolor shrink-0 h-9 w-9 rounded-full flex justify-center items-center">
                      <Image
                        src={"/svg/rightangleArrow.svg"}
                        alt="accordion_close"
                        className="rotate-90"
                        height={15}
                        width={15}
                      />
                    </button>
                  ) : (
                    <button className="bg-primary h-9 w-9 shrink-0 rounded-full flex justify-center items-center">
                      <Image
                        src={"/svg/ccordionopen.svg"}
                        alt="accordion_close"
                        className=""
                        height={15}
                        width={15}
                      />
                    </button>
                  )}
                </button>
                {open === ind && (
                  <p className="ml-5 pl-5 pb-4 border-l text-start border-primary text-lg leading-7 tracking-letterspace2">
                    {ele.description}
                  </p>
                )}
              </div>
            ))}
        </div>
        <div className="lg:hidden flex-col justify-center items-center flex">
          <p className="text-2xl leading-9 font-semibold mb-5">
            Still need help?
          </p>
          <div className=" flex justify-between mb-6 w-full sm:max-w-[31.25rem] max-w-[25.25rem] mx-auto">
            <div className="flex flex-col justify-center items-center text-center">
              <span className="h-10 w-10 rounded-full mb-3.5 bg-secondary2 flex justify-center items-center">
                <Image
                  src={"/svg/phone.svg"}
                  alt="call"
                  height={16}
                  width={16}
                />
              </span>
              <div>
                <span className="leading-5 text-sm block">Phone</span>
                <Link
                  href={"#"}
                  className="lg:leading-5 leading-7 text-lg font-bold"
                >
                  +3197010283954
                </Link>
              </div>
            </div>
            <div className="flex flex-col text-center items-center">
              <span className="h-10 w-10 rounded-full mb-3.5 bg-secondary2 flex justify-center items-center">
                <Image
                  src={"/svg/email.svg"}
                  alt="call"
                  height={16}
                  width={16}
                />
              </span>
              <div>
                <span className="leading-5 text-sm block">Email</span>
                <Link
                  href={"#"}
                  className="leading-5 text-lg font-medium text-primary underline"
                >
                  +3197010283954
                </Link>
              </div>
            </div>
          </div>
          <button className="custom-button bg-primary !text-white">
            Visit Help Center
          </button>
        </div>
      </div>
      <div className="sm:pt-32 mt-20">
        <h3 className="section-heading text-center mb-10">Trusted By</h3>
        <div className="grid md:grid-cols-5 grid-cols-3 xl:gap-y-20 md:gap-y-10 gap-y-12 xl:gap-x-24 gap-x-16 place-items-center">
          {[
            "/svg/companylogo/tiktok.svg",
            "/svg/companylogo/flip.svg",
            "/svg/companylogo/meema.svg",
            "/svg/companylogo/jobget.svg",
            "/svg/companylogo/public.svg",
            "/svg/companylogo/clash.svg",
            "/svg/companylogo/dubb.svg",
            "/svg/companylogo/likewise.svg",
            "/svg/companylogo/finimize.svg",
            "/svg/companylogo/shoply.svg",
            "/svg/companylogo/nordvpn.svg",
            "/svg/companylogo/babypage.svg",
            "/svg/companylogo/greenlight.svg",
            "/svg/companylogo/stereo.svg",
            "/svg/companylogo/aura.svg",
          ].map((ele, ind) => (
            <Image
              key={ind}
              src={ele}
              height={0}
              width={0}
              alt="company_logo"
              className="h-auto w-auto mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
