import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-emerald-950 to-emerald-800 text-white py-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
    {/* <!-- About Section --> */}
    <div>
      <h3 className="text-lg font-bold mb-4">About E-Shop</h3>
      <p className="text-sm leading-relaxed">
        E-Shop is your one-stop destination for the best products. Discover amazing deals and a seamless shopping experience.
      </p>
    </div>

    {/* <!-- Quick Links --> */}
    <div>
      <h3 className="text-lg font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><Link href="/" className="hover:text-yellow-400 transition duration-300">Home</Link></li>
        <li><Link href="/shop" className="hover:text-yellow-400 transition duration-300">Shop</Link></li>
        <li><Link href="/about" className="hover:text-yellow-400 transition duration-300">About Us</Link></li>
        <li><Link href="/contact" className="hover:text-yellow-400 transition duration-300">Contact</Link></li>
        <li><Link href="/blog" className="hover:text-yellow-400 transition duration-300">Blog</Link></li>
      </ul>
    </div>

    {/* <!-- Newsletter Subscription --> */}
    <div>
      <h3 className="text-lg font-bold mb-4">Newsletter</h3>
      <p className="text-sm leading-relaxed mb-4">
        Subscribe to our newsletter for the latest updates and exclusive deals.
      </p>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="mt-2 w-full bg-yellow-600 text-black py-2 rounded-md hover:bg-yellow-500 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>

    {/* <!-- Social Media Links --> */}
    <div>
      <h3 className="text-lg font-bold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <Link href="#" className="hover:text-yellow-400 transition duration-300">
        <FaFacebook />
        </Link>
        <Link href="#" className="hover:text-yellow-400 transition duration-300">
        <FaTwitter />
        </Link>
        <Link href="#" className="hover:text-yellow-400 transition duration-300">
        <FaInstagram />
        </Link>
        <Link href="#" className="hover:text-yellow-400 transition duration-300">
        <FaLinkedin />

        </Link>
      </div>
    </div>
  </div>

  <div className="border-t border-white mt-8 pt-4 text-center">
    <p className="text-sm">
      © 2025 E-Shop. All Rights Reserved. | <a href="/privacy-policy" className="hover:text-yellow-400 transition duration-300">Privacy Policy</a>
    </p>
  </div>
</footer>

    </>
  )
}
