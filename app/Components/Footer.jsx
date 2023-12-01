import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="footer mt-20 mb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Image
              src="/Logo.png"
              alt="Logo"
              className="h-[28px] w-[180px]  max-w-lg "
              width={100}
              height={24}
              priority
            />
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-[#FFFFFFA3] mb-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <div className="SocialIcon flex items-center space-x-4 sm:mt-0 ">
                <Link href="">
                  <Image
                    src="/fb.png"
                    alt="Logo"
                    className="max-w-lg "
                    width={40}
                    height={40}
                    priority
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/instra.png"
                    alt="Logo"
                    className="max-w-lg "
                    width={40}
                    height={40}
                    priority
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/tw.png"
                    alt="Logo"
                    className="max-w-lg "
                    width={40}
                    height={40}
                    priority
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/yt.png"
                    alt="Logo"
                    className="max-w-lg "
                    width={40}
                    height={40}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between lg:col-span-4 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="">
              <p className="font-semibold tracking-wide text-[#fff] text-[18px]">
                Category
              </p>
              <ul className="mt-2 space-y-2 FooterLi">
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="font-semibold tracking-wide text-[#fff] text-[18px]">
                Category
              </p>
              <ul className="mt-2 space-y-2 FooterLi">
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="font-semibold tracking-wide text-[#fff] text-[18px]">
                Category
              </p>
              <ul className="mt-2 space-y-2 FooterLi">
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#FFFFFFA3]">
                    Sample Link
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:justify-between pt-5 lg:pt-10 border-t border-[#1D1D1F] sm:flex-row">
          <p className="text-[14px] text-[#FFFFFFA3] text-center lg:text-left">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-[#FFFFFFA3]  divide-x text-[14px] ">
            <Link href="" className="pe-2">
              Privacy Policy
            </Link>

            <Link href="" className="ps-5">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8
