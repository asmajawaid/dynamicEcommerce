import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

import React from 'react'

export default function Categories() {
  return (
    <>
      <div className="relative w-full max-w-[1920px] my-10">
{/* Header */}
<div className="flex justify-start items-center w-full h-[44px] mb-8">
  <h2 className="text-[32px] font-semibold text-[#272343]">
    Featured Products
  </h2>
</div>

{/* Cards Container */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
  {/* Card Component */}
  {[
    {
      image: "/images/card1.jpeg",
      title: "Denum Romper",
      price: "$20",
      badge: "New",
      badgeColor: "bg-[#01AD5A]",
    },
    {
      image: "/images/card2.jpeg",
      title: "Hodeed Romper",
      price: "$20",
      oldPrice: "$39",
      badge: "Sales",
      badgeColor: "bg-[#F5813F]",
    },
    {
      image: "/images/card3.jpeg",
      title: "Jump Suit",
      price: "$20",
    },
    {
      image: "/images/card4.jpeg",
      title: "Sweater",
      price: "$20",
    },
  ].map((product, index) => (
    <div
      key={index}
      className="relative sm:min-w-[250px] sm:gap-8 md:min-w-[200px] md:max-w-[280px] md:gap-8 lg:min-w-[150px] lg:max-w-[200px] lg:gap-10 max-w-[350px] h-[377px] overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer "
    >
      {/* Image */}
      <div className="w-full h-[312px] rounded-[6px] overflow-hidden">
        <Image
          src={product.image}
          width={500}
          height={500}
          alt={product.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col mt-4 px-1">
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
      <div className="absolute top-[329.5px] right-0 bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md w-[44px] h-[44px] flex items-center justify-center text-[#272343] hover:text-white">
        <FiShoppingCart className="w-5 h-5" />
      </div>

      {/* Badge */}
      {product.badge && (
        <div
          className={`${product.badgeColor} absolute top-4 left-4 text-white text-[13px] font-medium py-1 px-2 rounded-[4px]`}
        >
          {product.badge}
        </div>
      )}
    </div>
  ))}
</div>
</div>
    </>
  )
}


