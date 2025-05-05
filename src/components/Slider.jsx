import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import slider1 from "../assets/notion-banner.png";
import slider2 from "../assets/coursera-banner.jpeg";
import slider3 from "../assets/programming-hero-banner.jpeg";

const Slider = () => {
  return (
    <div className="w-11/12 mx-auto py-10 ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <div className=" bg-blue-50 text-white py-5 lg:py-20 px-5 lg:px-40 rounded-lg">
            <img src={slider1} alt="" className="w-320 rounded-2xl" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-blue-50 text-white py-5 lg:py-20 px-5 lg:px-40 rounded-lg">
            <img src={slider2} alt="" className="w-320 rounded-2xl" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-50 text-white py-5 lg:py-20 px-5 lg:px-40 rounded-lg">
            <img src={slider3} alt="" className="w-320 rounded-2xl" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
