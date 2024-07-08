import ProductCard from "@/components/ui/card/product-card";
import useWishlistStore from "@/store/wishlist-store";

const Likes = () => {
  const { dataWishlist } = useWishlistStore();
  console.log(dataWishlist);

  return (
    <div className="">
      <div>
        {dataWishlist.length > 0 &&
          dataWishlist.map((item: any, i) => (
            <ProductCard key={i} product={item?.product_id} like={true} />
          ))}
      </div>
    </div>
  );
};

export default Likes;
