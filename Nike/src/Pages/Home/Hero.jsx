import React from "react";
import Button from "../../components/Button";
import "../../css/hero.css";

const Hero = ({ heading, para, imageUrl, altText, reverse }) => {
  return (
    <section className={`section-container ${reverse ? "reverse" : ""}`}>
      <div className="text-container">
        <h2 className="section-heading">{heading}</h2>
        <p className="section-para">{para}</p>
        <Button text="Learn More" type="secondary" link="/learn-more" />
      </div>
      <div className="image-container">
        <img src={imageUrl} alt={altText} className="shoe-image" />
      </div>
    </section>
  );
};

export default Hero;
