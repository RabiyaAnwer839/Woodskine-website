import React, { useEffect, useState } from 'react'
 
import './Text.css';

const quoteSlides =[
{
    id:1,
    statement:"Minimalist, timeless and beautifully refined, each WOODSKINE leather handbag is a unique and functional work of art.",
},
{
    id:2,
    statement:"Created by Miriam Alaix, the Woodskine brand brings a unique feminine perspective to traditional leather craft.",
},
{
    id:3,
    statement:"A favourite brand that brings ethics, responsibility and meaning to luxury leather goods."
}
]
function Text() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Background loop to change text every 6000ms (6 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quoteSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="quote-section-container">
      {/* Visual Double Quotation Graphic Block */}
      <div className="quote-icon-graphic">
        <span className="quote-mark">”</span>
      </div>

      {/* Dynamic Text Section Wrapper */}
      <div className="quote-text-content">
        {quoteSlides.map((slide, index) => (
          index === currentQuoteIndex && (
            <p key={slide.id} className="main-editorial-statement">
              {slide.statement}
            </p>
          )
        ))}
      </div>

      {/* Magazine & Media Endorsements Logo Row */}
      <div className="brand-press-row">
        <div className="press-logo img-magazin">IMAGINE<span>MAGAZIN</span></div>
        <div className="press-logo gala-font">Gala</div>
        <div className="press-logo welcome-font">ticino<span>welcome</span></div>
      </div>
    </section>
  );
}

export default Text;