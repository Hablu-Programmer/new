import React from "react";
import Hero from "./Hero";
import Artists from "./Artists";
import InvestMusic from "./InvestMusic";
import DiscoveredArtist from "./DiscoveredArtist";
import Review from "./Review";
import GanreProduct from "./Ganre";
import Works from "./works";

function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Works />
      <Artists />
      <InvestMusic />
      <DiscoveredArtist />
      <Review />
      <GanreProduct />
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
