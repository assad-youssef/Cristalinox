import React, { useEffect } from "react";
import Hero from "../hero/Hero";
import Cards from "../cardItems/Cards";
import Valeurs from "../cardItems/Card_Why/Valeurs";
import Slider from "../Sliders/Slider";
import Aide from "./Aide";
// import NewsLetter from "../Contact/Newsletter";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Cards />
      <Valeurs />
      <Slider />
      <Aide />
      {/* <NewsLetter /> */}
    </>
  );
}

export default Home;
