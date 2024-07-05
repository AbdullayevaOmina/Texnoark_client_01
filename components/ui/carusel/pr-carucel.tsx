"use client";
import { rightGreenIcon } from "@/assets/icons/global";
import ProductCard from "@/components/ui/card/product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Thumbs } from "swiper/modules";
import Link from "next/link";
import "./pr-carucel.css";
import { Product } from "@/types/product-types";
import { useEffect } from "react";
import useProductStore from "@/store/products";

const ProductsCarucel = ({ title }: any) => {
  const { getAllProducts, dataProducts, isLoading } = useProductStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await getAllProducts({ page: 1, limit: 100, search: "" });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [getAllProducts]);

  return (
    <div>
      {Array.isArray(dataProducts) && dataProducts.length > 0 ? (
        <>
          <div className="container flex justify-between items-center my-3 sm:my-4 md:my-8 lg:my-10">
            <b className="text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px]">
              {title}
            </b>
            <Link
              href={"/products"}
              className="text-[#1EB91E] border-[#1EB91E] bg-white border flex items-center rounded-lg px-[20px] py-[4px] sm:py-[6px] md:py-[8px] lg:py-[13px] gap-2 text-[12px] sm:text-[14px] md:text-[16px]"
            >
              Hammasi {rightGreenIcon}
            </Link>
          </div>
          <div className="mx-5">
            <Swiper
              modules={[Navigation, Mousewheel, Thumbs]}
              navigation
              spaceBetween={0}
              slidesPerView={4}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 2 },
                320: { slidesPerView: 2, spaceBetween: 5 },
                768: { slidesPerView: 3, spaceBetween: 10 },
                1024: { slidesPerView: 4, spaceBetween: 10 },
                1900: { slidesPerView: 5, spaceBetween: 10 },
              }}
            >
              {dataProducts.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard product={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductsCarucel;
