import React from 'react'

import { CartProvider } from "@/context/CartContext";


export default function Index({ Component, pageProps }:any) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
