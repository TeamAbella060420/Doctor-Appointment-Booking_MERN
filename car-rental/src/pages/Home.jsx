import React from "react";
import HeroSlide from "../components/UI/HeroSlide";
import Helmet from "../components/Helmet/Helmet";

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="hero__slider-section">
        <HeroSlide />
      </section>
    </Helmet>
  );
};

export default Home;
