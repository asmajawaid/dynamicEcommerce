

"use client"

import { FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'

import Link from 'next/link'
import React, { useContext } from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import Cart from './Cart';
import { CartContext } from '../context/CartContext';

// const Navbar = () => {

//   const {totalQuantity, showCart, setShowCart}:any = useContext(CartContext);
  
//   const handleCick = () => {
//     setShowCart(!showCart)
//   }
//   return (
//     <>
//        <div className='w-full h-[80px] bg-white '>
//         <div className='container w-full h-full flex justify-between items-center'>
//             <Link href='/' className='logo'>Shop</Link>
//             <button className='cart-icon' onClick={handleCick}>
//                 <FiShoppingBag />
//                 <span className='cart-item-qty'>{totalQuantity}</span>
//             </button>
//         </div>
//       </div>

//       {showCart && <Cart />}
      
//     </>
//   )
// }

// export default Navbar

export default function NavBar() {
 

    const {totalQuantity, showCart, setShowCart}: any = useContext(CartContext);
    
    const handleCick = () => {
      setShowCart(!showCart)
  return (
    <div>
      <nav className="bg-gradient-to-r from-emerald-950 to-emerald-800 p-4 shadow-lg">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    {/* <!-- Logo Section --> */}
    <a href="/" className="text-white text-2xl font-bold hover:text-indigo-200 transition duration-300 ease-in-out">
      <span className="text-yellow-400">E</span>-Shop
    </a>

    {/* <!-- Nav Links --> */}
    <div className="hidden md:flex space-x-8">
      <Link href="/" className="text-white hover:text-yellow-400 hover:underline transition duration-300 ease-in-out">Home</Link>
      <Link href="/shop" className="text-white hover:text-yellow-400 hover:underline transition duration-300 ease-in-out">Shop</Link>
      <Link href="/about" className="text-white hover:text-yellow-400 hover:underline transition duration-300 ease-in-out">About Us</Link>
      <Link href="/contact" className="text-white hover:text-yellow-400 hover:underline transition duration-300 ease-in-out">Contact</Link>
      <Link href="/blog" className="text-white hover:text-yellow-400 hover:underline transition duration-300 ease-in-out">Blog</Link>
    </div>

    {/* <!-- Icons/Actions --> */}
    <div className="flex space-x-6">
      {/* <!-- Search Icon --> */}
      <button className="text-white hover:text-yellow-400 transition duration-300 ease-in-out" onClick={handleCick}>
      <FaCartShopping />
      </button>

      {/* Cart Icon  */}
      <button className="relative text-white hover:text-yellow-400 transition duration-300 ease-in-out">
      <FaCartShopping />
        <span className="absolute top-0 right-0 inline-block w-5 h-5 bg-yellow-400 text-white rounded-full text-xs font-semibold">{totalQuantity}</span>
      </button>

       {/* User Icon  */}
      <button className="text-white hover:text-yellow-400 transition duration-300 ease-in-out">
      <FaUser />
      </button>
    </div>
  </div>
</nav>

    </div>
  )
}
}
