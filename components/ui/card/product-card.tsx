"use client";
import { useRouter } from "next/navigation";
import {
  addToCartIcon,
  heartOutlineIcon,
  statistikIcon,
} from "@/assets/icons/global";
import Image from "next/image";
import pr_img from "@/assets/images/product-img.png";
import { setDataFromCookie } from "@/helpers/cookie";

const ProductCard = () => {
  const router = useRouter();

  const viewSingleProduct = (product_id: string) => {
    setDataFromCookie("product_id", product_id);
    router.push(`/products/${product_id}`);
  };

  return (
    <div
      className="bg-white rounded-lg p-[27px] flex flex-col justify-between cursor-pointer w-[240px] h-[350px] md:w-[260px] md:h-[420px] lg:w-[305px] lg:h-[460px] "
      onClick={() => viewSingleProduct("1")}
    >
      <div className="flex justify-center">
        <Image
          src={pr_img}
          alt="img"
          width={200}
          height={200}
          className="w-[120px] sm:w-[140px] md:w-[180px] lg:w-[200px]"
        />
      </div>
      <div className="grid md:gap-2 gap-2">
        <h3 className="text-[13px] md:text-[16px] text-gray-700">
          Kir yuvish mashinasi LG F2V7GW9T
        </h3>
        <b>
          8 279 000 <small>so'm</small>
        </b>
        <div className="bg-[#edfaed] text-[#1EB91E] text-center rounded-lg py-1 text-[12px]">
          1 134 890 so'mdan/12 oy
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 md:mt-3">
        <button className="bg-[#D55200] rounded-lg flex items-center gap-2 text-white px-[10px] py-[10px] sm:px-[25px] sm:py-[12px] text-[14px]">
          {addToCartIcon} <span className="hidden md:flex">Savat</span>
        </button>
        <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[12px] sm:py-[14px] px-[14px] sm:px-[17px] rounded-lg">
          {heartOutlineIcon}
        </button>
        <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[12px] sm:py-[14px] px-[14px] sm:px-[17px] rounded-lg">
          {statistikIcon}
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
