import React from 'react';
import './ExceptionalKnowHow.css';

// Import your section image asset
import craftsmanImg from "../../assets/images/blacknwhite-girl.webp"; // Update this path to match your image file name

function ExceptionalKnowHow() {
  return (
    <section className="knowhow-section-container">
      <div className="knowhow-content-wrapper">
        
        {/* Left Side: Editorial Typography & Copy */}
        <div className="knowhow-text-block">
          <span className="knowhow-overline-tag">EXCEPTIONAL KNOW-HOW</span>
          
          <h2 className="knowhow-main-heading">
            Two years to find the best European craftsmen
          </h2>
          
          <p className="knowhow-description-paragraph">
            From the beginning, we were keen to promote the know-how and talent of 
            the craftsmen of our regions. For two years, we search for our ideal 
            partners.
          </p>
          
          <p className="knowhow-description-paragraph">
            Manufacturers that would be able to meet all our requirements and that 
            would see the future of leather goods as we conceive it: ethical and 
            sustainable production, with respect for people, animals and the 
            environment.
          </p>
          
          <a href="#know-more" className="knowhow-action-btn">
            KNOW MORE
          </a>
        </div>

        {/* Right Side: Black and White Context Image Display */}
        <div className="knowhow-image-block">
          <div 
            className="knowhow-media-canvas"
            style={{ backgroundImage: `url(${craftsmanImg})` }}
            role="img"
            aria-label="European craftsman working on sustainable leather layouts"
          />
        </div>

      </div>
    </section>
  );
}

export default ExceptionalKnowHow;