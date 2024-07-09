"use client";
import { useRouter } from "next/navigation";
import {
  addToCartIcon,
  heartFullIcon,
  heartOutlineIcon,
  statistikIcon,
} from "@/assets/icons/global";
import Image from "next/image";
import { setDataFromCookie } from "@/helpers/cookie";
import useWishlistStore from "@/store/wishlist-store";
import { Product } from "@/types/product-types";
import { useState, useEffect } from "react";
import useCartStore from "@/store/cart";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();
  const { likePost, dataWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  useEffect(() => {
    setIsLiked(
      dataWishlist.some(
        (wishlistItem: any) => wishlistItem?.product_id?.id === product.id
      )
    );
  }, [dataWishlist, product.id]);

  const viewSingleProduct = (id: number) => {
    setDataFromCookie("product_id", id);
    router.push(`/products/${id}`);
  };

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const resStatus:any = await likePost(product.id);
    setIsLiked(resStatus === 201);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product.id)
  };

  const handleStatistik = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Statistics logic here
  };

  const monthlyPayment = (+product.price / 12).toFixed(2);
  const productImage = product.images[0];

  return (
    <div
      className="bg-white rounded-lg p-4 md:p-6 flex flex-col justify-between cursor-pointer w-[230px] md:w-[260px] lg:w-[305px]"
      onClick={() => viewSingleProduct(product.id)}
    >
      <div className="flex justify-center items-center h-[230px]">
        <Image
          src={productImage}
          alt={product.name}
          width={200}
          height={230}
          className="h-[230px]"
        />
      </div>
      <div className="grid gap-1 md:gap-2 mt-3">
        <h3 className="text-[13px] md:text-[16px] text-gray-700">
          {product.name}
        </h3>
        <b>
          {product.price} <small>so'm</small>
        </b>
        <div className="bg-[#edfaed] text-[#1EB91E] text-center rounded-lg py-1 text-[12px]">
          {monthlyPayment} so'mdan/12 oy
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 md:mt-3">
        <button
          className="bg-[#D55200] rounded-lg flex items-center gap-2 text-white px-3 py-2 md:px-6 md:py-3 text-[14px]"
          onClick={handleAddToCart}
          aria-label="Add to Cart"
        >
          {addToCartIcon} <span className="hidden md:flex">Savat</span>
        </button>
        <button
          onClick={handleLike}
          className="flex items-center justify-center gap-1 bg-[#f0f0f0] py-2 md:py-3 px-3 md:px-4 rounded-lg"
          aria-label="Like"
        >
          {isLiked ? heartFullIcon : heartOutlineIcon}
        </button>
        <button
          onClick={handleStatistik}
          className="flex items-center justify-center gap-1 bg-[#f0f0f0] py-2 md:py-3 px-3 md:px-4 rounded-lg"
          aria-label="Statistics"
        >
          {statistikIcon}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
