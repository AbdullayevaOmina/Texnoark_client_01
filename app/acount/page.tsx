"use client";
import { editIcon, rightIconB, rightIconW } from "@/assets/icons/global";
import {
  BuyStory,
  Costs,
  Datas,
  Likes,
} from "@/components/contact-tabSwitchers/index";
import { useState } from "react";

const AcountPage = () => {
  const [activeTabID, setActiveTabID] = useState(1);
  const tab_list = [
    { id: 1, tab: <Datas />, title: "Shaxsiy malumotlar" },
    { id: 2, tab: <Likes />, title: "Yoqtirgan mahsulotlar" },
    { id: 3, tab: <BuyStory />, title: "Xaridlar tarixi" },
    { id: 4, tab: <Costs />, title: "To'lovlar tarixi" },
  ];

  const activeTab = tab_list.find((tab) => tab.id === activeTabID);

  return (
    <div className="container py-3 w-full">
      <div className="flex flex-col lg:flex-row gap-5 w-full">
        <div className="w-full lg:w-[30%]">
          <div className="p-3 sm:p-4 lg:p-5 px-6 bg-white rounded-lg">
            <div className="flex justify-between">
              <div className="bg-gray-300 rounded-full w-[60px] h-[60px]" />
              <div>
                <b className="block">Ahmad Ben Bella</b>
                <span className="text-gray-500">Id8937657921</span>
              </div>
              <button>{editIcon}</button>
            </div>

            <div className="mt-8">
              {tab_list.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTabID(item.id)}
                  className={`w-full rounded-lg flex items-center justify-center py-2 px-6 mb-2 ${
                    activeTabID === item.id
                      ? "bg-[#FF6F14] text-white"
                      : "bg-[#f0f0f0]"
                  }`}
                >
                  <div className="flex gap-4 items-center justify-between w-full">
                    <span className="text-[14px]">{item.title}</span>
                    {activeTabID !== item.id ? rightIconB : rightIconW}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-[20px] w-full lg:w-[70%] bg-white rounded-lg">
          {activeTab && activeTab.tab}
        </div>
      </div>
    </div>
  );
};

export default AcountPage;