import {
  AksiyaProducts,
  BrandsSection,
  CategorySection,
  NoteSection,
  OmmabopProducts,
  PopularProducts,
} from "@/components/sections/index";
import MainCarusel from "@/components/ui/carusel/main-carusel";

export default function Home() {
  return (
    <>
      <div className="container">
        <MainCarusel />
        <CategorySection />
      </div>
      <OmmabopProducts />
      <PopularProducts />
      <AksiyaProducts />
      <BrandsSection />
      <NoteSection />
    </>
  );
}
