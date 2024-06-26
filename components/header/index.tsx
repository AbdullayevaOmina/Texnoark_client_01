"use client";
import Link from "next/link";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import {
  cartIcon,
  categoryIcon,
  heartOutlineIcon,
  searchIcon,
  statistikIcon,
  userIcon,
} from "@/assets/icons/global";
import { useState } from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import CategoryModal from "../ui/modals/Category";

const Header = () => {
  const navs = [
    { title: "Biz haqimizda", path: "/about" },
    { title: "Yetkazib berish", path: "/delivery" },
    { title: "Shartnoma shartlari", path: "/contracts" },
    { title: "Bizning kafolatlar", path: "/assurances" },
  ];

  const [language, setLanguage] = useState("uzb");

  const handleLanguageChange = ({ key }: any) => {
    setLanguage(key);
  };

  const languageItems: MenuProps["items"] = [
    {
      key: "uzb",
      label: "uzb",
    },
    {
      key: "ru",
      label: "ru",
    },
    {
      key: "eng",
      label: "eng",
    },
  ];

  const authItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="signin">Tizimga kirish</Link>,
    },
    {
      key: "2",
      label: <Link href="signup">Ro'yxatdan o'tish</Link>,
    },
  ];

  return (
    <div className="mt-[10px]">
      <nav className="flex justify-between items-center text-[14px]">
        <ul className="flex gap-5">
          {navs.map((item, i) => (
            <li key={i}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-8 items-center">
          <h1 className="flex items-center gap-2">+998 (99) 359-07-26</h1>
          <Dropdown
            menu={{ items: languageItems, onClick: handleLanguageChange }}
            placement="bottom"
            className="cursor-pointer"
          >
            <h1>{language}</h1>
          </Dropdown>
        </div>
      </nav>
      <header className="flex items-center justify-between bg-white rounded-lg px-8 py-3 mt-2">
        <Link href="/" className="flex items-center gap-1 text-[14px]">
          <Image src={logo} alt="logo" className="w-10" />
          <b className="text-[#d25300] font-extrabold">EXNOARK</b>
        </Link>
        <div className="flex gap-5">
          {/* <button className="w-[175px] h-[46px] bg-[#1EB91E] rounded-lg text-white font-bold text-[14px] flex justify-center items-center gap-3">
            {categoryIcon}
            Kategoriya
          </button> */}
          <CategoryModal />
          <div className="relative">
            <input
              placeholder="Хочу купить..."
              className="w-[400px] h-[46px] bg-[#f0f0f0] rounded-lg px-5 outline-none text-[14px]"
            />
            <div className="absolute top-[15px] right-3">{searchIcon}</div>
          </div>
        </div>
        <div className="flex gap-5 ">
          <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg">
            {heartOutlineIcon}
            <div className="w-[20px] h-[20px] bg-[#D55200] rounded-lg text-white text-[10px] flex justify-center items-center">
              6
            </div>
          </button>
          <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg">
            {statistikIcon}
            <div className="w-[20px] h-[20px] bg-[#D55200] rounded-lg text-white text-[10px] flex justify-center items-center">
              2
            </div>
          </button>
          <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg">
            {cartIcon}
            <div className="w-[20px] h-[20px] bg-[#D55200] rounded-lg text-white text-[10px] flex justify-center items-center">
              7
            </div>
          </button>
          <Dropdown
            menu={{ items: authItems }}
            placement="bottom"
            className="cursor-pointer flex items-center justify-center bg-[#f0f0f0] w-[50px] h-[50px] p-4 rounded-full"
          >
            {userIcon}
          </Dropdown>
        </div>
      </header>
    </div>
  );
};

export default Header;
