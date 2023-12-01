import Link from "next/link";
import React from "react";
import Image from "next/image";
import MyAccordion from "./MyAccordion";
import Button from "./Button";

function Hero() {
  return (
    <>
      <div className="BgImg px-3 lg:px-0">
        <h1 className="text-center text-[48px] sm:text-[65px] lg:text-[80px] font-bold leading-relaxed pt-[150px]">
          {" "}
          <span className="text-[#E4C477] ">Your Story. </span>{" "}
          <span className="text-[#fff]">Your Song.</span>
        </h1>

        <p className="HeroP text-xl lg:text-2xl">
          Find your artist, and create something beautiful together.
        </p>

        <div className="content-center text-center mt-10">
          <Link href="">
            <Button
              BtnName="Create Your Song"
              className="uppercase dark:text-white"
            />
          </Link>
        </div>
      </div>

      {/* hero 2 section  */}
      {/* <div className="HeroTwo">
        <div className="text-center mt-10">
          <h3 className="text-gray-100 text-[40px] font-bold">How it works</h3>
          <p className="text-[#555557] text-[20px]">YourSong in 6 Steps</p>
        </div>
      </div> */}
    </>
  );
}

export default Hero;
