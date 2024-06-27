"use client";
import { rightGreenIcon } from "@/assets/icons/global";
import ProductCard from "@/components/ui/card/product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel } from "swiper/modules";

const AksiyaProducts = () => {
  return (
    <div>
      <div className="container flex justify-between items-center my-10">
        <b className="text-[32px]">Aksiyadagi mahsulotlar</b>
        <button className="text-[#1EB91E] border-[#1EB91E] bg-white border flex gap-4 items-center px-[20px] py-[13px] rounded-lg">
          Hammasi {rightGreenIcon}
        </button>
      </div>
      <div className="">
        <Swiper
          modules={[Navigation, Mousewheel]}
          navigation
          mousewheel={true}
          spaceBetween={0}
          slidesPerView={4}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <SwiperSlide key={item}>
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AksiyaProducts;
