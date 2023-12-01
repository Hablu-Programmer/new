import React from "react";
import Image from "next/image";
function InvestMusic() {
  return (
    <div className="invest-music py-12 lg:py-20">
      <div className="max-w-7xl m-auto px-4">
        <div className="flex flex-col lg:grid grid-cols-12 gap-6">
          <div className="InvestMusic col-start-1 col-span-7 rounded-2xl p-10 flex flex-col justify-end pt-48 lg:pt-0">
            <h3 className=" text-[32px] lg:text-[40px] font-bold text-[#fff]">
              Invest in Music
            </h3>
            <p className="text-base lg:text-[20px] font-medium text-gray-400">
              Your investment fuels the best new talent on their rise to the
              top. Collaborate with indie songwriters to inspire and produce a
              one-of-a-kind original song through an engaging process you won’t
              find anywhere else. 
            </p>
            <div className="flex mt-5">
              <button className="!text-[#E1574B] font-bold">Learn More</button>

              <svg
                className="mt-1 rtl:rotate-180 w-3.5 h-3.5 ms-2 text-[#E1574B]"
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
            </div>
          </div>
          <div className="InvestQuestion col-start-8 col-span-5 bg-[#1D1D1F] ml-0 rounded-2xl p-10 flex flex-col justify-end pt-48 lg:pt-0">
            <h3 className=" text-[32px] lg:text-[40px] text-[#fff] font-bold mt-10 mb-2">
              Get Your Questions Answered
            </h3>
            <p className="text-base lg:text-[20px] font-medium text-gray-400">
              The right song at the right moment makes all the difference. We
              know what you’re thinking: “How can I get more of that in my
              life?” We answer this burning question (and many others) on our
              FAQ/Contact page.
            </p>

            <div className="flex mt-5">
              <button className="!text-[#E1574B] font-bold">FAQs</button>

              <svg
                className="mt-1 rtl:rotate-180 w-3.5 h-3.5 ms-2 text-[#E1574B]"
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
            </div>
          </div>
          <div className="col-start-1 col-span-12 rounded-2xl GiterTwoArea p-10 pt-16 lg:pt-48 flex flex-col justify-end">
            <h3 className=" text-[32px] lg:text-[40px] text-[#fff] font-bold mt-10 mb-2">
              From Inspiration to Impact
            </h3>
            <p className="YourSong !text-base !lg:text-xl text-gray-400">
              YourSong revolutionizes the trajectory of emerging artists. Our
              platform empowers you to engage in the songwriting process and own
              part of the journey. You receive a custom-made song — and even a
              portion of the royalties. Your investment enables artists to
              create high-quality, impactful songs, while gaining production,
              distribution, and marketing support.
            </p>
            <div className="flex mt-5">
              <button className="!text-[#E1574B] font-bold">Learn More</button>

              <svg
                className="mt-1 rtl:rotate-180 w-3.5 h-3.5 ms-2 text-[#E1574B] -mb-20"
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
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <Image
              src="/Vector 2.png"
              alt="Logo"
              className="w-[50px] pt-6 max-w-lg "
              width={100}
              height={24}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestMusic;
