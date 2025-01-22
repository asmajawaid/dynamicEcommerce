import React from 'react';
import Link from "next/link"
import Menu from './Menu';

export default function Header() {
  return (
    <>
    <div className="bg-yellow-600 text-black py-2 px-4 text-center shadow-md">
  <p className="text-sm font-semibold">
    🎉 Hurry up! Enjoy up to <span className="text-red-600">50% OFF</span> on selected items. 
    <a href="/shop" className="underline hover:text-red-800 transition duration-300">Shop Now</a>
  </p>
</div>

    </>
  )
}
