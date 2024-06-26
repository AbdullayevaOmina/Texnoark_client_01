import img from "@/assets/images/mn-cr-img.png";
import Image from "next/image";
import { Carousel } from "antd";

const MainCarusel = () => {
  const carucelData = [{ img: img }, { img: img }, { img: img }, { img: img }];

  return (
    <>
      <Carousel autoplay className="w-full mt-[24px] rounded-lg arrows">
        {carucelData.map((item, i) => (
          <div
            key={i}
            className="rounded-lg h-[400px] bg-white p-[80px] relative -z-30"
          >
            <h1 className="text-[40px] font-extrabold">
              <span className="text-[#1EB91E]">Olma</span> olish uchun pul
              yig&apos;ishga <br /> hojat yo&apos;q{" "}
              <span className="bg-[#ff6f14] text-white px-3 p-1 rounded-lg">
                12 oyda to&apos;lang
              </span>
            </h1>
            <br />
            <h3 className="text-[18px]">
              Boshlang&apos;ich to&apos;lovsiz pasport evaziga halol muddatli{" "}
              <br /> to&apos;lovga xarid qiling
            </h3>
            <Image
              src={item.img}
              alt="img"
              width={400}
              height={400}
              className="absolute right-[80px] bottom-0 -z-10"
            />
            <div className="absolute -z-20 right-[40%] top-[10%] w-[30px] h-[30px] bg-[#FFF9E6] rounded-full" />
            <div className="absolute -z-20 right-[38%] bottom-[0%] w-[200px] h-[200px] bg-[#fff3e7] rounded-full" />
            <div className="absolute -z-20 right-[-4%] top-[-17%] w-[320px] h-[320px] bg-[#dcffdc] rounded-full" />
            <div className="absolute -z-20 right-[-5%] bottom-[-2%] w-[155px] h-[155px] bg-[#EAEDF5] rounded-full" />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default MainCarusel;
