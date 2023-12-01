import React from "react";
import MicNoneIcon from "@mui/icons-material/MicNone";
import GroupsIcon from "@mui/icons-material/Groups";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { Faq } from "../Components/Faq";
function Contact() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="Contact text-[#5A5A5B]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-[120px]">
          <div className="grid grid-cols-12 items-start gap-y-8">
            <div className="col-span-12 lg:col-span-5">
              <h1 className="text-[#fff] text-[56px] lg:text-[90px] xl:text-[118px] font-bold ">
                Let’s talk{" "}
              </h1>
              <p className="text-xl lg:text-[24px] mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                hendrerit quam turpis. Nunc finibus varius sapien, a dignissim
                dolor molestie ac.{" "}
              </p>
              <a
                href="mailto:info@yoursong.com"
                className="text-white text-[24px]">
                info@yoursong.com
              </a>

              <div className="justify-between gap-5 mt-12 lg:mt-24 hidden lg:flex">
                <div className="Office">
                  <h4 className="text-[#E4C477] text-[20px]">Our Office</h4>
                  <address className="text-[#A1A1A2] text-[16px]">
                    <p>123 main st</p>
                    <p>San Francisco, CA 90301</p>
                    <p className="mt-2">555.123.1234</p>
                    <p>hello@yoursong.com</p>
                  </address>

                  <br />
                  <div className="SocialIcon ">
                    <h4 className="text-[#E4C477] mb-2 text-[20px]">
                      Keep in touch
                    </h4>
                    <Link href="">
                      <FacebookIcon
                        color="primary"
                        className="text-[#fff] bg-[#1D1D1F] -2 text-[30px] me-3 p-1 rounded-xl"
                      />
                    </Link>
                    <Link href="">
                      <TwitterIcon
                        color="primary"
                        className="text-[#fff] bg-[#1D1D1F] -2 text-[30px] me-3 p-1 rounded-xl"
                      />
                    </Link>
                    <Link href="">
                      <InstagramIcon
                        color="primary"
                        className="text-[#fff] bg-[#1D1D1F] -2 text-[30px] me-3 p-1 rounded-xl"
                      />
                    </Link>
                    <Link href="">
                      <LinkedInIcon
                        color="primary"
                        className="text-[#fff] bg-[#1D1D1F] -2 text-[30px] me-3 p-1 rounded-xl"
                      />
                    </Link>

                    <Link href="">
                      <InstagramIcon
                        color="primary"
                        className="text-[#fff] bg-[#1D1D1F] -2 text-[30px] me-3 p-1 rounded-xl"
                      />
                    </Link>
                    <Link href="">
                      <LinkedInIcon
                        color="primary"
                        className="text-[#fff] bg-[#1D1D1F] -2 text-[30px] me-3 p-1 rounded-xl"
                      />
                    </Link>
                  </div>
                </div>
                <div className="ArtistContact">
                  <h4 className="text-[#E4C477] text-[20px]">Artists</h4>
                  <div className="text-[16px] text-[#A1A1A2]">
                    <p className="mb-2">
                      <MicNoneIcon />
                      <span className="ms-2"> Become an artist </span>
                    </p>
                    <p className="mb-2">
                      <GroupsIcon />
                      <span className="ms-2">Community</span>
                    </p>
                    <p>
                      <SupportAgentIcon />
                      <span className="ms-2">Help & Support</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 hidden lg:block"></div>
            <div className="ContactForm col-span-12 lg:col-span-6">
              <div className="p-5 sm:p-[32px] lg:p-[48px]">
                <form className="w-full">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block capitalize tracking-wide font-normal mb-2 text-[16px] text-[#A1A1A2]"
                        for="grid-first-name">
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-[#282829] text-gray-300 rounded-lg  py-3 px-4 mb-3 leading-tight focus:outline-none"
                        id="grid-first-name"
                        type="text"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block capitalize tracking-wide font-normal mb-2 text-[16px] text-[#A1A1A2]"
                        for="grid-first-name">
                        Last Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-[#282829] text-gray-300 rounded-lg  py-3 px-4 mb-3 leading-tight focus:outline-none"
                        id="grid-first-name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block capitalize tracking-wide font-normal mb-2 text-[16px] text-[#A1A1A2]"
                        for="grid-first-name">
                        Email
                      </label>
                      <input
                        className="appearance-none block w-full bg-[#282829] text-gray-300 rounded-lg  py-3 px-4 mb-3 leading-tight focus:outline-none"
                        id="grid-first-name"
                        type="email"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block capitalize tracking-wide font-normal mb-2 text-[16px] text-[#A1A1A2]"
                        for="grid-first-name">
                        Phone Number
                      </label>
                      <input
                        className="appearance-none block w-full bg-[#282829] text-gray-300 rounded-lg  py-3 px-4 mb-3 leading-tight focus:outline-none"
                        id="grid-first-name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block capitalize tracking-wide font-normal mb-2 text-[16px] text-[#A1A1A2]">
                        I need info about
                      </label>
                      <select
                        name=""
                        id=""
                        className="appearance-none block w-full  bg-[#282829] text-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none">
                        <option value="">Artist</option>
                        <option value="">Pricing</option>
                        <option value="">Impact</option>
                        <option value="">Contact</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block capitalize tracking-wide font-normal mb-2 text-[16px] text-[#A1A1A2]"
                        for="grid-password">
                        Message
                      </label>
                      <textarea
                        rows="10"
                        className="appearance-none block w-full bg-[#282829] text-gray-300  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none"></textarea>
                    </div>
                    <div className="w-[96%] mx-auto ">
                      <button
                        type="button"
                        className="text-gray-100  focus:outline-none border border-gray-400 focus:ring-gray-300 font-bold text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 rounded-full bg-[#E1574B] text-[14px] hover:bg-transparent w-[100%] uppercase mt-3">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="justify-start gap-5 mt-12 lg:mt-24 flex lg:hidden col-span-12 flex-wrap">
              <div className="Office">
                <h4 className="text-[#E4C477] text-[20px]">Our Office</h4>
                <address className="text-[#A1A1A2] text-[16px]">
                  <p>123 main st</p>
                  <p>San Francisco, CA 90301</p>
                  <p className="mt-2">555.123.1234</p>
                  <p>hello@yoursong.com</p>
                </address>

                <br />
                <div className="SocialIcon ">
                  <h4 className="text-[#E4C477] mb-2 text-[20px]">
                    Keep in touch
                  </h4>
                  <Link href="">
                    <FacebookIcon
                      color="primary"
                      className="text-[#fff] bg-[#1D1D1F] -2 text-[30px] me-3 p-1 rounded-xl"
                    />
                  </Link>
                  <Link href="">
                    <TwitterIcon
                      color="primary"
                      className="text-[#fff] bg-[#1D1D1F] -2 text-[30px] me-3 p-1 rounded-xl"
                    />
                  </Link>
                  <Link href="">
                    <InstagramIcon
                      color="primary"
                      className="text-[#fff] bg-[#1D1D1F] -2 text-[30px] me-3 p-1 rounded-xl"
                    />
                  </Link>
                  <Link href="">
                    <LinkedInIcon
                      color="primary"
                      className="text-[#fff] bg-[#1D1D1F] -2 text-[30px] me-3 p-1 rounded-xl"
                    />
                  </Link>

                  <Link href="">
                    <InstagramIcon
                      color="primary"
                      className="text-[#fff] bg-[#1D1D1F] -2 text-[30px] me-3 p-1 rounded-xl"
                    />
                  </Link>
                  <Link href="">
                    <LinkedInIcon
                      color="primary"
                      className="text-[#fff] bg-[#1D1D1F] -2 text-[30px] me-3 p-1 rounded-xl"
                    />
                  </Link>
                </div>
              </div>
              <div className="ArtistContact">
                <h4 className="text-[#E4C477] text-[20px]">Artists</h4>
                <div className="text-[16px] text-[#A1A1A2]">
                  <p className="mb-2">
                    <MicNoneIcon />
                    <span className="ms-2"> Become an artist </span>
                  </p>
                  <p className="mb-2">
                    <GroupsIcon />
                    <span className="ms-2">Community</span>
                  </p>
                  <p>
                    <SupportAgentIcon />
                    <span className="ms-2">Help & Support</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Faq />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Contact;
