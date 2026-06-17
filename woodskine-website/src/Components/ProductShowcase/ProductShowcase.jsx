import React, { useEffect, useState } from 'react'

import './ProductShowcase.css';

import image1 from "../../assets/images/pinkbag.jpg";
import image2 from "../../assets/images/bag2.webp";
import image3 from "../../assets/images/bag3.webp";

const productData = [
{
    id: 'ella',
    name: 'ELLA',
    label: 'THE AUDACIOUS',
    title: 'The Ella bag',
    first: 'The Ella is a small bag, but with it you are sure not to go unnoticed.',
    Para: "Inspired by the adventurous spirit of one of the greatest female explorers of the 20th century, the Ella reflects the courage and determination of the woman who inspired it.",
    last:'It\'s the bag of the free woman, who takes a bite out of life and isn\'t afraid to think big.',
    image: image1
  },
  {
    id: 'iris',
    name: 'IRIS',
    label: 'THE ELEGANT',
    title: 'The Iris bag',
    first: 'The Iris is a small handbag that will add a touch of elegance to any outfit.',
    Para: "Inspired by the strength of spirit of one of the most radical fighters for women's causes, the Iris reflects her unfailing intelligence and elegance.",
    last:'It is the bag of the independent, organised woman with a strong character.',
    image:image2
  },
  {
    id: 'marthe',
    name: 'MARTHE',
    label: 'THE TIMELESS',
    title: 'The Marthe bag',
    first: 'The Marthe is the perfect bag to tackle your crazy "Wonder Woman" days in style.',
    Para: "Inspired by a tireless fighter for equality, the Marthe reflects all of her perseverance and genius.",
    last:'It\'s the bag for the forward-thinking, brilliant, hyperactive woman.',
    image: image3 
  }
]
function ProductShowcase() {
const [activeIndex, setActiveIndex] = useState(0);

useEffect (() =>{
    const timer = setInterval(() =>{
        setActiveIndex((prevIndex) =>(prevIndex+1) % productData.length)
    },6000);
    return () => clearInterval(timer);
},[]);

return(
   <section className='showcase-container'>
<div className="showcase-image-side">
{productData.map((product, index) => (
          <div
            key={product.id}
            className={`showcase-bg-img ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${product.image})` }}
          />
        ))}
      </div>

<div className='showcase-content-side'>
<div className='showcase-text-wrapper'>
{productData.map((product, index) =>(
index === activeIndex &&(
    <div key={product.id} className="showcase-info-block">
                <h5 className="showcase-label">{product.label}</h5>
                <h2 className="showcase-title">{product.title}</h2>
                <p className="showcase-first">{product.first}</p>
             <p className="showcase-para">{product.Para}</p>
            <p className="showcase-last">{product.last}</p>



                <button className="showcase-btn">DISCOVER</button>
              </div>
)
))}
</div>
<div className="showcase-nav">
          {productData.map((product, index) => (
            <div
              key={product.id}
              className={`showcase-nav-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="nav-line"></span>
              <span className="nav-text">{product.name}</span>
            </div>
          ))}
        </div>
</div>
    </section>
)
}

export default ProductShowcase;