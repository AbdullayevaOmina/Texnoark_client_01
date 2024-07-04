import { getDataFromCookie } from "@/helpers/cookie";

const Datas = () => {
  const data = {
    firstName: getDataFromCookie("first_name"),
    lastName: getDataFromCookie("last_name"),
    phone: getDataFromCookie("phone_number"),
    email: getDataFromCookie("email"),
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
        <b className="text-gray-400 text-base">Email:</b> <b>{data.email}</b>
      </div>
    </div>
  );
};

export default Datas;
