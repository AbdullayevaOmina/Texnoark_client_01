import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./style.css";

import prImg from "@/assets/images/product-img.png";
import Image from "next/image";

export default function ImgGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="flex">
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        direction={"vertical"}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        mousewheel={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
        className="mySwiper"
      >
        {[1, 2, 4, 5, 6, 7, 8].map((item, index) => (
          <SwiperSlide className="bg-white p-3 flex items-center justify-center rounded-lg">
            <Image src={prImg} alt="im" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={20}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {[1, 2, 4, 5, 6, 7, 8].map((item, index) => (
          <SwiperSlide className="bg-white p-5 rounded-lg w-[660px] h-[560px] flex items-center justify-center">
            <Image src={prImg} alt="im" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
