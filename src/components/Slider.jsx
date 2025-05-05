import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-10 ">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
            >
                <SwiperSlide>
                    <div className="bg-blue-500 text-white p-10 rounded-lg">
                        <h2 className="text-2xl font-bold">Promotion 1</h2>
                        <p>Discover our latest app features!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-green-500 text-white p-10 rounded-lg">
                        <h2 className="text-2xl font-bold">Promotion 2</h2>
                        <p>Check out our newly launched app!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-purple-500 text-white p-10 rounded-lg">
                        <h2 className="text-2xl font-bold">Promotion 3</h2>
                        <p>Don't miss our exclusive offers!</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;