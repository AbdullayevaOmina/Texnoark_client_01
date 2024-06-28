import { deleteIcon, heartOutlineIcon } from "@/assets/icons/global";
import prImg from "@/assets/images/product-img.png";
import { AksiyaProducts } from "@/components/sections";
import Image from "next/image";

const CartPage = () => {
  return (
    <div className="mb-10">
      <div className="flex gap-5 container my-5">
        <div className="w-[80%] grid gap-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-5 px-14 flex justify-between"
            >
              <Image src={prImg} alt="img" className=" w-[128px]" />
              <div className="">
                <b>Apple iPhone 13 Pro 8/128 GB Moviy</b>
                <div className="flex gap-6 items-center mt-8">
                  <button className="p-2 px-4 text-red-600 rounded-lg border border-rose-600">
                    -
                  </button>
                  <b>1</b>
                  <button className="p-2 px-4 text-green-600 rounded-lg border border-green-600">
                    +
                  </button>
                </div>
              </div>
              <div>
                <b className="text-[20px]">14 699 999 so‘m</b>
                <div className="flex gap-3 justify-end mt-5">
                  <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg">
                    {deleteIcon}
                  </button>
                  <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg">
                    {heartOutlineIcon}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[30%]">
          <div className="bg-white rounded-lg p-5 flex flex-col gap-3">
            <b className="block text-center text-[18px]">
              Sizning haridlaringiz
            </b>
            <div className="flex items-center gap-3">
              <small>Mahsulotlar:</small> <b>6 ta</b>
            </div>
            <div className="flex items-center gap-3">
              <small>Jami summa:</small> <b>56 778 678 so‘m</b>
            </div>
            <button className="w-full h-[46px] bg-[#FF6F14] rounded-lg text-white font-bold text-[14px] flex justify-center items-center gap-3">
              Xaridni rasmiylashtirish
            </button>
          </div>
        </div>
      </div>
      <AksiyaProducts />
    </div>
  );
};

export default CartPage;
