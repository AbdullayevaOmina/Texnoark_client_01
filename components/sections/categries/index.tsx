import { rightIcon } from "@/assets/icons/global";
import { catoryImagesData } from "@/assets/images/categories/index";
import Image from "next/image";

const CategorySection = () => {
  return (
    <section className="mt-8 mb-8 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {catoryImagesData.map((item, index) => (
          <div
            key={index}
            className="h-[120px] bg-white rounded-lg flex items-center justify-center py-4 px-6"
          >
            <div className="flex gap-4 items-center justify-between w-full">
              <Image src={item.img} alt="img" className="w-[50px] h-[50px]" />
              <span className="text-[16px] sm:text-[18px]">{item.title}</span>
              <div className="w-[24px] h-[24px]">{rightIcon}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
