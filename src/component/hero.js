import React from "react";
import "./hero.css";
import dark_arrow from "../assets/dark-arrow.png";
function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>we ensure for better world</h1>
        <p>
          The crisp autumn air carried the scent of fallen leaves and woodsmoke,
          swirling through the small village nestled between rolling hills. The
          sun, a hazy orange orb sinking below the horizon, painted the sky in
          hues of fiery red and good.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
