"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Menu() {

    const [open,setOpen] = useState(false)

  return (
    <div className=''>
      <Image src="" width={28} height={28} alt='' className='cursor-pointer' onClick={()=>setOpen((prev)=>!prev)} />
        {open && (
            <div className=''>
                <Link href="/">Home</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Logout</Link>
                <Link href="/">Cart(1)</Link>

            </div>
        )}
    </div>
  )
}
