import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            magnam minus, iste natus commodi laboriosam ad? Corrupti ex
            voluptates porro reprehenderit delectus consectetur nam culpa iure.
            Aliquam molestias quibusdam amet facere libero omnis natus, at optio
            porro! Deleniti, nobis quae?
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
