"use client";
import { rightGreenIcon } from "@/assets/icons/global";
import ProductCard from "@/components/ui/card/product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const OmmabopProducts = () => {
  return (
    <div>
      <div className="container flex justify-between items-center my-10">
        <b className="text-[32px]">Ommabob mahsulotlar</b>
        <Link href={"/products"} className="text-[#1EB91E] border-[#1EB91E] bg-white border flex gap-4 items-center px-[20px] py-[13px] rounded-lg">
          Hammasi {rightGreenIcon}
        </Link>
      </div>
      <div className="">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={0}
          slidesPerView={4}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1900: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
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

export default OmmabopProducts;
