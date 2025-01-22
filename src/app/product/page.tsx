import React from "react";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
// import ImageRow from "@/components/Image";

const products = [
  {
    image: "/images/card1.jpeg",
    title: "winter collection",
    price: "$20",
    badge: "New",
    badgeColor: "bg-[#01AD5A]",
  },
  {
    image: "/images/card2.jpeg",
    title: "winter collection",
    price: "$20",
    oldPrice: "$39",
    badge: "Sales",
    badgeColor: "bg-[#F5813F]",
  },
  {
    image: "/images/card3.jpeg",
    title: "winter collection",
    price: "$20",
  },
  {
    image: "/images/card4.jpeg",
    title: "winter collection",
    price: "$20",
  },
  {
    image: "/images/card5.jpg",
    title: "winter collection",
    price: "$20",
    badge: "New",
    badgeColor: "bg-[#01AD5A]",
  },
  {
    image: "/images/card6.jpg",
    title: "winter collection",
    price: "$20",
    oldPrice: "$39",
    badge: "Sales",
    badgeColor: "bg-[#F5813F]",
  },
  {
    image: "/images/card9.jpg",
    title: "winter collection",
    price: "$20",
  },
  {
    image: "/images/card1.jpeg",
    title: "winter collection",
    price: "$20",
  },
  {
    image: "/images/card9.jpg",
    title: "winter collection",
    price: "$20",
    badge: "New",
    badgeColor: "bg-[#01AD5A]",
  },
  {
    image: "/images/card1.jpeg",
    title: "winter collection",
    price: "$20",
    oldPrice: "$39",
    badge: "Sales",
    badgeColor: "bg-[#F5813F]",
  },
  {
    image: "/images/card3.jpeg",
    title: "winter collection",
    price: "$20",
  },
  {
    image: "/images/card10.jpeg",
    title: "winter collection",
    price: "$20",
  },
];

const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
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
    <div className="absolute top-[329.5px] right-4 bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md w-[44px] h-[44px] flex items-center justify-center text-[#272343] hover:text-white">
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

export default function ProductPage() {
  return (
    <div className="max-w-[1320px] mx-auto p-8">
      <h1 className="text-[#272343] text-[32px] leading-[35px] text-start mb-8">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-3">
        {products.concat(products).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* form for email input */}
      <div className="mt-16 bg-[#F0F2F3] w-full">
        <div className="flex flex-col justify-center items-center p-5">
          <h2 className="text-[24px] md:text-[30px] font-medium leading-[40px] md:leading-[58px] text-center">
            Or subscribe to the newsletter
          </h2>
          <form action="" className="flex flex-col sm:flex-row gap-4 mt-5">
            <input
              type="email"
              placeholder="Email Address..."
              className="w-full sm:w-[400px] md:w-[600px] h-[40px] border hover:border-b-4 border-gray-400 p-2"
            />
            <button className="w-full sm:w-auto h-[40px] px-4 text-center cursor-pointer border text-black hover:border-b-4 border-gray-400 transition-colors">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      {/* multi image components */}
      <div className="flex flex-col justify-center items-center p-5">
        <h2 className="text-[30px] leading-[58px] font-medium">
          Follow products and discounts on Instagram
        </h2>
        <div className="p-3"> {/* <ImageRow />{" "} */}</div>
      </div>
    </div>
  );
}
