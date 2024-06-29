import { brandImages } from "@/assets/images/brands";
import Image from "next/image";
import "./style.css";

const BrandsSection = () => {
  const totalCards = brandImages.length * 5;
  let index = 0;

  return (
    <section className="my-[10px] md:my-[15px] lg:my-[20px] overflow-hidden relative">
      <div className="gap-5 animate-scroll">
        {(() => {
          const cards = [];
          while (index < totalCards) {
            const img = brandImages[index % brandImages.length];
            cards.push(
              <div
                key={index}
                className="w-[100px] h-[60px] md:w-[150px] md:h-[110px] lg:w-[200px] lg:h-[130px] bg-white rounded-lg flex items-center justify-center p-5 py-8"
              >
                <Image src={img} alt="brand_img" className=" bg-cover" />
              </div>
            );
            index++;
          }
          return cards;
        })()}
      </div>
    </section>
  );
};

export default BrandsSection;
