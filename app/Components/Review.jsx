"use client";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
// Import Swiper styles
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import StarIcon from "@mui/icons-material/Star";

const reviewData = [
  {
    id: 1,
    title: "Baby, i’m gonna leave you",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam doloribus incidunt qui consequuntur possimus odit harum ad. Rem, architecto aliquid?",
    name: "Arthur Merley",
    user: "@MimiG321",
  },
  {
    id: 2,
    title: "Baby, i’m gonna leave you",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam doloribus incidunt qui consequuntur possimus odit harum ad. Rem, architecto aliquid?",
    name: "Arthur Merley",
    user: "@MimiG321",
  },
  {
    id: 3,
    title: "Baby, i’m gonna leave you",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam doloribus incidunt qui consequuntur possimus odit harum ad. Rem, architecto aliquid?",
    name: "Arthur Merley",
    user: "@MimiG321",
  },
  {
    id: 4,
    title: "Baby, i’m gonna leave you",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam doloribus incidunt qui consequuntur possimus odit harum ad. Rem, architecto aliquid?",
    name: "Arthur Merley",
    user: "@MimiG321",
  },
  {
    id: 5,
    title: "Baby, i’m gonna leave you",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam doloribus incidunt qui consequuntur possimus odit harum ad. Rem, architecto aliquid?",
    name: "Arthur Merley",
    user: "@MimiG321",
  },
];

function Review() {
  return (
    <div className="review-section py-12 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-[32px] lg:text-[40px] font-bold text-[#fff] mb-20">
          See What Supporters Are Saying
        </h3>

        <div className="SwiperLeftRightBlur">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            watchSlidesProgress={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper !overflow-visible">
            {reviewData.map((item) => {
              const { id, title, desc, name, user } = item;
              return (
                <SwiperSlide key={id}>
                  <div className="SliderBox p-5 lg:p-10">
                    <div className="ReviewHeader flex justify-between mb-5">
                      <Image
                        src="/Vector.png"
                        alt="Logo"
                        className="h-[24px] "
                        width={34}
                        height={24}
                        priority
                      />
                      <div className="">
                        <StarIcon className="text-[#E4C477]" color="primary" />
                        <StarIcon className="text-[#E4C477]" color="primary" />
                        <StarIcon className="text-[#E4C477]" color="primary" />
                        <StarIcon className="text-[#E4C477]" color="primary" />
                        <StarIcon className="text-[#E4C477]" color="primary" />
                      </div>
                    </div>

                    <p className="reviewP !text-base lg:!text-xl !mt-6 !mb-6">
                      {desc}
                    </p>
                    <p className="ReviewUser">{user}</p>
                    <div className="flex">
                      <Image
                        src="/Frame 3035.png"
                        alt="Logo"
                        className="h-[35px] "
                        width={35}
                        height={35}
                        priority
                      />
                      <p className="ms-3">{title}</p>
                    </div>
                    <p className="ms-[50px] -mt-[10px] Arthurreview">
                      by {name}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="absolute -bottom-10 -left-0">
        <Image
          src="/Group 3024 (1).png"
          alt="Logo"
          className="pt-6 max-w-lg "
          width={100}
          height={24}
          priority
        />
      </div>
    </div>
  );
}

export default Review;
