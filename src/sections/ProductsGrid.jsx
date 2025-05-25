import React, {useEffect} from 'react'
import { FaStar,FaRegHeart,FaRegStar } from 'react-icons/fa6'
import { MdAddShoppingCart,MdOutlineRemoveRedEye  } from 'react-icons/md'
import AOS from 'aos';
import { products } from '../export.js'; 
import 'aos/dist/aos.css';


const ProductsGrid = () => {
   useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out',
      });
      AOS.refresh();
    }, []);

  return (
    <div id='products' className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
     <h1 data-aos="zoom-in" data-aos-delay="100" className='text-purple-600 text-xl font-semibold'>Browse Collections</h1>
     <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[42px] leading-[50px] text-center font-semibold'>Trending Products</h1>
     <div  data-aos="zoom-in" data-aos-delay="300" className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-1 0'>
      {
        products.map((items,index) =>(
        <div id='product-box' key={index} className='flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative'>
          <img src={items.img} alt=''></img>
          <div id='icons' className='flex justify-center items-center gap-3 absolute top-[20px]'>
            <div className='bg-purple-600 hover:bg-yellow-600 hover:text-black rounded-full p-3 text-white'>
            <MdOutlineRemoveRedEye/>  
            </div>
            <div className='bg-purple-600 hover:bg-yellow-600 hover:text-black rounded-full p-3 text-white'>
            <FaRegHeart/>  
            </div>
            <div className='bg-purple-600 hover:bg-yellow-600 hover:text-black rounded-full p-3 text-white'>
            <MdAddShoppingCart/>  
            </div>
          </div>
          <h1 className='text-lg text-grey-100 font-semibold'>{items.category}</h1>
          <h1 className='text-xl text-black font-semibold'>{items.name}</h1>
          <h1 className='tex-lg text-purple-600 font-semibold'>{items.price}</h1>
          <div className='w-full mt-2'>
            <hr/>
            <div className='flex justify-between items-center gap-2 mt-3'>
                <div className='flex justify-start items-center'>
                  <FaStar className='text-purple-700'/>
                  <FaRegStar />
                  <FaStar className='text-purple-700'/>
                  <FaStar className='text-purple-700'/>
                  <FaStar className='text-purple-700'/>
                </div>
                <button className='bg-green-500 px-4 py-2 text-white rounded-full text-[13px] font-semibold'>SALE 25%</button>
            </div>

          </div>
        </div>
        ))
      }
     </div>
     <button data-aos='zoom-in' data-aos-delay='1
     400' className='text-lg font-semibold hover:text-yellow-600 hover:bg-black bg-purple-600 text-white px-8  py-3 rounded-lg mt-3'>VIEW MORE</button>
    </div>
  )
}

export default ProductsGrid
