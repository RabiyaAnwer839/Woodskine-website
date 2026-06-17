import React, { useState } from 'react';
import './NewsLetter.css';

// Import your raw stone/marble texture background image asset
import stoneBg from "../../assets/images/bottom.webp"; // Update path and filename as needed

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription submission logic here
    console.log('Subscribed email:', email);
    setEmail('');
  };

  return (
    <section 
      className="newsletter-section"
      style={{ backgroundImage: `url(${stoneBg})` }}
    >
      <div className="newsletter-card-overlay">
        <span className="newsletter-overline">SUBSCRIBE TO OUR NEWSLETTER</span>
        
        <p className="newsletter-text-prompt">
          Sign up now and take advantage of special offers reserved only for our subscribers.
        </p>
        
        <form className="newsletter-form-row" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            className="newsletter-email-input" 
            placeholder="Your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit" className="newsletter-submit-btn">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;