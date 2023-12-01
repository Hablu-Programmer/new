"use client";
import React from "react";
import Button from "../Components/Button";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import Review from "../Components/Review";
import { Faq } from "../Components/Faq";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Pricing() {
  return (
    <div className="pricing-page">
      <div className="SideImg overflow-hidden">
        <div className="PricingHero mb-20">
          <h1 className="text-center text-[#fff] font-bold text-[40px] sm:text-[48px] lg:text-[64px] leading-tight ">
            Create Your Song
          </h1>
          <div className="text-center mt-[50px] pb-[100px]">
            <Button BtnName="Create Your Song" />
          </div>
        </div>
        <div className="-mt-[50px]">
          <Image
            src="/group1.png"
            alt="Logo"
            className="max-w-lg  -mb-2"
            width={100}
            height={24}
            priority
          />
        </div>
      </div>

      {/* investment box  */}
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-[#fff] font-bold text-center text-[30px] lg:text-[40px] mb-[40px] lg:mb-[50px]">
          Where Your Investment Goes
        </h1>

        <div className="flex flex-wrap justify-center items-center">
          <div className="price-dialog-box CircleBox text-center h-[420px] w-[420px] flex items-center justify-center flex-col rounded-full p-5 sm:px-20 -mb-5 lg:-mr-5">
            <div className="">
              <Image
                src="/Music.png"
                alt="Logo"
                className="text-center"
                width={35}
                height={35}
                priority
              />
            </div>
            <h3 className="text-white font-bold text-[20px] text-center mt-1 mb-2">
              {" "}
              Songwriting & Recording
            </h3>

            <p className="text-[#A1A1A2]">
              Our platform was created by musicians for musicians and   fans.
              YourSong pays artists generously so they can focus on creating
              meaningful original music for you.  
            </p>
          </div>
          <div className="price-dialog-box CircleBox2 h-[420px] w-[420px] flex items-center justify-center flex-col rounded-full p-5 sm:px-20">
            <div className="">
              <Image
                src="/equalizer.png"
                alt="Logo"
                className="text-center"
                width={35}
                height={35}
                priority
              />
            </div>
            <h3 className="text-white font-bold text-[20px] text-center mt-1 mb-2">
              Engineering & Production
            </h3>

            <p className="text-[#A1A1A2] text-center">
              All songs are mixed and mastered by professional sound engineers.
              The result is a studio-quality song that you and your artist will
              be proud to share with everyone. 
            </p>
          </div>
          <div className="price-dialog-box CircleBox3 h-[420px] w-[420px] flex items-center justify-center flex-col rounded-full p-5 sm:px-20 -mt-5 lg:-ml-5">
            <div className="">
              <Image
                src="/Megaphone.png"
                alt="Logo"
                className="text-center"
                width={35}
                height={35}
                priority
              />
            </div>
            <h3 className="text-white font-bold text-[20px] text-center mt-1 mb-2">
              Engineering & Production
            </h3>

            <p className="text-[#A1A1A2] text-center">
              All songs are mixed and mastered by professional sound engineers.
              The result is a studio-quality song that you and your artist will
              be proud to share with everyone. 
            </p>
          </div>
        </div>

        <div className="text-center text-[#5A5A5B] mt-[40px] mb-[50px] ">
          <p>
            {" "}
            <span className="active">*</span> Earn a share of the royalties for
            2 years. <br />
            <span className="active">*</span> Love your song? Leave a tip. 100%
            of your donation goes directly to the artist.
          </p>
        </div>
      </div>

      {/* price box  */}
      <div className="CostBox max-w-[957px] mx-auto px-5">
        <h1 className="text-[#fff] font-bold text-center text-[26px] lg:text-[32px] mb-[40px] lg:mb-[50px]">
          How Much Does a Custom Song Cost & What Do I Get?
        </h1>

        <div className="CreateSongBox divide-y lg:divide-y-0 lg:divide-x divide-gray-500 flex flex-col lg:flex-row py-8 sm:py-12 px-6 sm:px-14 lg:px-0">
          <div className="m-auto text-center">
            <h2 className="PriceHeading !text-2xl lg:!text-[32px]">
              Create your song for as low as
            </h2>
            <span className="DLR me-2"> $</span>
            <span className="Price !text-7xl lg:!text-[128px]">695</span>

            <div className="max-w-[300px] mx-auto">
              <button
                type="button"
                className="text-gray-100  focus:outline-none border border-gray-400 focus:ring-gray-300 font-bold text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 rounded-full bg-[#E1574B] text-[14px] hover:bg-transparent mt-5 w-full">
                Start Now
              </button>
            </div>
          </div>

          <div className="text-start px-0 sm:px-16 flex flex-col justify-center mt-6 pt-6 lg:mt-0 lg:pt-0">
            <h5 className="feesHeading">This fee covers;</h5>
            <p className="text-[20px] text-gray-200 mb-2">
              <CheckIcon style={{ color: "#fff" }} color="primary" />
              <span className="ms-2">Collaboration</span>
            </p>
            <p className="text-[20px] text-gray-200 mb-2">
              <CheckIcon style={{ color: "#fff" }} color="primary" />
              <span className="ms-2">Production</span>
            </p>
            <p className="text-[20px] text-gray-200">
              <CheckIcon style={{ color: "#fff" }} color="primary" />
              <span className="ms-2">Promotion</span>
            </p>
          </div>
        </div>

        <div className="w-full justify-between items-start mt-5 gap-3 hidden lg:flex">
          <div className="Collaboration w-full">
            <h3>Collaboration</h3>
            <ul className="list-disc text-white ms-10 mt-5">
              <li> 1 hour kickoff call</li>
              <li> 1 week of songwriting & recording</li>
              <li>1 original song (3-5 min)</li>
            </ul>
          </div>
          <div className="Production w-full">
            <h3>Production</h3>
            <ul className="list-disc text-white ms-8 mt-5">
              <li> Quality control process</li>
              <li>Professional mix & master</li>
              <li>Studio quality, shareable song</li>
              <li>Track song progress in real-time</li>
            </ul>
          </div>
          <div className="Promotion w-full">
            <h3>Promotion</h3>
            <ul className="list-disc text-white ms-10 mt-5">
              <li> Artist spotlight page</li>
              <li> Streaming</li>
              <li>distribution</li>
              <li>Royalty tracking</li>
            </ul>
          </div>
        </div>

        {/* mbl version */}
        <div className="w-full lg:hidden mt-6">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper !overflow-visible">
            <SwiperSlide>
              <div className="Collaboration w-full">
                <h3>Collaboration</h3>
                <ul className="list-disc text-white ms-10 mt-5">
                  <li> 1 hour kickoff call</li>
                  <li> 1 week of songwriting & recording</li>
                  <li>1 original song (3-5 min)</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Production w-full">
                <h3>Production</h3>
                <ul className="list-disc text-white ms-8 mt-5">
                  <li> Quality control process</li>
                  <li>Professional mix & master</li>
                  <li>Studio quality, shareable song</li>
                  <li>Track song progress in real-time</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Promotion w-full">
                <h3>Promotion</h3>
                <ul className="list-disc text-white ms-10 mt-5">
                  <li> Artist spotlight page</li>
                  <li> Streaming</li>
                  <li>distribution</li>
                  <li>Royalty tracking</li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Review Area  */}

      <div className="max-w-7xl mx-auto px-5 mt-[150px]">
        <Image
          src="/yellow.png"
          alt="Logo"
          className="max-w-lg  -mb-2"
          width={40}
          height={25}
          priority
        />
      </div>
      <Review />

      <div className="max-w-7xl mx-auto mt-10 flex justify-center">
        <Button BtnName="Create Your song" />
      </div>

      <div className="flex justify-end">
        <Image
          src="/pricingreview.png"
          alt="Logo"
          className="  max-w-lg "
          width={100}
          height={24}
          priority
        />
      </div>

      {/* impact area  */}
      <div className="ImpactArea flex items-center py-16 lg:py-[220px]">
        <div className="max-w-7xl mx-auto px-5 text-start">
          <h1 className="text-white text-[32px] lg:text-[56px] font-bold leading-relaxed mb-3 lg:mb-5">
            YourSong. Your Impact.
          </h1>
          <p className="text-[#A1A1A2] text-xl lg:text-2xl font-medium leading-7 mb-4 lg:mb-10">
            The right song at the right moment has the power to change your
            life. Break free from conventional playlists and discover new talent
            in a novel way. By investing in emerging artists, you receive a
            custom song to call your own, a piece of its profitability, and the
            gratitude of musicians who can earn money doing what they love—all
            thanks to you.
          </p>
          <button className="btn mt-5 active font-bold text-xl !text-[#E1574B] flex items-center">
            <span className="me-2">Learn More </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M5 12H19"
                stroke="#E1574B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="#E1574B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* impact area  */}

      {/* Faq Section  */}
      <Faq />
      {/* Faq Section  */}
    </div>
  );
}

export default Pricing;
