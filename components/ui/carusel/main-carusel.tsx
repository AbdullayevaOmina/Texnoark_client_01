import cimg from "@/assets/images/cimg.png";
import Image from "next/image";
import { Carousel } from "antd";

const MainCarusel = () => {
  return (
    <>
      <Carousel
        autoplay
        className="w-full mt-[10px] md:mt-[15px] lg:mt-[20px] rounded-lg arrows"
      >
        {[1, 2, 3, 4].map((i) => (
          <Image src={cimg} alt="img" key={i} className="rounded-lg" />
        ))}
      </Carousel>
    </>
  );
};

export default MainCarusel;
