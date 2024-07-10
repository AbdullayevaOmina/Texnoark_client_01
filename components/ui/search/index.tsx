"use client";
import { searchIcon } from "@/assets/icons/global";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GlobalSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const input_value = params.get("search");
      setSearch(input_value ? input_value : "");
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setSearch(search);
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("search", search);
      router.push(`?${searchParams.toString()}`);
    }
  };

  return (
    <div className="relative w-full">
      <input
        value={search}
        onChange={handleChange}
        type="search"
        placeholder="Хочу купить..."
        className="w-full h-[46px] bg-[#f0f0f0] rounded-lg px-5 pr-10 outline-none text-[14px]"
      />
      <div className="absolute top-[15px] right-3">{searchIcon}</div>
    </div>
  );
};

export default GlobalSearch;
