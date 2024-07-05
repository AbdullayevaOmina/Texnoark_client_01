"use client";
import {
  BrandsSection,
  CategorySection,
  NoteSection,
} from "@/components/sections/index";
import MainCarusel from "@/components/ui/carusel/main-carusel";
import ProductsCarucel from "@/components/ui/carusel/pr-carucel";
import useProductStore from "@/store/products";
import { useEffect, useState } from "react";

export default function Home() {
  const { getAllProducts, dataProducts, isLoading } = useProductStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await getAllProducts({ page: 1, limit: 100, search: "" });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [getAllProducts]);

  return (
    <>
      <div className="container">
        <MainCarusel />
        <CategorySection />
      </div>
      {dataProducts.length > 0 && (
        <>
          <ProductsCarucel title="Ommabob mahsulotlar" data={dataProducts} />
          <ProductsCarucel
            title="Populyarniy mahsulotlar"
            data={dataProducts}
          />
          <ProductsCarucel title="Aksiyadagi mahsulotlar" data={dataProducts} />
        </>
      )}
      <BrandsSection />
      <NoteSection />
    </>
  );
}
