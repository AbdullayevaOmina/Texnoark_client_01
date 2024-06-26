import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { socialsData } from "@/assets/icons/socialicons";
import { emailIcon, locationIcon, phoneIcon } from "@/assets/icons/global"; // locationcon dan locationIcon ga o'zgartirildi

const Footer = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-[60px] h-[400px] flex justify-between">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-1 text-[14px]">
            <Image
              src={logo}
              alt="logo"
              width={61}
              height={61}
              className="w-[61px]"
            />
            <b className="text-[#d25300] font-extrabold text-[33px]">EXNOARK</b>
          </Link>
          <b className="text-[18px] mt-8 block mb-5">
            Bizni ijtimoiyi tarmoqlar
          </b>
          <div className="flex gap-3">
            {socialsData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <ul className="text-gray-500 text-[14px] flex-1">
          <b className="text-[18px] text-black">Tashkilot haqida</b>
          <li className="mt-4">Texnoark haqida</li>
          <li>Muddatli to&apos;lov</li>
          <li>Yordam</li>
          <li>Tovarlarga kafolat</li>
          <li>To&apos;lov usullari</li>
        </ul>
        <ul className="text-gray-500 text-[14px] flex-1">
          <b className="text-[18px] text-black">Kategoriya</b>
          <li className="mt-4">Telivizorlar</li>
          <li>Noutbook va Kompuyetrlar</li>
          <li>Smartfonlar</li>
          <li>Kir yuvish mashinasi</li>
          <li>Muzlatgichalar</li>
          <li>Kondetsioner</li>
          <li>Pech va Gazpilita</li>
        </ul>

        <ul className="text-gray-500 text-[14px] flex-1">
          <b className="text-[18px] text-black">Biz bilan aloqa</b>
          <li className="flex items-center gap-5 mt-4">
            {locationIcon} 100052, O&apos;zbekiston Respublikasi, Toshkent
            shahri, Bodomzor yo&apos;li 1-tor ko&apos;chasi, 72
          </li>
          <li className="flex items-center gap-5 mt-2">
            {phoneIcon} +998 71 300 30 30
          </li>
          <li className="flex items-center gap-5 mt-2">
            {emailIcon} texnoarko@gmail.com
          </li>
        </ul>
      </div>
      <div className="text-gray-500 my-3 text-[12px]">
        &copy; 2022 Ashyo ro&apos;yxatdan o&apos;tgan litsenzalangan bu brend.
      </div>
    </>
  );
};

export default Footer;
