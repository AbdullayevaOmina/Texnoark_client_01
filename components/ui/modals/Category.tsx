import React, { useState, useCallback, useEffect } from "react";
import {
  categoryIcon,
  rightIconB,
  rightIconW,
  xIcon,
} from "@/assets/icons/global";
import useCategoryStore from "@/store/category";

const CategoryModal: React.FC = () => {
  const { categoriesData, getAllCategories, getAllSub } = useCategoryStore();
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [data, setData] = useState<any>(null);

  const showDrawer = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  // const handleCategoryClick = useCallback(
  //   (
  //     index: number,
  //     category: { black: JSX.Element; white: JSX.Element; title: string }
  //   ) => {
  //     setSelectedCategory(index);
  //     setData(category);
  //   },
  //   []
  // );

  const handleCategoryClick = useCallback(
    async (index: number, category: any) => {
      setSelectedCategory(index);
      const res: any = await getAllSub({
        parent_category_id: category.id,
        limit: 100,
        page: 1,
        search: "",
      });
      setData(res);
    },
    [getAllSub]
  );

  useEffect(() => {
    getAllCategories({ page: 1, limit: 100, search: "" });
  }, []);

  return (
    <>
      <button
        onClick={showDrawer}
        className="w-[175px] h-[46px] bg-[#1EB91E] rounded-lg text-white font-bold text-[14px] flex justify-center items-center gap-3 px-5"
        aria-expanded={open}
        aria-controls="category-modal"
      >
        {open ? xIcon : categoryIcon}
        Kategoriya
      </button>

      <div
        id="category-modal"
        className={`absolute left-0 w-full z-[1000] transition-transform duration-300 ${
          open ? "translate-y-[-85px]" : "-translate-y-[850px]"
        }`}
        style={{ top: "200px" }}
        role="dialog"
        aria-hidden={!open}
      >
        <div className="container w-[94%] rounded-lg bg-white shadow-xl px-16">
          <div className="flex">
            <div className="w-[30%] border-r-2 border-gray-200 grid place-content-center gap-3 p-8">
              {/* {catoryIconsData.map((category, index) => (
                <button
                  type="button"
                  key={index}
                  className={`w-[300px] rounded-lg flex items-center justify-center py-2 px-6 ${
                    selectedCategory === index
                      ? "bg-orange-500 text-white"
                      : "bg-[#f0f0f0]"
                  }`}
                  onClick={() => handleCategoryClick(index, category)}
                >
                  <div className="flex gap-4 items-center justify-between w-full">
                    {selectedCategory !== index ? category.black : category.white}
                    <span className="text-[14px]">{category.title}</span>
                    {selectedCategory !== index ? rightIconB : rightIconW}
                  </div>
                </button>
              ))} */}
              {categoriesData.map((category, index) => (
                <button
                  type="button"
                  key={index}
                  className={`w-[300px] rounded-lg flex items-center justify-center py-2 px-6 ${
                    selectedCategory === index
                      ? "bg-orange-500 text-white"
                      : "bg-[#f0f0f0]"
                  }`}
                  onClick={() => handleCategoryClick(index, category)}
                >
                  <div className="flex gap-4 items-center justify-between w-full">
                    <span className="text-[14px]">{category.name}</span>
                    {selectedCategory !== index ? rightIconB : rightIconW}
                  </div>
                </button>
              ))}
            </div>
            <div className="w-[70%] p-8">
              {data && <div>{data[0]?.name}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;
