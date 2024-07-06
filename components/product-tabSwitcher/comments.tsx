"use client";
import { useEffect, useState } from "react";
import { getDataFromCookie } from "@/helpers/cookie";
import useCommenttStore from "@/store/comments";
import TextArea from "antd/es/input/TextArea";

const CommentsTab = () => {
  const prID = getDataFromCookie("product_id");
  const { getCommnets } = useCommenttStore();
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function getCm() {
      const resData = await getCommnets(prID);
      setData(resData);
    }
    getCm();
  }, []);

  return (
    <div className="w-full p-8 rounded-lg bg-white grid gap-3">
      <h1>Hamma sharhlar, {data?.count || 0} sharh</h1>
      <div className="border p-5 overflow-y-scroll">
        <div className="grid gap-8">
          <div className="border-b-2 pb-5">
            <div className="flex gap-10 items-center mb-3">
              <b className="block">user name</b>
              <small className="text-gray-400">20/04/2004</small>
            </div>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              quo vitae, esse, accusantium numquam adipisci perspiciatis sunt,
              harum incidunt nobis neque necessitatibus ipsam ab quos. Dicta
              temporibus odit aperiam culpa exercitationem adipisci voluptate,
              nisi vel corrupti sequi accusamus reiciendis voluptas?
            </span>
          </div>
          <div className="border-b-2 pb-5">
            <div className="flex gap-10 items-center mb-3">
              <b className="block">user name</b>
              <small className="text-gray-400">20/04/2004</small>
            </div>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              quo vitae, esse, accusantium numquam adipisci perspiciatis sunt,
              harum incidunt nobis neque necessitatibus ipsam ab quos. Dicta
              temporibus odit aperiam culpa exercitationem adipisci voluptate,
              nisi vel corrupti sequi accusamus reiciendis voluptas?
            </span>
          </div>
        </div>
      </div>
      <div>
        <form className="grid gap-2">
          <TextArea rows={4} placeholder="Shu yerda o'z fikringizni yozing" />
          <button
            type="submit"
            className="bg-[#FF6F14] text-white rounded-lg p-1"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentsTab;
