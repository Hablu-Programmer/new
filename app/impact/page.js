import React from "react";
import Button from "../Components/Button";
import Image from "next/image";
import Review from "../Components/Review";
import Ganre from "../Components/Ganre";
import DiscoveredArtist from "../Components/DiscoveredArtist";
function Impact() {
  return (
    <div>
      <div className="ImpactHero ">
        <div className="max-w-[680px] mx-auto px-4 lg:px-6">
          <h1 className="text-center text-[#fff] font-bold text-3xl sm:text-[40px] lg:text-[64px] leading-tight capitalize mb-4 lg:mb-6">
            Changing the world one song at a time
          </h1>
          <p className="text-center text-[#A1A1A2] text-lg lg:text-[20px] font-normal capitalize">
            YourSong is for those who love music, enjoy sharing it with others,
            and want to support those that create it. 
          </p>
          <div className="text-center mt-[50px]">
            <Button BtnName="Create My Song" />
          </div>
        </div>
      </div>

      {/* top talented area  */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-14 lg:py-20">
        <div className="ms-5 absolute -top-32 left-0">
          <Image
            src="/impactHeroIcon.png"
            alt="Logo"
            className="max-w-lg  -mb-[60px] ms-20"
            width={200}
            height={24}
            priority
          />
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="ImpactArtistBox col-span-12 lg:col-span-5 p-4 sm:p-16 pt-[184px]">
            <h3 className="text-[#fff] text-[32px] font-bold leading-7">
              For Artists. By Artists.
            </h3>
            <p className="text-[#A1A1A2] text-[20px] font-light mt-5">
              As music artists ourselves, we created YourSong to help emerging
              artists advance their careers. Our platform provides fans with a
              unique way to support great music, form down-to-earth personal
              connections with artists, and share in their early successes.
            </p>
          </div>
          <div className="TopTalantedBox col-span-12 lg:col-span-7 p-4 sm:p-16 pt-[184px]">
            <h3 className="text-[#fff] text-[32px] font-bold leading-7">
              Support Top Talent.
            </h3>
            <p className="text-[#A1A1A2] text-[20px] font-light mt-5">
              They’re called “starving artists” for a reason: the early years of
              a musician’s career can be grueling—with hundreds of songs written
              before earning a dime. At YourSong, the majority of your
              investment goes directly to the artist and their production team.
              In return, you receive an original song to call your own, a piece
              of its profitability*, and the gratitude of musicians who can
              focus on what they do best—all thanks to you.
            </p>
            <p className="text-[#5A5A5B] text-[12px] mt-3">
              *For two years after your song’s release
            </p>
          </div>
        </div>
        <div className="MusicBox !mt-6 lg:!py-[100px] !py-[60px]">
          <div className="text-center">
            <h2 className="ImpactHeading text-[32px] lg:!text-[40px]">
              Let’s make music together.
            </h2>
            <div className="flex justify-center">
              <button
                type="button"
                className="text-gray-100 max-w-[190px] focus:outline-none border border-gray-400 focus:ring-gray-300 font-bold text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 rounded-full bg-[#E1574B] text-[14px] hover:bg-transparent mt-5 w-full">
                Create Your Song
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14 lg:py-20 relative">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-5 absolute top-0 -right-10">
            <img
              src="/impactIconGreen.png"
              alt="Logo"
              className="max-w-lg lg:-mb-[60px] ms-20 w-[120px]"
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <h4 className="text-[32px] lg:text-[48px] text-[#A1A1A2] w-[90%] leading-tight text-start ">
              YourSong has opened doors for so many songwriters to make a living
              doing what they love
            </h4>
            <p className="text-[#A1A1A2] font-bold text-xl lg:text-[24px] mt-2">
              -Todd Johnson
            </p>
          </div>
        </div>
      </div>

      <div>
        <Review />
      </div>
      <div className="flex justify-center mt-10">
        <Button BtnName="Create Your song" />
      </div>

      <div className="pb-10">
        <Ganre />
      </div>

      <div>
        <DiscoveredArtist />
      </div>
    </div>
  );
}

export default Impact;
