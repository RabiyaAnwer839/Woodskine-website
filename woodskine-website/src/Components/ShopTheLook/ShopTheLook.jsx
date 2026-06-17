import React, { useRef, useState,useEffect } from 'react';
import './ShopTheLook.css';

import look1 from "../../assets/images/yellow-bag girls.webp";
import look1Mobile from "../../assets/images/mob-yellow-img.webp";

import look2 from "../../assets/images/brown-bag-girls.webp";
import look2Mobile from "../../assets/images/mobile-brown-img.webp";

import look3 from "../../assets/images/black-bag-girls.webp";
import look3Mobile from "../../assets/images/mobile-black-img.webp";

import HotspotPopup from '../HotspotPopup/HotspotPopup';

const lookbookData = [
  {
    id: 1,
    image: look1,
    mobileImage: look1Mobile,
    hotspots: [
      { id: "p1-1", top: "63%", left: "37%", mobileTop: "68%", mobileLeft: "41%", name: "Ella bag", price: "CHF 995.00" },
      { id: "p1-2", top: "56%", left: "78%", mobileTop: "58%", mobileLeft: "74%", name: "Iris bag", price: "CHF 890.00" },
      { id: "p1-3", top: "76%", left: "64%", mobileTop: "80%", mobileLeft: "61%", name: "Marthe Bucket", price: "CHF 1,150.00" }
    ]
  },
  {
    id: 2,
    image: look2,
    mobileImage: look2Mobile,
    hotspots: [
      { id: "p2-1", top: "60%", left: "49%", mobileTop: "64%", mobileLeft: "50%", name: "Ella bag", price: "CHF 995.00" },
      { id: "p2-2", top: "62%", left: "81%", mobileTop: "67%", mobileLeft: "78%", name: "Iris bag", price: "CHF 890.00" }
    ]
  },
  {
    id: 3,
    image: look3,
    mobileImage: look3Mobile,
    hotspots: [
      { id: "p3-1", top: "74%", left: "34%", mobileTop: "72%", mobileLeft: "30%", name: "Martha bag", price: "CHF 1,195.00" },
      { id: "p3-2", top: "78%", left: "76%", mobileTop: "80%", mobileLeft: "72%", name: "Ella bag", price: "CHF 995.00" }
    ]
  }
];

export default function ShopTheLook() {
  const trackRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [activePin, setActivePin] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: '0px', left: '0px' });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToSlide = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const slides = track.querySelectorAll('.lookbook-individual-frame');
    const safeIndex = Math.max(0, Math.min(index, slides.length - 1));

    slides[safeIndex]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest'
    });

    setSlideIndex(safeIndex);
    setActivePin(null);
  };

  const handlePrev = () => goToSlide(slideIndex === 0 ? lookbookData.length - 1 : slideIndex - 1);
  const handleNext = () => goToSlide(slideIndex === lookbookData.length - 1 ? 0 : slideIndex + 1);

  const openPopup = (e, pin) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const popupWidth = 280;
    const padding = 12;

    let left = rect.right + 12;
    if (left + popupWidth > window.innerWidth - padding) left = rect.left - popupWidth - 12;
    if (left < padding) left = padding;

    let top = rect.top - 10;
    if (top < padding) top = padding;

    setActivePin(pin);
    setPopupPosition({ top: `${top}px`, left: `${left}px` });
  };

  return (
    <section className="lookbook-section-container">
      <div className="lookbook-viewport-window" ref={trackRef}>
        <div className="lookbook-slider-track">
          {lookbookData.map((look) => (
            <div key={look.id} className="lookbook-individual-frame">
              <div
                className="lookbook-full-media"
                style={{
                  backgroundImage: `url(${isMobile ? look.mobileImage : look.image})`
                }}
              >
                {look.hotspots.map((pin) => (
                  <button
                    key={pin.id}
                    type="button"
                    className="hotspot-trigger-pulse"
                    style={{
                      top: isMobile ? pin.mobileTop : pin.top,
                      left: isMobile ? pin.mobileLeft : pin.left
                    }}
                    onClick={(e) => openPopup(e, pin)}
                    aria-label={`${pin.name}, ${pin.price}`}
                  >
                    <span className="inner-dot" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lookbook-floating-controls">
        <span className="controls-section-tag">SHOP THE LOOK</span>
        <div className="controls-action-row">
          <button className="arrow-nav-btn" onClick={handlePrev} type="button">←</button>
          <span className="slide-fraction-counter">
            {slideIndex + 1} / {lookbookData.length}
          </span>
          <button className="arrow-nav-btn" onClick={handleNext} type="button">→</button>
        </div>
      </div>

      <HotspotPopup
        pin={activePin}
        position={popupPosition}
        onClose={() => setActivePin(null)}
      />
    </section>
  );
}