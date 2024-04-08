import banner2 from '../../assets/baaner 2.jpg'
import banner1 from '../../assets/banner 1.jpg'
import banner3 from '../../assets/banner 3.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import Nav from './Nav';
const Slider1 = () => {
    return (
        <div >
            <Swiper 
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[750px]"
      >
       
        <SwiperSlide className='relative'>
              <div className='absolute  w-full'>
                   <Nav></Nav>
              </div>
             <div className='absolute top-1/3 left-16'>
                
                <h1 className='text-7xl font-bold text-white'>Find Your Place <br /> of Dream</h1>
                <label className="input mt-8 py-8 input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search For a Property" />
                    <button className="px-4 py-3 border-2 rounded-lg border-purple-400 text-purple-800 font-semibold">Go & Search</button>
                </label>
            </div>
            <img src={banner1} alt="" />
        </SwiperSlide>

        <SwiperSlide className='relative'>
        <div className='absolute  w-full'>
                   <Nav></Nav>
              </div>
            <div className='absolute top-1/3 left-16'>
                
                <h1 className='text-7xl font-bold text-white'>Find Your Place <br /> of Dream</h1>
                <label className="input mt-8 py-8 input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search For a Property" />
                    <button className="px-4 py-3 border-2 rounded-lg border-purple-400 text-purple-800 font-semibold">Go & Search</button>
                </label>
            </div>
            <img src={banner2} alt="" />
        </SwiperSlide>

        <SwiperSlide className='relative'>
        <div className='absolute  w-full'>
                   <Nav></Nav>
              </div>
            <div className='absolute top-1/3 left-16'>
                
                <h1 className='text-7xl font-bold text-white'>Find Your Place <br /> of Dream</h1>
                <label className="input mt-8 py-8 input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search For a Property" />
                    <button className="px-4 py-3 border-2 rounded-lg border-purple-400 text-purple-800 font-semibold">Go & Search</button>
                </label>
            </div>
            <img src={banner3} alt="" />
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider1;