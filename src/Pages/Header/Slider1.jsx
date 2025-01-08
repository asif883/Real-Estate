
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Slider1 = () => {
    return (
        <div >
            <Swiper 
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[400px] md:h-[750px] object-cover"
      >
       
        <SwiperSlide className='relative'>
             <div className='absolute top-1/3 left-6 md:left-16'>           
                <h1 className='text-4xl md:text-7xl font-semibold text-purple-700'>Find Your Place <br /> of Dream</h1>
                <label className="input mt-8 py-4 md:py-8 input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search For a Property" />
                    <button className="px-2 md:px-4 py-1 md:py-3 border-2 rounded-lg border-purple-400 text-purple-800 hover:bg-purple-500 hover:text-white font-semibold">Go & Search</button>
                </label>
            </div>
            <img className='object-cover w-full h-full' src="https://i.ibb.co/Rbtyh9R/Home-Selling-Costs.webp" alt="" />
        </SwiperSlide>

        
       </Swiper>
        </div>
    );
};

export default Slider1;