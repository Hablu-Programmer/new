import React from "react";
import Image from "next/image";

function ArtistCard(props) {
  return (
    <div>
      <div className="SliderBox2">
        <div className="bg-[#1D1D1F] rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <Image
              src={props.img}
              alt="Logo"
              className="rounded-t-2xl w-full"
              width={400}
              height={200}
              priority
            />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-[24px] tracking-tight text-[#A1A1A2]">
              {props.name}{" "}
            </h5>

            <div className="flex justify-between">
              <div>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm text-center bg-[#23262F] rounded-lg focus:outline-none text-[#A1A1A2] font-bold">
                  {props.Element}
                </a>
              </div>
              <div className="mt-3">
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-gray-400"
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
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
