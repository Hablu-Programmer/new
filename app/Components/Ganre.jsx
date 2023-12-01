"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Button from "./Button";
import { FaCheck } from "react-icons/fa6";

const ganreData = [
  {
    id: 1,
    img: "/Group.png",
    title: "Alternative rock",
  },
  {
    id: 2,
    img: "/Frame.png",
    title: "Hip-Hop/Rap",
  },
  {
    id: 3,
    img: "/musical-keyboard 1.png",
    title: "R&B/Soul",
  },
  {
    id: 4,
    img: "/gitter.png",
    title: "Rock",
  },
  {
    id: 5,
    img: "/microphone 1.png",
    title: "Hip-Hop/Rap",
  },
  {
    id: 6,
    img: "/Frame.png",
    title: "Hip-Hop/Rap",
  },
];

function Ganre() {
  const [ganreChoosed, setGanreChoosed] = useState(false);

  return (
    <div className="ganre-section py-12 lg:py-20 relative border-b border-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-[32px] lg:text-[64px] text-center text-[#fff] font-bold mb-20">
           Pick a Genre. Produce a Song.
        </h1>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination]}
          className="mySwiper !overflow-visible">
          {ganreData.map(({ id, title, img }) => {
            return (
              <SwiperSlide key={id}>
                {/* active box  */}
                <div className="relative">
                  <div
                    className={
                      ganreChoosed == id
                        ? "ChildGentreBox cursor-pointer"
                        : "ChildGentreBox1 cursor-pointer"
                    }
                    onClick={() => setGanreChoosed(id)}>
                    <div
                      className={
                        ganreChoosed == id
                          ? "SecondChildBox"
                          : "SecondChildBox1"
                      }></div>
                    {ganreChoosed == id && (
                      <div className="check h-10 w-10 rounded-full bg-[#E1574B] flex justify-center items-center absolute -top-1 -right-1">
                        <FaCheck className="fill-white" />
                      </div>
                    )}

                    <div className=" ">
                      <Image
                        src={img}
                        alt={title}
                        className="h-[60px] w-[60px]  max-w-lg  m-auto mt-2"
                        width={70}
                        height={60}
                        priority
                      />
                      <h2 className="text-center text-[18px] text-[#fff] font-medium mt-5">
                        {title}
                      </h2>
                    </div>
                  </div>
                  {ganreChoosed == id && <div className="GentreBox"></div>}
                </div>
                {/* active box end  */}
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="content-center text-center mt-20">
          <Link href="">
            <Button BtnName="Start Now" />
          </Link>
        </div>
      </div>

      <div className="flex justify-end absolute top-0 right-0">
        <Image
          src="/Group 3024.png"
          alt="Logo"
          className=" max-w-lg "
          width={100}
          height={24}
          priority
        />
      </div>
    </div>
  );
}

export default Ganre;
