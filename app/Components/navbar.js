"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Button from "./Button";
import { usePathname } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className=" bg-[#141416] ">
            <div className="px-2 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
              <div className="relative flex items-center justify-between">
                <Link href="/" className="inline-flex items-center">
                  <Image
                    src="/Logo.png"
                    alt="Logo"
                    className="h-[28px] w-[180px] max-w-lg"
                    width={100}
                    height={24}
                    priority
                  />
                </Link>
                <ul className="flex items-center hidden space-x-5 lg:flex">
                  <li>
                    <Link
                      href="/"
                      className={`link font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400  ${
                        pathname === "/" ? "active" : ""
                      }`}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400">
                      Artists
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Product pricing"
                      title="Product pricing"
                      className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="About us"
                      title="About us"
                      className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400">
                      Impact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="About us"
                      title="About us"
                      className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400">
                      Contact
                    </a>
                  </li>
                  <li>
                    <Link href="">
                      <button
                        type="button"
                        className="text-gray-100 hover:text-white border border-gray-300  focus:outline-none focus:ring-gray-300  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 rounded-full text-[14px] font-bold hover:bg-[#E1574B]">
                        SIGN IN
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <Button BtnName="Create Your Song" />
                    </Link>
                  </li>
                  <li>
                    <SearchIcon style={{ color: "#fff" }} />
                  </li>
                  <li>
                    <PersonOutlineIcon style={{ color: "#fff" }} />
                  </li>
                  <li>
                    <WorkOutlineIcon style={{ color: "#fff" }} />
                  </li>
                </ul>
                <div className="lg:hidden z-[99990000000000]">
                  <button
                    aria-label="Open Menu"
                    title="Open Menu"
                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                    onClick={() => setIsMenuOpen(true)}>
                    <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                      />
                      <path
                        fill="currentColor"
                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                      />
                      <path
                        fill="currentColor"
                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                      />
                    </svg>
                  </button>
                  {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full  ">
                      <div className="p-5 bg-[#010101]  rounded shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div></div>
                          <div>
                            <button
                              aria-label="Close Menu"
                              title="Close Menu"
                              className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              onClick={() => setIsMenuOpen(false)}>
                              <svg
                                className="w-5 text-gray-100"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <nav>
                          <ul className="space-y-4 text-center">
                            <li>
                              <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400">
                                Home
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400">
                                Artists
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400">
                                Pricing
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                aria-label="About us"
                                title="About us"
                                className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400">
                                Impact
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                aria-label="About us"
                                title="About us"
                                className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400">
                                Contact
                              </a>
                            </li>
                            <li className="">
                              <Link href="">
                                <button
                                  type="button"
                                  className="text-gray-100  focus:outline-none border border-gray-400 focus:ring-gray-300 font-bold text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 rounded-full bg-[#E1574B] text-[14px] hover:bg-transparent mt-5 w-full">
                                  Create Your Song
                                </button>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <button
                                  type="button"
                                  className="text-gray-100 hover:text-white border border-gray-300  focus:outline-none focus:ring-gray-300  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 rounded-full text-[14px] font-bold hover:bg-[#E1574B] w-full">
                                  SIGN IN
                                </button>
                              </Link>
                            </li>
                            <div className="flex justify-around ">
                              <li className="flex">
                                <SearchIcon style={{ color: "#fff" }} />
                                <p className="text-gray-100 ms-2">Search</p>
                              </li>
                              <li className="flex">
                                <PersonOutlineIcon style={{ color: "#fff" }} />
                                <p className="text-gray-100 ms-2">Profile</p>
                              </li>
                              <li className="flex">
                                <WorkOutlineIcon style={{ color: "#fff" }} />
                                <p className="text-gray-100 ms-2">Cart</p>
                              </li>
                            </div>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <a
                href="#"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Team
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Projects
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Calendar
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                  bell
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                  Sign out
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
