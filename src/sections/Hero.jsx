import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/headset.jpg'
import earbuds from '../assets/earbuds.jpg'
import dslr from '../assets/dslr.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    arrowsL: false
  };

  return (
    <div>
      Heroo
    </div>
  )
}

export default Hero
