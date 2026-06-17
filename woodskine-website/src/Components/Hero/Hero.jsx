import React, { useEffect, useState } from 'react'
import "./Hero.css";

import image1 from "../../assets/images/image1.png.png";
import image2 from "../../assets/images/image2.png.webp";
import image3Left from "../../assets/images/image3.png.webp";
import image3Right from "../../assets/images/ella-sunflower-1hd.webp";

const slidesData = [
  { 
    leftImg: image1, 
    rightImg: image1,
    subtitle: "WOODSKINE WOMEN",
    title: <>Strong, proud and <br /> unstoppable</>,
    btnText: "KNOW MORE",
    isSplit: false // 👈 Tagging this as a full banner
  },
  {
    leftImg: image2, 
    rightImg: image2,
    subtitle: "COLLECTION",
    title: <>Dare to think Big</>,
    btnText: "Discover the collection",
    isSplit: false // 👈 Tagging this as a full banner
  },
  {
    leftImg: image3Left, 
    rightImg: image3Right,
    subtitle: "ELLA BAG",
    title: <>Born to shine</>,
    btnText: "Discover the Ella bag",
    isSplit: true // 👈 Tagging this as our special split frame
  }   
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length)
    }, 5000);

    return () => clearInterval(interval)
  }, []);

  return (
    <section className='hero-container'> 
      <div className="slideshow-wrapper">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            // 👈 Dynamically adding 'split-frame' or 'full-frame' class names based on our array data
            className={`slide-frame ${index === currentIndex ? "active" : ""} ${slide.isSplit ? "split-frame" : "full-frame"}`}
          >
            {/* Left Frame Column / Full Screen Container */}
            <div 
              className="column-left" 
              style={{ backgroundImage: `url(${slide.leftImg})` }}
            >
              {index === currentIndex && (
                <div className="hero-content">
                  <h5 className="hero-subtitle">{slide.subtitle}</h5>
                  <h1 className="hero-title">{slide.title}</h1>
                  <button className="hero-btn">{slide.btnText}</button>
                </div>
              )}
            </div>

            {/* Right Frame Column (Only shows up on our third split slide) */}
            {slide.isSplit && (
              <div 
                className="column-right" 
                style={{ backgroundImage: `url(${slide.rightImg})` }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="slider-indicators">
        {slidesData.map((_, index) => (
          <div 
            key={index} 
            className={`indicator-line ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;