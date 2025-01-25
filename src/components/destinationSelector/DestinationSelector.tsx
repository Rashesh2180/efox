import Image from "next/image";
import React from "react";

const countrtriesData = [
  {
    id: 1,
    country_name: "USA",
    country_flag: "/svg/destination/usaflag.svg",
    price: "10",
  },
  {
    id: 2,
    country_name: "France",
    country_flag: "/svg/destination/franceflag.svg",
    price: "8",
  },
  {
    id: 3,
    country_name: "Japan",
    country_flag: "/svg/destination/japanflag.svg",
    price: "12",
  },
  {
    id: 4,
    country_name: "Germany",
    country_flag: "/svg/destination/germany.svg",
    price: "12",
  },
  {
    id: 5,
    country_name: "Italy",
    country_flag: "/svg/destination/italy.svg",
    price: "12",
  },
  {
    id: 6,
    country_name: "Turkey",
    country_flag: "/svg/destination/turkey.svg",
    price: "12",
  },
  {
    id: 7,
    country_name: "Switzerland",
    country_flag: "/svg/destination/switzerland.svg",
    price: "12",
  },
  {
    id: 8,
    country_name: "Czech Republic",
    country_flag: "/svg/destination/czeg.svg",
    price: "12",
  },
  {
    id: 9,
    country_name: "Spain",
    country_flag: "/svg/destination/spain.svg",
    price: "12",
  },
];
const DestinationSelector = () => {
  return (
    <section className="inside_container sm:pt-44 pt-16 max-sm:px-7">
      <h2 className="section-heading max-md:text-center">One eSIM for all</h2>
      <div className="flex items-center justify-between flex-wrap mb-6 sm:mb-8">
        <h3 className="section-title max-xl:mb-3.5 max-md:w-full text-center">
          Your Destinations
        </h3>
        <div className="flex gap-4 xl:gap-2 items-center flex-wrap md:ml-auto">
          <div className="border border-bordercolor sm:p-5 p-3.5 rounded-full max-md:w-full flex items-center gap-0.5">
            <Image
              src={"/svg/search.svg"}
              alt="search_icon"
              height={17}
              width={17}
            />
            <input
              type="text"
              className="flex-1 text-sm leading-5 bg-transparent outline-none"
              placeholder="Search..."
            />
          </div>
          <div className="border max-sm:w-full flex justify-between items-center border-bordercolor px-1 py-1.5 mx-auto rounded-full">
            {["Countries", "Regions", "Global"].map((ele, ind) => (
              <button
                key={ind}
                className="sm:text-xl text-lg font-bold leading-7 -tracking-normal text-neutral2 py-2.5 px-7 sm:px-6 hover:bg-black hover:text-white rounded-full"
              >
                {ele}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sm:mb-11 mb-4">
        {countrtriesData.length > 0 ? (
          <div className="grid gap-4 lg:gap-x-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-6">
            {countrtriesData.map((ele) => (
              <div
                key={ele.id}
                className="bg-white shadow-custom-shadow group border-2 border-white hover:border-primary hover:shadow-hover-shadow rounded-2xl pt-7 pb-5 px-7"
              >
                <div className="flex gap-3.5 pb-5 border-b items-center border-bordercolor">
                  <Image
                    src={ele.country_flag}
                    height={43}
                    width={43}
                    alt={ele.country_name}
                    className="rounded-full object-cover"
                  />
                  <h3 className="text-3xl font-bold leading-10">
                    {ele.country_name}
                  </h3>
                </div>
                <div className="flex justify-between items-center pt-5">
                  <p className="text-xl left-7 text-neutral2">
                    Starting at <span className="font-bold text-black">${ele.price}</span>
                  </p>
                  <button className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                    <Image
                      src={"/svg/rightangleArrow.svg"}
                      width={14}
                      height={14}
                      alt="right_arrow"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-600 py-5 text-center text-xl">No data found</p>
        )}
      </div>
      <button className="custom-button mx-auto flex justify-center items-center">
        See All Countries
      </button>
    </section>
  );
};

export default DestinationSelector;
