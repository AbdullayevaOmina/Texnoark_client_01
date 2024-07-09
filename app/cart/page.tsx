"use client";
import { deleteIcon, heartOutlineIcon } from "@/assets/icons/global";
import prImg from "@/assets/images/product-img.png";
import ProductsCarucel from "@/components/ui/carusel/pr-carucel";
import useCartStore from "@/store/cart";
import Image from "next/image";

const CartPage = () => {
  const { countCartPr, dataCardPr } = useCartStore();
  console.log(dataCardPr);
  
  return (
    <div className="mb-10">
      <div className="flex flex-col lg:flex-row gap-5 container my-5">
        <div className="w-[100%] lg:w-[80%] grid gap-3">
          {dataCardPr?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 px-1 sm:px-4 md:px-6 lg:px-10 flex justify-between pr-3 gap-3"
            >
              <Image
                src={prImg}
                alt="img"
                className="w-[108px] sm:w-[118px] md:w-[128px]"
              />
              <div className="flex flex-col justify-between my-2">
                <b className="text-[15px] md:text-[20px]">
                  {item.product_id.name}
                </b>
                <div className="flex gap-4 md:gap-6 items-center">
                  <button className="p-[3px] px-3 md:p-2 md:px-4 text-red-600 rounded-lg border border-rose-600">
                    -
                  </button>
                  <b className="text-[14px] md:text-[18px]">1</b>
                  <button className="p-[3px] px-3 md:p-2 md:px-4 text-green-600 rounded-lg border border-green-600">
                    +
                  </button>
                </div>
              </div>
              <div>
                <b className="text-[16px] md:text-[20px]">
                  {item.product_id.price} so‘m
                </b>
                <div className="flex gap-3 justify-end mt-5">
                  <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[8px] px-[8px] md:py-[13px] md:px-[14px] rounded-lg">
                    {deleteIcon}
                  </button>
                  <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[8px] px-[8px] md:py-[13px] md:px-[14px] rounded-lg">
                    {heartOutlineIcon}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[100%] lg:w-[30%] ">
          <div className="bg-white rounded-lg p-5 flex flex-col gap-3">
            <b className="block text-center text-[18px]">
              Sizning haridlaringiz
            </b>
            <div className="flex items-center gap-3">
              <span>Mahsulotlar:</span> <b>{countCartPr} ta</b>
            </div>
            <div className="flex items-center gap-3">
              <span>Jami summa:</span> <b>56 778 678 so'm</b>
            </div>
            <button className="w-full h-[46px] bg-[#FF6F14] rounded-lg text-white font-bold text-[14px] flex justify-center items-center gap-3">
              Xaridni rasmiylashtirish
            </button>
          </div>
        </div>
      </div>
      <ProductsCarucel title="Aksiyadagi mahsulotlar" />
    </div>
  );
};

export default CartPage;
