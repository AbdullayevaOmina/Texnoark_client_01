"use client"
import { useState } from "react";
import { copyIcon, shareIcon } from "@/assets/icons/global";
import { AksiyaProducts } from "@/components/sections";

const titles = [
  "Texnoark haqida",
  "Muddatli to’lov",
  "Yordam",
  "Tovarlarga kafolat",
  "To‘lov usullari",
];

const AboutPage = () => {
  const [activeTitle, setActiveTitle] = useState("Texnoark haqida");

  return (
    <div className="mb-8">
      <div className="container my-4 mb-10">
        <div className="flex gap-3 mb-4">
          {titles.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveTitle(item)}
              className={`w-[175px] h-[46px] rounded-lg font-bold text-[14px] flex justify-center items-center gap-3 ${
                activeTitle === item ? "bg-[#FF6F14] text-white" : "bg-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="h-[526px] bg-white rounded-lg p-[60px]">
          <h1 className="text-[35px] font-extrabold">{activeTitle}</h1>
          <div className="flex gap-10 my-5">
            <div>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout.
              <br />
              <br />
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </div>
            <div>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout.
              <br />
              <br />
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </div>
          </div>
          <div className="flex gap-5">
            <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg">
              {copyIcon}
            </button>
            <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg">
              {shareIcon}
            </button>
          </div>
        </div>
      </div>
      <AksiyaProducts />
    </div>
  );
};

export default AboutPage;
