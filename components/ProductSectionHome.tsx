"use client";
import useThemeStore from "@/context/store";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function ProductSectionHome() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div className="mt-32 w-full flex flex-col items-center min-h-screen">
      <div className="">
        <div className="">
          <div className="flex items-center justify-center md:gap-5 gap-3 font-sans md:text-5xl text-3xl font-bold mb-10">
            <p className="bg-gradient-to-r from-purple-500 to-pink-300 bg-clip-text text-transparent">
              Exclusive
            </p>
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Products
            </p>
            <Image
              src={
                "https://res.cloudinary.com/dko1ffxgt/image/upload/v1704818478/arrow_sbxojf.webp"
              }
              alt="arrow"
              height={50}
              width={50}
              className="transform rotate-90  md:w-10 h-auto w-8"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-400 text-center">
              search for the latest fashion articles and find amazing products
              to buy from our huge collection
            </p>
            <div
              className={`flex px-4 py-2 rounded-2xl mt-10 border md:mx-0 mx-3 ${
                theme === "dark"
                  ? "bg-stone-700 text-white border-stone-600"
                  : "text-black border-stone-200 bg-stone-100"
              } items-center`}
            >
              <MagnifyingGlassIcon className="h-5 w-6 text-gray-500" />
              <input
                type="text"
                className={`flex-1 outline-none ${
                  theme === "dark" ? "bg-stone-700" : "bg-stone-100"
                } px-2 py-3`}
                placeholder="search..."
              />
              <button
                className={` md:px-5 md:py-2 px-3 py-1 transition-all duration-300 drop-shadow-md hover:scale-105 hover:drop-shadow-xl ${
                  theme === "dark"
                    ? "bg-stone-900 text-gray-300 rounded-xl"
                    : "bg-stone-700 text-white rounded-xl"
                }`}
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <div className="flex items-center justify-between text-gray-500 mt-10">
              <button
                className={`px-2 py-1 rounded-md ${
                  theme === "dark"
                    ? "hover:bg-purple-950 hover:text-white"
                    : "hover:bg-purple-200"
                }`}
              >
                All
              </button>
              <button
                className={`px-2 py-1 rounded-md ${
                  theme === "dark"
                    ? "hover:bg-purple-950 hover:text-white"
                    : "hover:bg-purple-200"
                }`}
              >
                Popular
              </button>
              <button
                className={`px-2 py-1 rounded-md ${
                  theme === "dark"
                    ? "hover:bg-purple-950 hover:text-white"
                    : "hover:bg-purple-200"
                }`}
              >
                Hot
              </button>
              <button
                className={`px-2 py-1 rounded-md ${
                  theme === "dark"
                    ? "hover:bg-purple-950 hover:text-white"
                    : "hover:bg-purple-200"
                }`}
              >
                New
              </button>
              <button
                className={`px-2 py-1 rounded-md ${
                  theme === "dark"
                    ? "hover:bg-purple-950 hover:text-white"
                    : "hover:bg-purple-200"
                }`}
              >
                Offers
              </button>
              <button
                className={`px-5 py-1.5 rounded-lg flex ${
                  theme === "dark"
                    ? "text-pink-500 transition-colors duration-300 bg-pink-950 hover:bg-pink-700"
                    : "text-pink-500 transition-colors duration-300 bg-pink-200 hover:bg-pink-300"
                }`}
              >
                <FunnelIcon className="h-5 w-5" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSectionHome;
