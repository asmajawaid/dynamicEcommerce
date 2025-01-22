'use client'
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import products from '../utils/data'

const ProductCard = ({ product }: { product: (typeof products)[0] }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: Math.random(), // Unique ID for demonstration
      image: product.image,
      title: product.title,
      price: product.price,
    });
  };

  return (
    <div className="relative sm:min-w-[250px] sm:gap-8 md:min-w-[200px] md:max-w-[280px] md:gap-8 lg:min-w-[150px] lg:max-w-[200px] lg:gap-10 max-w-[350px] h-[377px] overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer">
      {/* Image */}
      <div className="w-full h-[312px] rounded-[6px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={312}
          height={312}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col mt-4">
        <div className="text-[#007580] text-[16px] font-normal">
          {product.title}
        </div>
        <div className="flex items-center gap-2 text-[18px]">
          <span className="text-[#272343]">{product.price}</span>
          {product.oldPrice && (
            <span className="text-[#9A9CAA] line-through text-[14px]">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
      {/* Add to Cart Button */}
      <div
        className="absolute top-[329.5px] right-4 bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md w-[44px] h-[44px] flex items-center justify-center text-[#272343] hover:text-white"
        onClick={handleAddToCart}
      >
        <FiShoppingCart className="w-5 h-5" />
      </div>
      {/* Badge */}
      {product.badge && (
        <div
          className={`${product.badgeColor} absolute top-4 left-4 text-white text-[13px] font-medium py-1 px-2 rounded-md`}
        >
          {product.badge}
        </div>
      )}
    </div>
  );
};
