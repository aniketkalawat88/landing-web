import React, { useRef, useState } from 'react';
import { volkhvo } from '@/styles/font'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';

export default function PeopleSay() {
  const rev = ["","","","","",""]
  return (
    <div id="review" className="relative w-full h-full max-w-6xl mx-auto md:py-10 py-6  xl:px-0 px-6">
    <div className="grid md:grid-cols-2 grid-cols-1 w-full h-full">
        <div>
        <div>
            <h1 className={`xl:text-5xl md:text-3xl text-2xl font-bold ${volkhvo.className}`}>What people say<span className="text-primary-main"><br /> about us. </span></h1>
            <p className="text-[#666666] max-w-sm mt-6">Our Clients send us bunch of smilies with our services and we love them.</p>
            <div>
              <button className='HomeSlidePrev text-primaryMain absolute bottom-2 -translate-y-1/2  z-10 hover:bg-primary-main hover:text-white text-xl p-2 rounded-full border border-primary-main text-primary-main'><FaArrowLeft /></button>
              <button className='HomeSlideNext text-primaryMain absolute bottom-2 -translate-y-1/2 md:left-14 left-20 z-10 hover:bg-primary-main hover:text-white text-xl p-2 rounded-full border border-primary-main text-primary-main'><FaArrowRight /></button> 
            </div>
          </div>
        </div>
      <Swiper
        // pagination={{
        //     clickable: true,
        //   }}   
        AutoPlay={true}
        loop={true} 
        spaceBetween={40}  
        navigation={{
            prevEl: `.HomeSlidePrev`,
            nextEl: `.HomeSlideNext`,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full shadow-[0px_8px_16px_2px_rgba(0,0,0,0.07)] h-64 rounded-xl"
      >
        {
          rev?.map((ele, i )=> (
        <SwiperSlide key={i} className="p-6  grid items-center h-full w-full">
          <div className="md:h-16 md:w-16 h-12 w-12 relative">
            <Image src={"/Home-Images/07.png"} alt="No Preview" fill className="object-cover rounded-full" />
          </div>
          <p className="text-[#666] md:text-base text-sm mt-2">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
          <p className="md:text-lg text-base font-medium md:mt-4 mt-2">Mike taylor</p>
          <p className="text-sm font-medium text-[#666666] my-1">Lahore, Pakistan</p>
        </SwiperSlide>

          ))
        }
      </Swiper>

    </div>
    </div>
  );
}





// const PeopleSay = () => {
//   return (
//     <div>
//         <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto ">
//             <div>
//                 <h1 className={`text-5xl font-bold ${volkhvo.className}`}>What people say<span className="text-primary-main"><br /> about Us. </span></h1>
//                 <p className="text-[#666666] max-w-sm mt-6">Our Clients send us bunch of smilies with our services and we love them.</p>
//             </div>
//             <div className="">
//                 <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
//                 <p className="text-lg font-semibold mt-8">Mike taylor</p>
//                 <p className="text-sm font-medium text-[#666666]">Lahore, Pakistan</p>

//             </div>
//        </div>
       
//     </div>
//   )
// }

// export default PeopleSay