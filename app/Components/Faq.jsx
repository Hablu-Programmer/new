"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
// Import Swiper styles
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#282829] rounded">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex lg:items-center justify-between w-full p-4 focus:outline-none gap-3"
        onClick={() => setIsOpen(!isOpen)}>
        <p className="text-lg font-medium text-left">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-400 text-left">{children}</p>
        </div>
      )}
    </div>
  );
};

const btnsData = [
  "Commissioning Your Song",
  "Purchasing Your Song",
  "Using Your Song ",
  "About Your Song",
  "Earnings",
  "FAQ’s for Artists",
];

export const Faq = () => {
  const [tabBtnactive, setTabBtnactive] = useState("Purchasing Your Song");

  return (
    <div className="FaqBg">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-[100px]">
        <h2 className="max-w-lg mb-6 text-[32px] lg:text-[40px] font-bold leading-none tracking-tight text-[#fff] sm:text-4xl md:mx-auto">
          Curious? Want to Learn More?
        </h2>
        <p className="text-base text-[#A1A1A2] md:text-lg ">
          Get answers to the most frequently asked questions about YourSong
          here.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex gap-x-20 gap-y-6 px-4 lg:px-6 flex-col lg:flex-row">
        <div className="w-full lg:w-[300px] flex-shrink-0 hidden lg:block">
          <h5 className="text-[#A1A1A2] text-[20px] font-bold">Categories</h5>

          {btnsData.map((btn, i) => {
            return (
              <button
                className={
                  tabBtnactive == btn
                    ? "!text-[#E1574B] text-[20px] flex justify-between items-center gap-4 mt-6"
                    : "!text-[#5A5A5B] text-[20px] flex justify-between items-center gap-4 mt-6"
                }
                key={i}
                onClick={() => setTabBtnactive(btn)}>
                <span className="ms-2">{btn}</span>
                <div className="icon-box h-5 w-5 bg-current flex items-center justify-between rounded-full">
                  <svg className="icon h-5 w-5 fill-black scale-75">
                    <use xlinkHref="/icons.svg#icon-chevron-right"></use>
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        {/* mbl version */}
        <div className="w-full lg:w-[300px] flex-shrink-0 block lg:hidden">
          <h5 className="text-[#A1A1A2] text-[20px] font-bold">Categories</h5>

          <Swiper
            spaceBetween={20}
            modules={[Navigation, Pagination]}
            className="mySwiper !overflow-visible">
            {btnsData.map((btn, i) => {
              return (
                <SwiperSlide key={i} className="!w-auto">
                  <button
                    className={
                      tabBtnactive == btn
                        ? "!text-[#E1574B] text-[20px] flex justify-between items-center gap-4 mt-6 w-auto"
                        : "!text-[#5A5A5B] text-[20px] flex justify-between items-center gap-4 mt-6 w-auto"
                    }
                    key={i}
                    onClick={() => setTabBtnactive(btn)}>
                    <span className="ms-2">{btn}</span>
                    <div className="icon-box h-5 w-5 bg-current flex items-center justify-between rounded-full">
                      <svg className="icon h-5 w-5 fill-black scale-75">
                        <use xlinkHref="/icons.svg#icon-chevron-right"></use>
                      </svg>
                    </div>
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="w-full">
          <div className="space-y-4 text-[#A1A1A2]">
            <Item title="How do I commission a custom song?">
              <p className="text-gray-400 text-left">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </Item>
            <Item title="How much does it cost to commission a song?">
              <p className="text-gray-400 text-left">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </Item>
            <Item title="What happens after I submit my song commission form?">
              <p className="text-gray-400 text-left">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </Item>
            <Item title="Can I edit or cancel my song commission form after I submit it?">
              <p className="text-gray-400 text-left">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </Item>

            <Item title="How do I commission a custom song?">
              <p className="text-gray-400 text-left">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </Item>
            <Item title="How much does it cost to commission a song?">
              <p className="text-gray-400 text-left">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </Item>
            <Item title="What happens after I submit my song commission form?">
              <p className="text-gray-400 text-left">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </Item>
            <Item title="Can I edit or cancel my song commission form after I submit it?">
              <p className="text-gray-400 text-left">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </Item>
          </div>
        </div>
      </div>

      <div className="w-[10%] mx-auto mt-[50px] -mb-[50px] ">
        <Image
          src="/faqIcon.png"
          alt="Logo"
          className="text-center h-[150px] w-[200px]"
          width={150}
          height={100}
          priority
        />
      </div>
    </div>
  );
};
