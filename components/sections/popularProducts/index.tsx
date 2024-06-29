"use client";
import { rightGreenIcon } from "@/assets/icons/global";
import ProductCard from "@/components/ui/card/product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const PopularProducts = () => {
  return (
    <div>
      <div className="container flex justify-between items-center my-10">
        <b className="text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px]">
          Populyarniy mahsulotlar
        </b>
        <button className="text-[#1EB91E] border-[#1EB91E] bg-white border flex items-center rounded-lg px-[20px] py-[4px] sm:py-[6px] md:py-[8px] lg:py-[13px] gap-2 text-[12px] sm:text-[14px] md:text-[16px]">
          Hammasi {rightGreenIcon}
        </button>
      </div>
      <div className="">
        <Swiper
          modules={[Navigation]}
          navigation
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

export default PopularProducts;
