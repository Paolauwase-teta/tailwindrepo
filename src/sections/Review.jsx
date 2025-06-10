import React,{useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaStar, FaQuoteLeft} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { reviewdata } from '../export';

const Review = () => {
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
    cssEase: 'ease-in',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    useEffect(() => {
          AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',
          });
          AOS.refresh();
        }, []);
  return (
    <div id='testimonials'className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-delay='100' className='text-purple-700 text-xl font-semibold capitalize'>1300+ Customer reviews</h1>
      <h1 data-aos="zoom-in" data-aos-delay='200' className='text-black font-semibold text-[42px] capitalize'>Our Customer Love</h1>

      <div data-aos="zoom-in" data-aos-delay='100'className='w-full mt-10'>
      <Slider className='w-full' {...settings}>
        {
          reviewdata.map((item,index) =>(
            <div>
              <div key={index} className='w-full flex flex-col justify-center items-center gap-4 lg:p-10 p-3'>
              <img src={item.img} alt='' className='rounded-full  m-auto'></img>
              </div>

              <div className='flex justify-center items-center gap-1'>
                <FaStar className='text-purple-700'/>
                <FaStar className='text-purple-700'/>
                <FaStar className='text-purple-700'/>
                <FaStar className='text-purple-700'/>
                <FaStar className='text-purple-700'/>
              </div>
              <p className='text-center text-gray-500 text-lg'>{item.para}</p>

              <div className='flex justify-center items-start gap-5'>
                <FaQuoteLeft className='fill-purple-600 size-14 mr-[170px] mt-[0px] relative top-12'/>
              </div>
              <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='text-black text-xlg capitalize'>{item.name}</h1>
                <h1 className='text-gray capitalise'>{item.post}</h1>
              </div>
            </div>
          ))
        }
      </Slider>
      </div>
    </div>
  )
}

export default Review
