import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/headset.jpg';
import earbuds from '../assets/earbuds.jpg';
import dslr from '../assets/dslr.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsArrowLeft } from 'react-icons/bs';

const Hero = () => {
  const SliderRef = useRef(null)
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'ease-in'
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
    AOS.refresh();



const handleKeyDown = (e) =>{
    if(e.key === 'ArrowLeft'){
      SliderRef.current.slickPrev();
    }else if(e.key === 'ArrowRight'){
      SliderRef.current.SlickNext();
    }
  }

  //adding an event listener
window.addEventListener('keydown' , handleKeyDown);
  return() => {
   window.removeEventListener('keydown',handleKeyDown)
  };
  },[]);

 

  return (
    <div id='hero' className='w-full flex justify-center items-center lg:h-[700px] h-[600px]'>
      <Slider ref={SliderRef} className='w-full' {...settings}>
        <div>
          <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{ backgroundImage: `url(${dslr})`}}>
              <h1 data-aos="zoom-in" data-aos-delay="50" className='text-yellow-400 border rounded-lg border-yellow-400 px-6 py-2 text-xl'>Get upto Discounts 80% Off</h1>
              <h1 className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>DSLR 360 <br/> Camera</h1>
              <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white text-2xl'>100% trusted <span className='text-yellow-400 font-semibold'>Electronics Gadgets</span></h1>
              <button data-aos="zoom-in" data-aos-delay="300" className="bg-yellow-400 rounded-lg px-6 py-3 text-black font-semibold">ONLINE COLLECTIONS</button>
          </div>
        </div>
        <div>
          <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{ backgroundImage: `url(${earbuds})`}}>
              <h1 data-aos="zoom-in" data-aos-delay="50" className='text-yellow-400 border rounded-lg border-yellow-400 px-6 py-2 text-xl'>Get upto Discounts 80% Off</h1>
              <h1 className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>Wireless <br/> Earbuds</h1>
              <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white text-2xl'>100% trusted <span className='text-yellow-400 font-semibold'>Electronics Gadgets</span></h1>
              <button data-aos="zoom-in" data-aos-delay="300" className="bg-yellow-400 rounded-lg px-6 py-3 text-black font-semibold">ONLINE COLLECTIONS</button>
          </div>
        </div>
        <div>
          <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{ backgroundImage: `url(${headset})`}}>
              <h1 data-aos="zoom-in" data-aos-delay="50" className='text-yellow-400 border rounded-lg border-yellow-400 px-6 py-2 text-xl'>Get upto Discounts 80% Off</h1>
              <h1 className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>Dynamic<br/>Headsets</h1>
              <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white text-2xl'>100% trusted <span className='text-yellow-400 font-semibold'>Electronics Gadgets</span></h1>
              <button data-aos="zoom-in" data-aos-delay="300" className="bg-yellow-400 rounded-lg px-6 py-3 text-black font-semibold">ONLINE COLLECTIONS</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
