"use client";
import { furgonIcon, homeIcon, soatIcon } from "@/assets/icons/global";
import { AksiyaProducts } from "@/components/sections";
import ImgGaleery from "@/components/ui/imggallery";
import { getDataFromCookie } from "@/helpers/cookie";

const SingleProductPage = () => {
  const product_id = getDataFromCookie("product_id");

  return (
    <div className="my-5">
      <div className="container my-5 flex">
        <div className="w-[70%]">
          <ImgGaleery />
        </div>
        <div className="w-[30%] ">
          <div className="bg-white rounded-lg p-5">
            <h1 className="font-bold ">Apple iPhone 13 128Gb Moviy</h1>
            <div className="flex items-center gap-5 my-4 text-gray-500">
              <small>Rang:</small>
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-[#9747FF]" />
                <div className="w-5 h-5 rounded-full bg-[#3472ED]" />
                <div className="w-5 h-5 rounded-full bg-[#D55200]" />
                <div className="w-5 h-5 rounded-full bg-[#DADADA]" />
                <div className="w-5 h-5 rounded-full bg-[#FEDACB]" />
              </div>
            </div>
            <div className="flex items-center gap-5 my-4 text-gray-500">
              <small>Narx:</small>
              <b className="text-[20px] text-black">14 699 999 so‘m</b>
            </div>
            <button className="bg-[#f0f0f0] p-3 text-[12px] w-full rounded-sm">
              Oyiga 1 334 999 so‘mdan 12/oyga muddatli to ‘lov
            </button>
            <div className="flex gap-3 w-full justify-between my-4">
              <button className="w-full h-[40px] bg-[#FF6F14] rounded-lg text-white font-bold text-[12px] flex justify-center items-center gap-3">
                Savatga qo ‘shish
              </button>
              <button className="w-full h-[40px] bg-[#1EB91E] rounded-lg text-white font-bold text-[12px] flex justify-center items-center gap-3">
                Xarid qilish
              </button>
            </div>
            <div className="grid gap-2 text-[14px]">
              <div className="flex items-center gap-4">
                {furgonIcon}
                <small>Yetkazib berish O’zbekiston bo’ylab</small>
              </div>
              <div className="flex items-center gap-4">
                {homeIcon}
                <small>Do’kondi o’zidan olib ketishingiz mumkin</small>
              </div>
              <div className="flex items-center gap-4">
                {soatIcon}
                <small>Tahminiy yetkazib berish 1 kundan 3 kungacha</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AksiyaProducts />
    </div>
  );
};

export default SingleProductPage;
