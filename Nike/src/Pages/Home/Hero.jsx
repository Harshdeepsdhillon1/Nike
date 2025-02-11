import React from "react";
import Button from "../../components/Button";
const Hero = ({ heading, para, imageUrl, altText }) => {
  return (
    <section className="section-container">
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
