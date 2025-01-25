"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


const reviewData = [
  {
    id: 1,
    review_title: "Awesome Service!",
    review_desription:
      "I'm really impressed with this eSIM technology - it's user-friendly",
    review_person: "Emma T.",
    avtar:
      "https://i.pinimg.com/736x/da/0c/a4/da0ca459fb64be9132a8f116417707c0.jpg",
  },
  {
    id: 2,
    review_title: "Works very well",
    review_desription:
      "I've been thoroughly impressed with the eSIM service's performance worldwide. It consistently delivers dependable data wherever I am",
    review_person: "Charlotte D.",
    avtar:
      "https://i.pinimg.com/736x/da/0c/a4/da0ca459fb64be9132a8f116417707c0.jpg",
  },
  {
    id: 3,
    review_title: "Very satisfied!",
    review_desription:
      "Truly pleased with my experience using eSIM FOX during my travels across Uzbekistan, Azerbaijan, and Turkey. The coverage was impressively stable...",
    review_person: "Alex F.",
    avtar:
      "https://i.pinimg.com/736x/da/0c/a4/da0ca459fb64be9132a8f116417707c0.jpg",
  },
  {
    id: 4,
    review_title: "Top eSIM for the international traveling!",
    review_desription:
      "This eSIM is a must-have for international travel! I've experienced exceptional coverage and swift internet speeds",
    review_person: "Mohammed H.",
    avtar:
      "https://i.pinimg.com/736x/da/0c/a4/da0ca459fb64be9132a8f116417707c0.jpg",
  },
];
const ClinetReview = () => {
  return (
    <section className="inside_container max-sm:!px-0 pb-20">
      <h2 className="section-heading text-center">Our customers</h2>
      <h3 className="section-title  text-center mb-3.5">
        Tells you better than us!
      </h3>
      <div className="flex gap-6 justify-center items-center mb-11">
        <Image
          src={"/svg/review_tag.svg"}
          alt="reivew_tag"
          width={181}
          height={45}
        />
        <span className="bg-bordercolor h-9 w-px"></span>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-px">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className="h-5 w-5 bg-[#2ea261] flex justify-center items-center"
              >
                <Image
                  src={"/svg/star.svg"}
                  alt="revo=iew_star"
                  height={12}
                  width={12}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-16">
        {reviewData.length > 0 ? (
          <Swiper
            breakpoints={{
              0: {
                slidesPerView:1,
                spaceBetween: 17,
              },
              640: {
                slidesPerView:2,
                spaceBetween: 17,
              },
              768:{
                slidesPerView:3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {reviewData.map((ele) => (
              <SwiperSlide key={ele.id} className="max-sm:!w-[18.93rem]">
                <div className="bg-secondary rounded-lg pl-7 max-sm:mx-auto group pr-5 py-7 flex flex-col h-[26.56rem]">
                  <div className="sm:h-16 sm:w-16 h-14 w-14 mb-5 rounded-full bg-lightprimary flex justify-center items-center">
                    <Image
                      src={ele.avtar}
                      height={0}
                      width={0}
                      className="rounded-full sm:h-[3.75rem] h-12 border-4 border-transparent  group-hover:border-primary w-12 sm:w-[3.75rem] object-cover object-top"
                      alt="review_avtar"
                      unoptimized
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <h6 className="text-fs22 leading-8 font-semibold mb-3.5 tracking-letterspace2">
                      {ele.review_title}
                    </h6>
                    <p className="text-neutral flex-1 tracking-letterspace2 text-lg leading-8 line-clamp-3">
                      {ele.review_desription.length > 110
                        ? ele.review_desription.slice(0, 100) + "..."
                        : ele.review_desription}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <p className="text-lg font-semibold leading-7">
                        {ele.review_person}
                      </p>
                      <div className="flex items-center gap-px">
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className="h-3.5 w-3.5 bg-[#2ea261] flex justify-center items-center"
                          >
                            <Image
                              src="/svg/star.svg"
                              alt="review_star"
                              height={8}
                              width={8}
                            />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No data found</p>
        )}
      </div>
      <div className="flex justify-center">
        <button className="custom-button">See All Review</button>
      </div>
    </section>
  );
};

export default ClinetReview;
