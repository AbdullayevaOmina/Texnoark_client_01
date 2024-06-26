import { brandImages } from "@/assets/images/brands";
import Image from "next/image";
import "./style.css";

const BrandsSection = () => {
  const totalCards = brandImages.length * 5;
  let index = 0;

  return (
    <section className="my-8 overflow-hidden relative">
      <div className="gap-5 animate-scroll">
        {(() => {
          const cards = [];
          while (index < totalCards) {
            const img = brandImages[index % brandImages.length];
            cards.push(
              <div
                key={index}
                className="w-[240px] h-[140px] bg-white rounded-lg flex items-center justify-center p-5"
              >
                <Image src={img} alt="brand_img" className="" />
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
