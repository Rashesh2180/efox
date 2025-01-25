import Image from "next/image";
import Link from "next/link";
import React from "react";
const workdata = [
  {
    id: 1,
    img: "/images/workinfo/work1.png",
    work_title:
      "Check that your device is eSIM-compatible and buy your data plan.",
    work_description:
      "Your phone must be compatible with eSIM. After verifying, look for your destination and buy a data plan.",
    href: "#",
    btn_name: "Check Compatibility",
  },
  {
    id: 2,
    img: "/images/workinfo/wokr2.png",
    work_title: "Download the eSIM app",
    work_description:
      "Set up the eSIM on your device by following the instructions in the app.",
    href: "#",
  },
  {
    id: 3,
    img: "/images/workinfo/work3.png",
    work_title: "Get online right after landing",
    work_description:
      "Start using your data plan as soon as you arrive at your destination. Your phone will automatically connect to the internet network upon arrival.",
    href: "#",
    btn_name: "View All Destinations",
  },
];
const WorkInfo = () => {
  return (
    <div className="inside_container sm:pt-44 pt-16 max-md:!px-7 ">
      <h2 className="section-heading text-center">How does eSIM from</h2>
      <h3 className="section-title  text-center sm:mb-7 mb-6">eSIM Fox work?</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 sm:gap-8 xl:gap-16">
        {workdata &&
          workdata.map((ele, ind) => (
            <div key={ind} className={``}>
              <div className="md:h-[27.18rem] h-[27.27rem] max-w-[16.93rem] relative  mx-auto">
                <Image
                  src={ele.img}
                  alt=""
                  height={100}
                  width={100}
                  className="h-full w-full "
                />
                <div className="w-14 h-14 absolute p-1 -bottom-6 left-1/2 -translate-x-1/2 bg-lightprimary text-fs22 font-bold text-white leading-8 rounded-full">
                  <span className="h-12 w-12 rounded-full bg-primary flex items-center justify-center ">
                    0{ele.id}
                  </span>
                </div>
              </div>
              <div className="flex items-center w-full sm:mb-10 mb-11 h-px">
                <span className="bg-bordercolor h-px w-full"></span>
                {ind !== 2 && (
                  <Image
                    src={"/svg/rightarrow_step.svg"}
                    height={12}
                    width={6}
                    className="max-lg:hidden -ml-1"
                    alt="step_arrow"
                  />
                )}
              </div>
              <div className="md:max-w-[21.87rem] max-w-[22.563rem] mx-auto">
                <h3 className="text-fs22 !tracking-letterspace2 font-semibold leading-9 text-center mb-3">
                  {ele.work_title}
                </h3>
                <p
                  className={`leading-8 tracking-letterspace2 text-lg text-center ${
                    ind === 1 ? "mb-5" : "mb-3"
                  }`}
                >
                  {ele.work_description}
                </p>
                {ind === 1 ? (
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
                ) : (
                  <Link
                    href={ele.href}
                    className="text-lg text-center block font-semibold leading-7 text-primary underline"
                  >
                    {ele.btn_name}
                  </Link>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkInfo;
