"use client";

import Slider from "react-slick";
import Slide from "./Slide";
import product from "../Product"; // Update the path as needed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows, you can add them later if needed
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {product.map((item) => (
          <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            manititle={item.manititle}
            price={item.price}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
