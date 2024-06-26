import {
  addToCartIcon,
  heartOutlineIcon,
  statistikIcon,
} from "@/assets/icons/global";
import Image from "next/image";
import pr_img from "@/assets/images/product-img.png";

const ProductCard = () => {
  return (
    <div className="w-[305px] h-[460px] bg-white rounded-lg p-[27px] flex flex-col justify-between">
      <div className="flex justify-center">
        <Image
          src={pr_img}
          alt="img"
          width={200} // kenglik atributini qo'shish
          height={200} // balandlik atributini qo'shish
        />
      </div>
      <div className="grid gap-2">
        <h3 className="text-[16px] text-gray-700">
          Kir yuvish mashinasi LG F2V7GW9T
        </h3>
        <b>
          8 279 000 <small>so'm</small>
        </b>
        <div className="bg-[#edfaed] text-[#1EB91E] text-center rounded-lg py-1 text-[12px]">
          1 134 890 so'mdan/12 oy
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="bg-[#D55200] rounded-lg px-[25px] py-[12px] text-white text-[14px] flex items-center gap-2">
          {addToCartIcon} Savat
        </button>
        <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[14px] px-[17px] rounded-lg">
          {heartOutlineIcon}
        </button>
        <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[14px] px-[17px] rounded-lg">
          {statistikIcon}
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
