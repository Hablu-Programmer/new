"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ArtistCard from "../Components/ArtistCard";
import Image from "next/image";

function ArtistsPage() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [filterBox, setFilterBox] = useState(true);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <div className="ArtistHero mb-20 px-4 lg:px-8">
        <h1 className="text-center text-white text-[40px] sm:text-[48px] lg:text-[65px] font-bold leading-relaxed pt-[150px]">
          Explore Our Artists
        </h1>
        <p className="HeroP text-xl lg:text-2xl max-w-[720px] mx-auto">
          With hundreds of handpicked artists across 26 musical genres, YourSong
          has the perfect songwriter for you.
        </p>
      </div>

      <div className="artist-section py-16">
        <div className="max-w-7xl m-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* sidebar btn */}
            <button
              className="w-full bg-transparent border border-white border-solid py-4 px-6 flex items-center justify-center lg:hidden gap-3 rounded-full hover:bg-[#E1574B] hover:border-[#E1574B]"
              onClick={() => setFilterBox(true)}>
              <svg className="icon h-5 w-5 fill-white">
                <use xlinkHref="/icons.svg#icon-tune"></use>
              </svg>
              FILTERS
            </button>
            {/* sidebar */}
            <div
              className={
                filterBox
                  ? "w-full lg:relative absolute top-14 left-0 lg:p-0 py-8 px-5 bg-[#141416] z-10 lg:flex lg:w-[325px] opacity-100 visible block"
                  : "opacity-0 invisible hidden"
              }>
              <div className="flex items-center gap-4 mb-4 lg:hidden ">
                <button
                  className="flex items-center h-10 w-10 justify-center bg-[#353945] rounded-full"
                  onClick={() => setFilterBox(false)}>
                  <svg className="icon h-5 w-5 fill-white">
                    <use xlinkHref="/icons.svg#icon-arrow-left"></use>
                  </svg>
                </button>
                <span className="text-xl text-white">Filters</span>
              </div>
              <div>
                <Accordion
                  className="bg-[#1D1D1F]"
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header1">
                    <Typography className="text-[#A1A1A2] text-[24px] font-semibold leading-tight ">
                      Music genre
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#A1A1A2]">
                      <div className="flex flex-wrap gap-1">
                        <div className="TabBox flex">
                          <span className="me-2">All</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="22"
                            fill="#5A5A5B"
                            className="bi    bi-plus"
                            viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                          </svg>
                        </div>
                        <div className="TabBox flex">
                          <span className=""> Rock</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="#5A5A5B"
                            className="bi     bi-plus"
                            viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                          </svg>
                        </div>
                        <div className="TabBox tabBoxActive">R&B</div>
                        <div className="TabBox flex">
                          <span className=""> Country</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="#5A5A5B"
                            className="bi     bi-plus"
                            viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                          </svg>
                        </div>
                        <div className="TabBox flex">
                          Salsa
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="#5A5A5B"
                            className="bi     bi-plus"
                            viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                          </svg>
                        </div>
                        <div className="TabBox flex">
                          Soca
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#5A5A5B"
                            className="bi mt-1 ms-1    bi-plus"
                            viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                          </svg>
                        </div>
                        <div className="TabBox flex">
                          <span className="me-1">Soul</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="#5A5A5B"
                            className="bi     bi-plus"
                            viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                          </svg>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className="bg-[#1D1D1F] rounded mt-3"
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header1">
                    <Typography className="text-[#A1A1A2] text-[24px] font-semibold leading-tight rounded-[20px]">
                      Artist’s gender
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#A1A1A2]">
                      <div className=" items-center me-4">
                        <div className="checkboxes__item">
                          <label className="checkbox style-h">
                            <input type="checkbox" checked />
                            <div className="checkbox__checkmark"></div>
                            <div className="checkbox__body">All</div>
                          </label>
                        </div>
                        <div className="checkboxes__item mt-2">
                          <label className="checkbox style-h">
                            <input type="checkbox" />
                            <div className="checkbox__checkmark"></div>
                            <div className="checkbox__body ">Male</div>
                          </label>
                        </div>

                        <div className="checkboxes__item mt-2">
                          <label className="checkbox style-h">
                            <input type="checkbox" />
                            <div className="checkbox__checkmark"></div>
                            <div className="checkbox__body">Female</div>
                          </label>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  className="bg-[#1D1D1F] rounded mt-3"
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header3">
                    <Typography className="text-[#A1A1A2] text-[24px] font-semibold leading-tight rounded-[20px]">
                      Instrument
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#A1A1A2]">
                      <div className=" items-center me-4">
                        <div className="checkboxes__item">
                          <label className="checkbox style-h">
                            <input type="checkbox" />
                            <div className="checkbox__checkmark"></div>
                            <div className="checkbox__body">All</div>
                          </label>
                        </div>
                        <div className="checkboxes__item mt-2">
                          <label className="checkbox style-h">
                            <input type="checkbox" />
                            <div className="checkbox__checkmark"></div>
                            <div className="checkbox__body ">Guitard</div>
                          </label>
                        </div>

                        <div className="checkboxes__item mt-2">
                          <label className="checkbox style-h">
                            <input type="checkbox" checked />
                            <div className="checkbox__checkmark"></div>
                            <div className="checkbox__body">Drums</div>
                          </label>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className="bg-[#1D1D1F] rounded mt-3">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header4">
                    <Typography className="text-[#A1A1A2] text-[24px] font-semibold leading-tight rounded-[20px]">
                      Instrument
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-[#A1A1A2]">
                      <div className=" items-center me-4">
                        <div className="checkboxes__item">
                          <label className="checkbox style-h">
                            <input type="checkbox" />
                            <div className="checkbox__checkmark"></div>
                            <div className="checkbox__body">All</div>
                          </label>
                        </div>
                        <div className="checkboxes__item mt-2">
                          <label className="checkbox style-h">
                            <input type="checkbox" checked />
                            <div className="checkbox__checkmark"></div>
                            <div className="checkbox__body ">Guitard</div>
                          </label>
                        </div>

                        <div className="checkboxes__item mt-2">
                          <label className="checkbox style-h">
                            <input type="checkbox" />
                            <div className="checkbox__checkmark"></div>
                            <div className="checkbox__body">Drums</div>
                          </label>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <button
                className="w-full text-xs uppercase mt-4 py-4 px-6 flex items-center justify-center lg:hidden gap-3 rounded-full bg-[#E1574B]"
                onClick={() => setFilterBox(false)}>
                Apply filters
              </button>
            </div>

            {/* artists items */}
            <div className="flex flex-col justify-between">
              <div className="">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-base lg:text-2xl text-[#fff] font-bold text-start mb-10 flex flex-wrap gap-4">
                      <span>234 Artists for R&B </span>
                      <ul className="list-disc flex ml-3">
                        <li className="me-10">All</li>
                        <li> genders Guitar </li>
                      </ul>
                    </h1>
                  </div>

                  <div>
                    <select
                      id="SortBY"
                      className="bg-[#1D1D1F] w-[99px] lg:w-[130px] p-2 text-[#A1A1A2] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Sort by</option>
                      <option value="US">Rock </option>
                      <option value="CA">R&B</option>
                      <option value="CA">Country</option>
                      <option value="FR">Salsa</option>
                      <option value="DE">Soca</option>
                      <option value="DE">Soul</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 mb-8 lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
                  <a className="inline-block overflow-hidden duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col h-full">
                      <ArtistCard
                        img="/men1.png"
                        name="Theresa Webb"
                        Element="Guitard"
                      />
                    </div>
                  </a>
                  <a className="inline-block overflow-hidden duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col h-full">
                      <ArtistCard
                        img="/Frame 4434 (16).png"
                        name="Theresa Webb"
                        Element="Guitard"
                      />
                    </div>
                  </a>

                  <a className="inline-block overflow-hidden duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col h-full">
                      <ArtistCard
                        img="/Frame 4434 (15).png"
                        name="Theresa Webb"
                        Element="Guitard"
                      />
                    </div>
                  </a>

                  <a className="inline-block overflow-hidden duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col h-full">
                      <ArtistCard
                        img="/Frame 4434 (14).png"
                        name="Theresa Webb"
                        Element="Guitard"
                      />
                    </div>
                  </a>

                  <a className="inline-block overflow-hidden duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col h-full EffectImg">
                      <ArtistCard
                        img="/Frame 4434 (13).png"
                        name="Theresa Webb"
                        Element="Guitard"
                      />
                    </div>
                  </a>

                  <a className="inline-block overflow-hidden duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col h-full">
                      <ArtistCard
                        img="/Frame 4434 (12).png"
                        name="Theresa Webb"
                        Element="Guitard"
                      />
                    </div>
                  </a>

                  <a className="inline-block overflow-hidden duration-300 transform hover:-translate-y-2 ">
                    <div className="flex flex-col h-full">
                      <ArtistCard
                        img="/Frame 4434 (11).png"
                        name="Theresa Webb"
                        Element="Guitard"
                      />
                    </div>
                  </a>

                  <a
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2">
                    <ArtistCard
                      img="/Frame 4434 (10).png"
                      name="Theresa Webb"
                      Element="Guitard"
                    />
                  </a>

                  <a
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2">
                    <ArtistCard
                      img="/Frame 4434 (8).png"
                      name="Theresa Webb"
                      Element="Guitard"
                    />
                  </a>

                  <a
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2">
                    <ArtistCard
                      img="/Frame 4434 (7).png"
                      name="Theresa Webb"
                      Element="Guitard"
                    />
                  </a>

                  <a
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2">
                    <ArtistCard
                      img="/Frame 4434 (6).png"
                      name="Theresa Webb"
                      Element="Guitard"
                    />
                  </a>

                  <a
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2">
                    <ArtistCard
                      img="/Frame 4434 (4).png"
                      name="Theresa Webb"
                      Element="Guitard"
                    />
                  </a>

                  <a
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2">
                    <ArtistCard
                      img="/Frame 4434 (3).png"
                      name="Theresa Webb"
                      Element="Guitard"
                    />
                  </a>

                  <a
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2">
                    <ArtistCard
                      img="/Frame 4434 (2).png"
                      name="Theresa Webb"
                      Element="Guitard"
                    />
                  </a>

                  <a
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2">
                    <ArtistCard
                      img="/Frame 4434 (1).png"
                      name="Theresa Webb"
                      Element="Guitard"
                    />
                  </a>

                  <a
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform rounded shadow-sm hover:-translate-y-2">
                    <ArtistCard
                      img="/men1.png"
                      name="Theresa Webb"
                      Element="Guitard"
                    />
                  </a>
                </div>

                {/* pagination  */}
                <nav aria-label="Page navigation ">
                  <ul className="items-center -space-x-px h-10 text-base flex justify-center gap-2 ">
                    <li className="">
                      <a
                        href="#"
                        className="rounded flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-[#353945]  border-gray-300 rounded-s-lg hover:bg-[#E1574B] hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-[#E1574B] dark:hover:text-[#E1574B]">
                        <span className="sr-only">Previous</span>
                        <svg
                          className="w-3 h-3 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-100 bg-[#353945] hover:bg-[#E1574B] hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg">
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-100 bg-[#E1574B] hover:bg-[#] hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg ">
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-100 bg-[#353945] hover:bg-[#E1574B] hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg">
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-100 bg-[#353945] hover:bg-[#E1574B] hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg">
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-100 bg-[#353945] hover:bg-[#E1574B] hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg">
                        5
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-[#353945] rounded hover:bg-[#E1574B] hover:text-gray-100 dark:hover:bg-[E1574B] dark:hover:text-white">
                        <span className="sr-only">Next</span>
                        <svg
                          className="w-3 h-3 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
                <Image
                  src="/group1.png"
                  alt="Logo"
                  className="max-w-lg -mb-2"
                  width={100}
                  height={24}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistsPage;
