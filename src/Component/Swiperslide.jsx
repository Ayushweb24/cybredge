import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import slide1 from "../assets/slide-corporate-16-2.jpg";
import slide2 from "../assets/slide-corporate-5-1.jpg";
import slide3 from "../assets/slide-corporate-3-1.jpg";
import slide4 from "../assets/slide-corporate-3-2.jpg";

import "swiper/css";
import "swiper/css/autoplay";

const ImageSwiper = () => {
  const images = [
    slide1,
    slide2,
    slide3,
    slide2,
    slide4,
    slide3,
    slide1,          
  ];

  return (
    <div className="w-full py-10 bg-gradient-to-r from-cyan-900 via-black to-cyan-900">

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full" data-aos="fade-up" data-aos-delay="100"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              className="w-full h-40 object-cover p-4 bg-white/20 backdrop-blur-lg  shadow-lg"
              alt="slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;