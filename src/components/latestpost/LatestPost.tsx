"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const blogData = [
  {
    id: 1,
    img: "/images/blog/blog1.png",
    blog_date: "October 17, 2023",
    card_description:
      "Best eSIM & SIM Card Options in Turkey for Tourists: eSIMFox Review",
  },
  {
    id: 2,
    img: "/images/blog/blog2.png",
    blog_date: "October 17, 2023",
    card_description:
      "Best eSIM & SIM Card Options in Turkey for Tourists: eSIMFox Review",
  },
  {
    id: 3,
    img: "/images/blog/blog3.png",
    blog_date: "October 17, 2023",
    card_description:
      "Best eSIM & SIM Card Options in Turkey for Tourists: eSIMFox Review",
  },
];
const LatestPost = () => {
  return (
    <section className=" bg-gradient-to-b from-white to-secondary sm:pt-16 pt-[4.5rem] sm:pb-44 pb-20 ">
      <div className="inside_container max-sm:!px-0">
        <div className="flex justify-between items-center gap-2 mb-4 sm:mb-10 w-full">
          <div className="max-md:text-center max-md:w-full">
            <h2 className="section-heading">Latest Posts</h2>
            <h3 className="section-title">The eSIM FOX blog</h3>
          </div>
          <button className="custom-button max-md:hidden">See All Blog</button>
        </div>
        {blogData.length > 0 ? (
          <div className="mb-8">
            <Swiper
              modules={[Pagination]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 17,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <div className="w-full flex gap-8">
                {blogData.map((ele) => (
                  <SwiperSlide
                    key={ele.id}
                    className="max-sm:!w-[23.12rem] !mx-auto"
                  >
                    <div className="sm:max-w-[25.813rem]">
                      <div className="mb-8 sm:h-96 h-80 rounded-2xl overflow-hidden">
                        <Image
                          src={ele.img}
                          alt="card_img"
                          layout="fill"
                          className="w-full !relative h-full object-cover rounded-2xl"
                        />
                      </div>
                      <p className="text-base tracking-letterspace2 mb-3">
                        {ele.blog_date}
                      </p>
                      <p className="text-fs22 font-semibold leading-7">
                        {ele.card_description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        ) : (
          <p className="text-red-600 text-center py-5">No data found</p>
        )}
        <div className="flex justify-center">
        <button className="custom-button md:hidden">See All Blog</button>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
