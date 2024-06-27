const CartPage = () => {
  return (
    <>
      <div className="flex gap-5 container my-5">
        <div className="w-[80%] grid gap-3">
          <div className="bg-white rounded-lg p-5"></div>
        </div>
        <div className="w-[30%] bg-white rounded-lg p-5 flex flex-col gap-3">
          <b className="block text-center text-[18px]">Sizning haridlaringiz</b>
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
    </>
  );
};

export default CartPage;
