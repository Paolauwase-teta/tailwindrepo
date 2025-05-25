import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'

const Types = () => {
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 500,
          easing: 'ease-in-out',
        });
        AOS.refresh();
      }, []);

  return (
    <div className='w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10'>
      <div data-aos='zoom-in' data-aos-delay='100' className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg'  style={{ backgroundImage: `url(${banner1})`}}>
        <h1 className='text-black border rounded-lg border-black px-6 py-2 text-lg'>60% Offset</h1>
        <h1 className='text-xl font-semibold  text-center text-white'>Wireless Devices</h1>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-pink-500 transition-colors duration-300">SHOP NOW</button>
      </div>
      <div data-aos='zoom-in' data-aos-delay='100' className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg'  style={{ backgroundImage: `url(${banner2})`}}>
        <h1 className='text-black border rounded-lg border-black px-6 py-2 text-lg'>60% Offset</h1>
        <h1 className='text-xl font-semibold  text-center text-white'>Wireless Devices</h1>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300">SHOP NOW</button>
      </div>
      <div data-aos='zoom-in' data-aos-delay='100' className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg'  style={{ backgroundImage: `url(${banner3})`}}>
        <h1 className='text-black border rounded-lg border-black px-6 py-2 text-lg'>60% Offset</h1>
        <h1 className='text-xl font-semibold  text-center text-white'>Wireless Devices</h1>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors duration-300">SHOP NOW</button>
      </div>
    </div>
  )
}

export default Types
