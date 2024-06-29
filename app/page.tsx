import {
  BrandsSection,
  CategorySection,
  NoteSection,
} from "@/components/sections/index";
import MainCarusel from "@/components/ui/carusel/main-carusel";
import ProductsCarucel from "@/components/ui/carusel/pr-carucel";

export default function Home() {
  return (
    <>
      <div className="container">
        <MainCarusel />
        <CategorySection />
      </div>
      <ProductsCarucel title="Ommabob mahsulotlar" />
      <ProductsCarucel title="Populyarniy mahsulotlar" />
      <ProductsCarucel title="Aksiyadagi mahsulotlar" />
      <BrandsSection />
      <NoteSection />
    </>
  );
}
