import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
function DiscoveredArtist() {
  return (
    <div className="bg-[#1D1D1F] py-12 lg:py-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-span-12 lg:col-span-6 lg:py-16">
            <h1 className="text-[32px] text-center lg:text-left mb-6 lg:text-[56px] font-bold text-[#fff]">
              Are You an Artist? Get Discovered.
            </h1>
            <p className="JoinPlatform !text-base lg:!text-xl text-center lg:text-left">
              Join our platform and earn money doing what you love. Our
              supporters care about producing quality songs with broad
              commercial appeal that you’ll be proud to claim.
              <br /> <br />
              With decades of industry experience and a user-friendly platform,
              we make it easy for you to get noticed, promote your music, track
              your royalties, and make life-long fans.
            </p>
            <div className="mt-5">
              <Link
                href=""
                className="!w-full discover-btn flex justify-center lg:block">
                <Button BtnName="Apply Now" />
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-start-8 lg:col-span-6 lg:-mt-[20px] lg:-mb-[20px]">
            <Image
              src="/musicJoin.png"
              alt="Logo"
              className="lg:h-[600px] h-auto w-full max-w-[358px] lg:max-w-full mx-auto"
              width={1400}
              height={240}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoveredArtist;
