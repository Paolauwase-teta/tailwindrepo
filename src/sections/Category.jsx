import React, {useEffect} from 'react'
import AOS from 'aos';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.jpg';
import cat5 from '../assets/cat5.jpg';
import 'aos/dist/aos.css';

const Category = () => {
    useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out',
      });
      AOS.refresh();
    }, []);


  return (
    <div id="category" className='w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:row flex-col justify-center items-center gap-20'>
    
    <div data-aos="zoom-in" data-aos-delay="50" className='lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]'>
   <h1 className='text-purple-600 text-xl font-semibold text-center'>Favourite Item</h1>
   <h1 className='text-black font-semibold text-[25px] leading-[10px] '>Popular Category</h1>
   <button className='bg-purple-600 hover:bg-purple-400 hover:text-white transition duration-300 ease-in-out  text-white px-8 py-3 rounded-lg font-semibold mt-[60px]'>VIEW ALL ITEMS</button>
    </div>
    <div className='lg:w-[85%] w-full grid lg:grid-cols-5 grid-colos-1 justify-center items-start gap-10'>
     <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-6'
     >
      <img src={cat1} alt=''className='rounded-full'></img>
     </div>
    </div>


    </div>
  )
}

export default Category

