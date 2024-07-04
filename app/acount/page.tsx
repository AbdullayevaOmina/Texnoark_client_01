"use client";

import {
  editIcon,
  editIconOrange,
  rightIconB,
  rightIconW,
} from "@/assets/icons/global";
import {
  BuyStory,
  Costs,
  Datas,
  Likes,
  UserDataEdit,
} from "@/components/contact-tabSwitchers/index";
import { getDataFromCookie } from "@/helpers/cookie";
import useAccountStore from "@/store/acount";
import { useState, ReactNode, useMemo, useEffect } from "react";

interface Tab {
  id: number;
  tab: ReactNode;
  title: string;
}

const AccountPage = () => {
  const userID = getDataFromCookie("user_id");

  const [activeTabID, setActiveTabID] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const { getUserData, userData } = useAccountStore();

  useEffect(() => {
    const fetchData = async () => {
      setHasMounted(true);
      await getUserData(userID);
    };
    fetchData();
  }, [getUserData, userID]);

  const tabList: Tab[] = useMemo(
    () => [
      { id: 1, tab: <Datas />, title: "Shaxsiy malumotlar" },
      { id: 2, tab: <Likes />, title: "Yoqtirgan mahsulotlar" },
      { id: 3, tab: <BuyStory />, title: "Xaridlar tarixi" },
      { id: 4, tab: <Costs />, title: "To'lovlar tarixi" },
    ],
    []
  );

  const activeTab = useMemo(() => {
    return isEditing
      ? { tab: <UserDataEdit user_data={userData} /> }
      : tabList.find((tab) => tab.id === activeTabID);
  }, [isEditing, activeTabID, tabList, userData]);

  const handleEditTab = () => {
    setIsEditing(true);
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="container py-3 w-full">
      <div className="flex flex-col lg:flex-row gap-5 w-full">
        <div className="w-full lg:w-1/3">
          <div className="p-3 sm:p-4 lg:p-5 px-6 bg-white rounded-lg">
            <div className="flex justify-between items-center">
              <div className="bg-gray-300 rounded-full w-15 h-15" />
              <div className="ml-3 flex-1">
                <b className="block">{ `${userData?.first_name} ${userData?.last_name}`  || "Loading..."}</b>
                <span className="text-gray-500">ID: {userData?.id || "..."}</span>
              </div>
              <button onClick={handleEditTab}>
                {isEditing ? editIconOrange : editIcon}
              </button>
            </div>

            <div className="mt-8">
              {tabList.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTabID(item.id);
                    setIsEditing(false);
                  }}
                  className={`w-full rounded-lg flex items-center justify-center py-2 px-6 mb-2 ${
                    activeTabID === item.id && !isEditing
                      ? "bg-[#FF6F14] text-white"
                      : "bg-[#f0f0f0]"
                  }`}
                >
                  <div className="flex gap-4 items-center justify-between w-full">
                    <span className="text-sm">{item.title}</span>
                    {activeTabID !== item.id || isEditing
                      ? rightIconB
                      : rightIconW}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 w-full lg:w-2/3 bg-white rounded-lg">
          {activeTab && activeTab.tab}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
