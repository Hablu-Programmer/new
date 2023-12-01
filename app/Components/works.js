"use client";
import React, { useState } from "react";

const worksdata = [
  {
    id: 1,
    title: "Commission your song",
    bgImg: "/work-img-1.png",
    desc: (
      <p className="text-[#A1A1A2] text-lg mt-3 max-w-[408px]">
        Think about what subjects make your heart sing and what sounds stir your
        soul. <br />
        Listen to some of our artists to get a feel for the emerging music
        scene. <br />
        Complete our interactive song commission form about the song you’d like
        to have an artist create.  Let us know if you have any artist
        preferences. Otherwise, we can find the best available match
      </p>
    ),
    name: "Timeframe",
    day: "1",
    color: "#4F9B8F",
  },
  {
    id: 2,
    title: "Meet your artist",
    bgImg: "/work-img-2.png",
    desc: (
      <p className="text-[#A1A1A2] text-lg mt-3 max-w-[348px]">
        Once your commission is accepted, we’ll set up a time where you can meet
        the artist to discuss your preferences and collaborate in a fun,
        interactive video call. <br />
        Ask questions. Get to know the artist. Have your voice heard. This is
        your VIP all access backstage pass—where all the magic happens! 
      </p>
    ),
    name: "Timeframe",
    day: "5",
    color: "#E1574B",
  },
  {
    id: 3,
    title: "In the studio",
    bgImg: "/work-img-3.png",
    desc: (
      <p className="text-[#A1A1A2] text-lg mt-3 max-w-[348px]">
        The artist hits the studio, writing a one-of-a-kind song based on your
        feedback. <br />
        The song goes through several layers of quality control as well as
        professional sound engineering, mixing, and mastering.
      </p>
    ),
    name: "Timeframe",
    day: "5",
    color: "#E4C477",
  },
  {
    id: 4,
    title: "Commission your song",
    bgImg: "/work-img-4.png",
    desc: (
      <p className="text-[#A1A1A2] text-lg mt-3 max-w-[408px]">
        Think about what subjects make your heart sing and what sounds stir your
        soul. <br />
        Listen to some of our artists to get a feel for the emerging music
        scene. <br />
        Complete our interactive song commission form about the song you’d like
        to have an artist create.  Let us know if you have any artist
        preferences. Otherwise, we can find the best available match
      </p>
    ),
    name: "Timeframe",
    day: "1",
    color: "#4F9B8F",
  },
  {
    id: 5,
    title: "Publish your song",
    bgImg: "/work-img-5.png",
    desc: (
      <p className="text-[#A1A1A2] text-lg mt-3 max-w-[348px]">
        Once your song’s finished, it’ll go live on Amazon Music, Apple Music,
        Spotify and all other major streaming services. <br /> Collect
        royalties* on your song.
      </p>
    ),
    name: "Timeframe",
    day: "1",
    color: "#E1574B",
  },
  {
    id: 6,
    title: "Stay in touch",
    bgImg: "/work-img-1.png",
    desc: (
      <p className="text-[#A1A1A2] text-lg mt-3 max-w-[348px]">
        As a YourSong investor, you’ll be the first to know when your
        commissioned artist(s) go on tour, release a new song, or announce major
        news. 
        <br />
        Enjoy exclusive discounts, VIP access to events, and other perks for
        being part of the scene.
      </p>
    ),
    name: "Timeframe",
    day: "1",
    color: "#E4C477",
  },
];

const Works = () => {
  const [workItemActive, setWorkItemActive] = useState(1);

  return (
    <div className="work-section">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14 lg:py-20">
        <div className="text-center mt-10">
          <h3 className="text-gray-100 text-[40px] font-bold">How it works</h3>
          <p className="text-[#555557] text-[20px]">YourSong in 6 Steps</p>
        </div>
        {/* w-[88px] */}
        <div className="work mt-12 gap-2 hidden lg:flex">
          {worksdata.map((item) => {
            const { id, bgImg, title, name, desc, day, color } = item;
            return (
              <div
                className={
                  workItemActive == id
                    ? "work-item min-h-[640px] bg-[#1D1D1F] rounded-3xl show w-full"
                    : "work-item min-h-[640px] bg-[#1D1D1F] rounded-3xl w-[88px]"
                }
                key={id}>
                <button
                  className="heading flex flex-col justify-between items-center min-h-[640px] py-16 w-full"
                  onClick={() => setWorkItemActive(id)}>
                  <div
                    className="title text-[40px] font-bold"
                    style={{ color }}>
                    0{id}
                  </div>
                  <span className="block" style={{ fill: color }}>
                    <svg className="icon h-6 w-6">
                      <use xlinkHref="/icons.svg#icon-arrow-right"></use>
                    </svg>
                  </span>
                </button>
                <div
                  className={`hidden body p-16 bg-cover bg-no-repeat rounded-3xl h-full flex-col justify-between`}
                  style={{ backgroundImage: `url(${bgImg})` }}>
                  {/* style={{ backgroundImage: url("/work-img-1.png") }} */}
                  <div className="title text-[40px] text-white font-bold">
                    0{id}
                  </div>
                  <div>
                    <p className="text-base text-[#4F9B8F]">
                      Step {id} / {worksdata.length - 1}
                    </p>
                    <h3 className="text-[40px] text-white font-bold mt-6">
                      {title}
                    </h3>
                    {desc}
                  </div>
                  <p className="text-base text-[#4F9B8F] mt-14">{name}</p>
                  <div className="title text-2xl text-white font-bold mt-1">
                    {`< ${day} Day`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="work mt-12 flex flex-col gap-2 lg:hidden">
          {worksdata.map((item) => {
            const { id, bgImg, title, name, desc, day, color } = item;
            return (
              <div
                className={
                  workItemActive == id
                    ? "work-item bg-[#1D1D1F] rounded-3xl show w-full"
                    : "work-item bg-[#1D1D1F] rounded-3xl w-dull "
                }
                key={id}>
                <button
                  className="heading flex flex-row justify-between items-center py-4 px-16 w-full"
                  onClick={() => setWorkItemActive(id)}>
                  <div
                    className="title text-[40px] font-bold"
                    style={{ color }}>
                    0{id}
                  </div>
                  <span className="block" style={{ fill: color }}>
                    <svg className="icon h-6 w-6 rotate-90">
                      <use xlinkHref="/icons.svg#icon-arrow-right"></use>
                    </svg>
                  </span>
                </button>
                <div
                  className={`hidden body p-6 sm:p-16 bg-cover bg-no-repeat rounded-3xl h-full flex-col justify-between bg-center`}
                  style={{ backgroundImage: `url(${bgImg})` }}>
                  {/* style={{ backgroundImage: url("/work-img-1.png") }} */}
                  <div className="title text-[40px] text-white font-bold">
                    0{id}
                  </div>
                  <div>
                    <p className="text-base text-[#4F9B8F]">
                      Step {id} / {worksdata.length - 1}
                    </p>
                    <h3 className="text-[40px] text-white font-bold mt-6">
                      {title}
                    </h3>
                    {desc}
                  </div>
                  <p className="text-base text-[#4F9B8F] mt-14">{name}</p>
                  <div className="title text-2xl text-white font-bold mt-1">
                    {`< ${day} Day`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
