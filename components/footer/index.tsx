"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { socialsData } from "@/assets/icons/socialicons";
import { emailIcon, locationIcon, phoneIcon } from "@/assets/icons/global";
import useCategoryStore from "@/store/category";
import { useEffect } from "react";

const Footer = () => {
  const { categoriesData, getAll } = useCategoryStore();
  useEffect(() => {
    getAll({ page: 1, limit: 100, search: "" });
  }, []);
  return (
    <>
      <div className="bg-white rounded-lg p-[60px] h-[400px] flex justify-between">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-1 text-[14px]">
            <Image
              src={logo}
              alt="logo"
              width={61}
              height={61}
              className="w-[61px]"
            />
            <b className="text-[#d25300] font-extrabold text-[33px]">EXNOARK</b>
          </Link>
          <b className="text-[18px] mt-8 block mb-5">
            Bizni ijtimoiyi tarmoqlar
          </b>
          <div className="flex gap-3">
            {socialsData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <ul className="text-gray-400 text-[14px] flex-1 flex flex-col gap-2">
          <b className="text-[18px] text-black mb-3 block">Tashkilot haqida</b>
          <li className="hover:text-black cursor-pointer">Texnoark haqida</li>
          <li className="hover:text-black cursor-pointer">
            Muddatli to&apos;lov
          </li>
          <li className="hover:text-black cursor-pointer">Yordam</li>
          <li className="hover:text-black cursor-pointer">
            Tovarlarga kafolat
          </li>
          <li className="hover:text-black cursor-pointer">
            To&apos;lov usullari
          </li>
        </ul>

        <ul className="text-gray-400 text-[14px] flex-1 flex flex-col gap-2">
          <b className="text-[18px] text-black mb-4 block">Kategoriya</b>
          {categoriesData.map((item, index) => (
            <li className="hover:text-black cursor-pointer">{item.name}</li>
          ))}
        </ul>

        <ul className="text-gray-500 text-[14px] flex-1">
          <b className="text-[18px] text-black">Biz bilan aloqa</b>
          <li className="flex items-center gap-5 mt-4">
            {locationIcon} 100052, O&apos;zbekiston Respublikasi, Toshkent
            shahri, Bodomzor yo&apos;li 1-tor ko&apos;chasi, 72
          </li>
          <li className="flex items-center gap-5 mt-2">
            {phoneIcon} +998 71 300 30 30
          </li>
          <li className="flex items-center gap-5 mt-2">
            {emailIcon} texnoarko@gmail.com
          </li>
        </ul>
      </div>
      <div className="text-gray-500 my-3 text-[12px]">
        &copy; 2022 Ashyo ro&apos;yxatdan o&apos;tgan litsenzalangan bu brend.
      </div>
    </>
  );
};

export default Footer;
