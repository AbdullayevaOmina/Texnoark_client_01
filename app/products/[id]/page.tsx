"use client";
import { furgonIcon, homeIcon, soatIcon } from "@/assets/icons/global";
import ImgGaleery from "@/components/ui/imggallery";
import Image from "next/image";
import shivakiImg from "@/assets/images/shivaki.png";
import Link from "next/link";
import ProductsCarucel from "@/components/ui/carusel/pr-carucel";

const SingleProductPage = () => {
  return (
    <div className="my-5">
      <div className="container my-5 flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[70%]">
          <ImgGaleery />
        </div>
        <div className="w-full lg:w-[30%]">
          <div className="bg-white rounded-lg p-5">
            <h1 className="font-bold">Apple iPhone 13 128Gb Moviy</h1>
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
              <Link
                href="/xaridni-rasmiylashtirish"
                className="w-full h-[40px] bg-[#1EB91E] rounded-lg text-white font-bold text-[12px] flex justify-center items-center gap-3"
              >
                Xarid qilish
              </Link>
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
      <div className="container mt-10">
        <div className="flex flex-col md:flex-row gap-5 my-4">
          <button className="h-[40px] px-5 bg-[#FF6F14] rounded-lg text-white font-bold text-[12px] flex justify-center items-center gap-3">
            Telfon xususiyatlari
          </button>
          <button className="h-[40px] px-5 rounded-lg bg-white font-bold text-[12px] flex justify-center items-center gap-3">
            Mijozlarni fikri
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="bg-[#f5f5f5] p-8 w-full md:w-[60%] rounded-lg">
            <div className="w-full flex border-b-2 border-dashed border-gray-400 py-3">
              <h1 className="flex-1">Brend</h1>
              <h1 className="flex-1">Vivo</h1>
            </div>
            <div className="w-full flex border-b-2 border-dashed border-gray-400 py-3">
              <h1 className="flex-1">CIM karta uyasi</h1>
              <h1 className="flex-1">2 ta</h1>
            </div>
            <div className="w-full flex border-b-2 border-dashed border-gray-400 py-3">
              <h1 className="flex-1">O'lcham</h1>
              <h1 className="flex-1">Vivo</h1>
            </div>
            <div className="w-full flex border-b-2 border-dashed border-gray-400 py-3">
              <h1 className="flex-1">Model</h1>
              <h1 className="flex-1">Vivo</h1>
            </div>
            <div className="w-full flex border-b-2 border-dashed border-gray-400 py-3">
              <h1 className="flex-1">Akumlyator hajmi</h1>
              <h1 className="flex-1">Vivo</h1>
            </div>
            <div className="w-full flex border-b-2 border-dashed border-gray-400 py-3">
              <h1 className="flex-1">Yadrolar soni</h1>
              <h1 className="flex-1">Vivo</h1>
            </div>
            <div className="w-full flex border-b-2 border-dashed border-gray-400 py-3">
              <h1 className="flex-1">Brend</h1>
              <h1 className="flex-1">Vivo</h1>
            </div>
            <div />
          </div>
          <div className="hidden w-full md:w-[40%] bg-white rounded-lg p-8 lg:flex flex-col items-center gap-3">
            <Image
              src={shivakiImg}
              alt="img"
              className="w-[360px] h-[104px] lg:w-[360px] lg:h-[104px]"
            />
            <div className="relative">
              <h1 className="bg-[#ff6f14] text-white px-3 p-1 rounded-lg text-[30px] font-bold">
                Shivakini mahsulotlaridan <br /> harid qiling
              </h1>
              <div className="absolute top-12 right-0 bg-white rounded-l-lg text-center flex flex-col items-center justify-center">
                <b className="text-[85px] font-bold text-[#1EB91E] block pl-3">
                  30%
                </b>
                <b className="text-[#ff6f14]">Chegirmaga ega bo‘ling</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductsCarucel title="Aksiyadagi mahsulotlar" />
    </div>
  );
};

export default SingleProductPage;
