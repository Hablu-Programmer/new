"use client";
import React, { useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Button from "./Button";

const artistsData = {
  btns: [
    {
      id: 1,
      title: "Pop",
    },
    {
      id: 2,
      title: "Reggae",
    },
    {
      id: 3,
      title: "Country",
    },
    {
      id: 4,
      title: "R&B",
    },
    {
      id: 5,
      title: "Hip-Hop",
    },
    {
      id: 6,
      title: "Salsa",
    },
    {
      id: 7,
      title: "Electro",
    },
    {
      id: 8,
      title: "Rock",
    },
  ],
  items: [{}],
};

function Artists() {
  return (
    <div className="artists py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-start-1 lg:col-span-2">
            <h3 className="text-[32px] lg:text-[40px] text-[#fff] font-bold text-center lg:text-left">
              Our Artists
            </h3>
          </div>
          <div className="lg:col-start-6 lg:col-span-7">
            <p className="text-lg lg:text-xl text-gray-500 text-center lg:text-left">
              As artists ourselves, we have an expansive network that allows us
              to bring in undiscovered talent from every corner of the land—from
              LA’s Sunset Strip to Nashville’s Music Row. While they may come
              from genres ranging from punk to funk, all YourSong artists have
              one thing in common: passion for creating music that inspires and
              impacts audiences—and people just like you.
            </p>
          </div>
        </div>

        {/* slider tab */}
        <div className="mt-[50px] mb-[100px]">
          <Tabs className="">
            <TabList className="TabHead border-b-2 border-[#555557] w-[80rem]">
              <Tab>Pop</Tab>
              <Tab>Reggae</Tab>
              <Tab>Country</Tab>
              <Tab>R&B</Tab>
              <Tab>Hip-Hop </Tab>
              <Tab>Salsa</Tab>
              <Tab>Electro</Tab>
              <Tab>Rock</Tab>

              {/* <Swiper
                modules={[Pagination]}
                loop={false}
                className="mySwiper !overflow-visible">
                {artistsData.btns.map(({ id, title }) => {
                  return (
                    <SwiperSlide className="!w-auto" key={id}>
                      <Tab>{title}</Tab>
                    </SwiperSlide>
                  );
                })}
              </Swiper> */}
            </TabList>

            <TabPanel>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper !overflow-visible">
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/woman.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/men1.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/men2.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/woman2.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/men3.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/woman.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/woman.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </TabPanel>
            <TabPanel>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper !overflow-visible">
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/woman2.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/men2.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/men1.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/woman.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/men3.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/woman.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="SliderBox">
                    <div className="max-w-sm bg-transparent rounded-2xl shadow dark:bg-transparent dark:border-transparent">
                      <a href="#">
                        <Image
                          src="/woman.png"
                          alt="Logo"
                          className="max-w-lg rounded-t-2xl w-full"
                          width={100}
                          height={24}
                          priority
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
                          John Smith
                        </h5>

                        <div className="lg:flex justify-between">
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                              Guitard
                            </a>
                          </div>
                          <a
                            href="#"
                            className="mt-3 flex items-center gap-1 text-[#E1574B]">
                            <span className="lg:hidden">View Profile</span>
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 lg:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </TabPanel>
          </Tabs>
        </div>

        <div className="content-center text-center -mt-10">
          <Link href="">
            <Button BtnName="VIEW ALL ARTISTS" className="dark:!text-white" />
          </Link>
        </div>
        <div className="hidden justify-end lg:flex">
          <Image
            src="/group1.png"
            alt="Logo"
            className=" max-w-lg w-[150px] "
            width={100}
            height={24}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Artists;
