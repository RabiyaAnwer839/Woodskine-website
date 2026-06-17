import React from 'react';
import './DesignerWord.css';

// Make sure to place your black-and-white designer image asset inside your images folder
import designerImg from "../../assets/images/black-girl.webp"; 

function DesignerWord() {
  return (
    <div className="editorial-wrapper">
      {/* --- Section 1: The Designer's Word Split Grid Layout --- */}
      <section className="designers-word-container">
        
        {/* Left Grid Side: Editorial Statement Card Box */}
        <div className="designer-statement-card">
          <div className="quote-mark-icon">”</div>
          <h5 className="designer-label">THE DESIGNER'S WORD</h5>
          <p className="designer-quote-text">
            We must absolutely adopt a more reasoned and conscious consumption 
            habits by favouring quality and sustainable products. Personally, I 
            don't care how long it takes or how much it costs to produce a product, 
            as long as I am guaranteed to receive a unique, ethically made item 
            that is designed to last.
          </p>
          <span className="designer-signature">Miriam Alaix - Founder et designer</span>
        </div>

        {/* Right Grid Side: Full-Height Studio Imagery Panel */}
        <div 
          className="designer-image-panel"
          style={{ backgroundImage: `url(${designerImg})` }}
          aria-label="Miriam Alaix sketching handbag design ideas in studio workspace"
        />
      </section>

      {/* --- Section 2: Shop the Look Header Intro Block --- */}
      <section className="shop-look-intro">
        <h5 className="shop-look-label">SHOP THE LOOK</h5>
        <h2 className="shop-look-title">Reveal your identity</h2>
        <p className="shop-look-subtitle">
          Here are some styling ideas to help you make your choice.<br />
          Which model will reveal the Woodskine woman in you?
        </p>
      </section>
    </div>
  );
}

export default DesignerWord;