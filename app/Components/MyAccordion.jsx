"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function MyAccordion() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="mt-[220px] w-[350px]    m-auto  rotate-90">
      <div>
        <Accordion
          open={open === 1}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4  justify-between ">
          <div className="w-[20px] h-[50px]">
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`text-gray-100 rotate-180 ${
                open === 1 ? "text-blue-500 hover:!text-blue-700 " : ""
              }`}>
              <div className="rotate-90">
                <div className="Accor">
                  <h3>01</h3>
                </div>
                <div className="marginBottomArrow">
                  <ArrowForwardIcon />
                </div>
              </div>
            </AccordionHeader>
          </div>
          <AccordionBody className="pt-0 text-base font-normal">
            <div className="-rotate-90">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, illo Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cumque facere adipisci, accusantium qui a
                delectus aperiam quasi deserunt possimus omnis architecto
                commodi saepe aspernatur fuga ipsa minima quam sit dolores..
              </p>
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      <div>
        <Accordion
          open={open === 2}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4">
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors ${
              open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}>
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>

      <div>
        <Accordion
          open={open === 3}
          className="rounded-lg border border-blue-gray-100 px-4">
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors ${
              open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default MyAccordion;
