import React,{useEffect} from 'react'
import payment from '../assets/payment.png'
import shipping from '../assets/shipping.png'
import refund from '../assets/return.png'
import gift from '../assets/gift.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
      useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 500,
          easing: 'ease-in-out',
        });
        AOS.refresh();
      }, []);
  return (
    <div className='w-full lg:px-20 px-5 pt-0px] pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10'>

    <div data-aos='zoom-in' data-aos-delay='100' className='flex flex-col justify-center items-center gap-5'>
      <img src={shipping} alt='' className='mb-[10px] w-[60px]'></img>
      <h1 className='text-black text-xl font-semibold'>🚚 WorldWide Shipping</h1>
      <p className='text-[17px] text-gray-500'>Lorem ipsum dolor si met</p>
    </div>
    <div data-aos='zoom-in' data-aos-delay='200' className='flex flex-col justify-center items-center gap-5'>
      <img src={payment} alt='' className='mb-[10px] w-[60px]'></img>
      <h1 className='text-black text-xl font-semibold'>💳 100% Secure Payment</h1>
      <p className='text-[17px] text-gray-500'>Lorem ipsum dolor si met</p>
    </div>
    <div data-aos='zoom-in' data-aos-delay='300' className='flex flex-col justify-center items-center gap-5'>
      <img src={refund} alt='' className='mb-[10px] w-[60px]'></img>
      <h1 className='text-black text-xl font-semibold'>💸 Easy Refunds</h1>
      <p className='text-[17px] text-gray-500'>Lorem ipsum dolor si met</p>
    </div>

    <div data-aos='zoom-in' data-aos-delay='500' className='flex flex-col justify-center items-center gap-5'>
      <img src={gift} alt='' className='mb-[10px] w-[60px]'></img>
      <h1 className='text-black text-xl font-semibold'>🎁 Gifts & Special Packaging</h1>
      <p className='text-[17px] text-gray-500'>Lorem ipsum dolor si met</p>
    </div>
    </div>
  )
}

export default Services
