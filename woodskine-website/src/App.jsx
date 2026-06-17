import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Text from './Components/ProductShowcase/Text/Text'
import ProductShowcase from './Components/ProductShowcase/ProductShowcase'
import DesignerWord from './Components/DesignerWord/DesignerWord'
import ShopTheLook from './Components/ShopTheLook/ShopTheLook'
import ExceptionalKnowHow from './Components/ExceptionalKnowHow/ExceptionalKnowHow'
import Testimonials from './Components/Testimonials/Testimonials'
import VideoSection from './Components/VideoSection/VideoSection'
import Footer from './Components/Footer/Footer'
import NewsLetter from './Components/NewsLetter/NewsLetter'


const App = () => {
  return (
    <>
       <Navbar/>
       <Hero/>
       <Text/>
       <ProductShowcase/>
       <DesignerWord/>
       <ShopTheLook/>
       <ExceptionalKnowHow/>
       <Testimonials/>
       <VideoSection/>
       <NewsLetter/>
       <Footer/>
    </>
  )
}

export default App