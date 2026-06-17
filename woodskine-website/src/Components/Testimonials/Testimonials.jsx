import React from 'react';
import './Testimonials.css';

const testimonialData = [
  {
    id: 1,
    tag: "EXCELLENT QUALITY",
    text: "I received my bag 2 weeks ago and I have to say it was well worth the wait. It was a bit of a splurge for me but the quality is amazing so I know I made a good investment. I love mixing styles in my outfits and its timeless design has the advantage of going with everything.",
    author: "Marine L."
  },
  {
    id: 2,
    tag: "A BEAUTIFUL DESIGN",
    text: "The design of the Marthe is magnificent, the leather is of great quality, pleasant to the touch, and the manufacture absolutely top-of-the-range. Very nice brand that deserves to be known. I am delighted with my purchase.",
    author: "Françoise Z."
  },
  {
    id: 3,
    tag: "A REAL GEM",
    text: "I was looking for a designer bag, ethically made and different from the big brands everyone knows. Well, I found it! I love my new Ella bag. It goes everywhere with me (even if I don't go out much these days). It's a real little gem that's out of the ordinary.",
    author: "Julia M."
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Section Header Labels */}
        <div className="testimonials-header">
          <span className="testimonials-overline">TESTIMONIALS</span>
          <h2 className="testimonials-title">What our customers say</h2>
        </div>

        {/* 3-Column Grid Card Array Wrapper */}
        <div className="testimonials-grid">
          {testimonialData.map((item) => (
            <div key={item.id} className="testimonial-card">
              
              {/* Minimal Editorial Quotation Mark Icon */}
              <div className="quote-icon-container">
                <svg 
                  className="editorial-quote-svg" 
                  viewBox="0 0 32 32" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8H4v6h6c0 4-2 6-6 7v3c6-1 8-5 8-10V8zm14 0h-6v6h6c0 4-2 6-6 7v3c6-1 8-5 8-10V8z" fill="#B0B0B0"/>
                </svg>
              </div>

              <span className="card-product-tag">{item.tag}</span>
              <p className="card-review-text">“{item.text}”</p>
              <span className="card-author-name">{item.author}</span>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;