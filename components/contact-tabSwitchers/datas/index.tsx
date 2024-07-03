const Datas = () => {
  const data = {
    firstName: "Ism",
    lastName: "Familiya",
    phone: "+998 (99) 359-07-26",
    address: "Surxandaryo.v/Denov.t/",
    detailedAddress: "Yoshlik-1.k/12-honodon",
  };

  return (
    <div className="flex flex-col justify-center gap-3 px-8">
      <b className="text-2xl">Shaxsiy malumotlar</b>
      <div className="flex items-center gap-3">
        <b className="text-gray-400 text-base">Ism:</b> <b>{data.firstName}</b>
      </div>
      <div className="flex items-center gap-3">
        <b className="text-gray-400 text-base">Familya:</b>{" "}
        <b>{data.lastName}</b>
      </div>
      <div className="flex items-center gap-3">
        <b className="text-gray-400 text-base">Tel:</b> <b>{data.phone}</b>
      </div>
      <div className="flex items-center gap-3">
        <b className="text-gray-400 text-base">Manzili:</b>{" "}
        <b>{data.address}</b>
      </div>
      <div className="flex items-center gap-3">
        <b className="text-gray-400 text-base">Aniq manzil:</b>{" "}
        <b>{data.detailedAddress}</b>
      </div>
    </div>
  );
};

export default Datas;
