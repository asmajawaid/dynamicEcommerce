// import { CartProvider } from "../context/CartContext";
// import Categories from "@/components/Categories";
// import HeroSection from "@/components/HeroSection";
// import ProductPage from "./product/[slug]/page";


// export default function Home() {
//   return (
//    <div>
//     <Categories/>
//     <ProductPage/>
//    </div>
//   );
// }

'use client'

import { useState, createContext } from 'react';
import { AppContext } from '@/context/AppContext';
import Products from '@/components/Products';

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  console.log(showCart);

  return (
    <AppContext.Provider value={{ showCart, setShowCart }}>
     
      <Products />
    </AppContext.Provider>
  )
}

