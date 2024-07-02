"use client";
import Link from "next/link";
import type { MenuProps } from "antd";
import { Dropdown, Drawer, Button } from "antd";
import {
  cartIcon,
  heartOutlineIcon,
  searchIcon,
  statistikIcon,
  barsIcon,
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

  const [language, setLanguage] = useState("uz");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleLanguageChange = ({ key }: any) => {
    setLanguage(key);
  };

  const languageItems: MenuProps["items"] = [
    {
      key: "uz",
      label: "uz",
    },
    {
      key: "ru",
      label: "ru",
    },
    {
      key: "en",
      label: "en",
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
    {
      key: "3",
      label: <Link href="acount">Acount</Link>,
    },
  ];

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center text-[14px] md:px-8 md:mt-3">
        <ul className="hidden md:flex gap-5">
          {navs.map((item, i) => (
            <li key={i}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex gap-8 items-center">
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
      <header className="flex items-center justify-between bg-white rounded-lg px-4 py-2 lg:py-3 mt-2 md:px-8">
        <Link href="/" className="flex items-center gap-1 text-[14px]">
          <Image
            src={logo}
            alt="logo"
            className="w-[28px] md:w-[35px] lg:w-11"
          />
          <b className="text-[#d25300] text-[15px] md:text-[17px] lg:text-[20px] font-extrabold">
            EXNOARK
          </b>
        </Link>
        <div className="hidden md:flex gap-5 w-full ml-20 mx-5">
          <CategoryModal />
          <div className="relative w-full">
            <input
              placeholder="Хочу купить..."
              className=" w-full h-[46px] bg-[#f0f0f0] rounded-lg px-5 outline-none text-[14px]"
            />
            <div className="absolute top-[15px] right-3">{searchIcon}</div>
          </div>
        </div>
        <div className="hidden md:flex gap-5 ">
          <Link
            href="/wishlist"
            className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg"
          >
            {heartOutlineIcon}
            <div className="w-[20px] h-[20px] bg-[#D55200] rounded-lg text-white text-[10px] flex justify-center items-center">
              6
            </div>
          </Link>
          <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg">
            {statistikIcon}
            <div className="w-[20px] h-[20px] bg-[#D55200] rounded-lg text-white text-[10px] flex justify-center items-center">
              2
            </div>
          </button>
          <Link
            href="/cart"
            className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg"
          >
            {cartIcon}
            <div className="w-[20px] h-[20px] bg-[#D55200] rounded-lg text-white text-[10px] flex justify-center items-center">
              7
            </div>
          </Link>

          <Dropdown
            menu={{ items: authItems }}
            placement="bottom"
            className="cursor-pointer flex items-center justify-center bg-[#f0f0f0] w-[50px] h-[50px] p-4 rounded-full"
          >
            {userIcon}
          </Dropdown>
        </div>
        <button className="md:hidden" onClick={showDrawer}>
          {barsIcon}
        </button>
      </header>
      <Drawer placement="right" onClose={closeDrawer} visible={drawerVisible}>
        <ul className="flex flex-col gap-5">
          {navs.map((item, i) => (
            <li key={i}>
              <Link href={item.path} onClick={closeDrawer} className="">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" grid gap-3 mt-8">
          <div className="flex gap-3">
            <Link
              href="/wishlist"
              className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] w-full rounded-lg"
            >
              {heartOutlineIcon}
              <div className="w-[20px] h-[20px] bg-[#D55200] rounded-lg text-white text-[10px] flex justify-center items-center">
                6
              </div>
            </Link>
            <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg w-full">
              {statistikIcon}
              <div className="w-[20px] h-[20px] bg-[#D55200] rounded-lg text-white text-[10px] flex justify-center items-center">
                2
              </div>
            </button>
          </div>
          <div className="flex gap-3">
            <Link
              href="/cart"
              className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg w-full"
            >
              {cartIcon}
              <div className="w-[20px] h-[20px] bg-[#D55200] rounded-lg text-white text-[10px] flex justify-center items-center">
                7
              </div>
            </Link>

            <Dropdown
              menu={{ items: authItems }}
              placement="bottom"
              className="cursor-pointer flex items-center justify-center bg-[#f0f0f0] w-full h-[50px] p-4 rounded-lg"
            >
              {userIcon}
            </Dropdown>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
