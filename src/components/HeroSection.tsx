'use client'
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function HeroSection() {
  const slides = [
    {
      title: "Mega Sale 50% OFF",
      description: "Shop the best deals on top products today!",
      buttonText: "Shop Now",
      image: "/images/hero1.jpeg",
    },
    {
      title: "New Arrivals",
      description: "Discover the latest trends and collections.",
      buttonText: "Explore",
      image: "/images/hero2.webp",
    },
    {
      title: "Exclusive Offers",
      description: "Special discounts for our loyal customers.",
      buttonText: "Grab Deals",
      image: "/images/hero.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      <div className="absolute inset-0">
        {/* Slider */}
        <div className="w-full h-full relative overflow-hidden object-cover">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-transform duration-700 bg-cover ${
                index === currentIndex ? "translate-x-0" : "-translate-x-full"
              }`}
              style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                <button className="bg-yellow-600 text-black py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 transition duration-300 z-10"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 transition duration-300 z-10"
        >
          <FaAngleRight />
        </button>
      </div>
    </section>
  );
}
