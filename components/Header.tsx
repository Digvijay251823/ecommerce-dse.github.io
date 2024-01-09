"use client";
import useThemeStore from "@/context/store";
import React from "react";
import {
  Cog6ToothIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  ShoppingBagIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";

function Header({ className }: { className: string }) {
  const Toggletheme = useThemeStore((state) => state.setTheme);
  const theme = useThemeStore((state) => state.theme);

  return (
    <header>
      <div
        className={`flex items-center justify-between md:px-20 px-5 py-3 border-b ${
          theme === "dark"
            ? "text-white bg-stone-900 border-stone-700"
            : "text-black"
        }`}
      >
        <div className="flex items-center gap-10">
          <p className={` text-3xl font-extrabold ${className}`}>XOCO</p>
          <nav className="flex items-center gap-8">
            <button className="text-lg ">Home</button>
            <button className="text-lg ">Deals</button>
            <button className="text-lg ">Featured</button>
            <button
              className={`text-lg  bg-gradient-to-r font-bold ${
                theme === "light"
                  ? `from-red-700  to-purple-700`
                  : "from-red-400  to-purple-400"
              } bg-clip-text text-transparent`}
            >
              New Arrivals
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <div className="">
            {theme === "dark" ? (
              <button className="" onClick={() => Toggletheme("light")}>
                <SunIcon className="h-6 w-6" />
              </button>
            ) : (
              <button className="" onClick={() => Toggletheme("dark")}>
                <MoonIcon className="h-6 w-6" />
              </button>
            )}
          </div>
          <form
            className={`flex items-center ${
              theme === "dark" ? "bg-stone-700" : "bg-stone-100"
            } px-2 py-2 rounded-2xl`}
          >
            <button className="text-stone-400 mx-2 ">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
            <input
              type="text"
              placeholder="search..."
              className={`py-1.5 ${
                theme === "dark" ? "bg-stone-700" : "bg-stone-100"
              } outline-none`}
            />
          </form>
          <div
            className={`border-l-2 ${
              theme === "dark" ? "border-stone-700" : "border-stone-200"
            } pl-5 h-10 flex items-center`}
          >
            <div className="w-40 flex justify-center">
              <button
                className={`px-6 py-1.5  ${
                  theme === "dark" ? "bg-orange-900" : "bg-orange-300"
                } rounded-md text-lg`}
              >
                LOGIN
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button
                className={`${
                  theme === "dark"
                    ? "text-stone-300 bg-stone-800 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-950"
                    : "text-stone-800 bg-stone-100 transition-colors duration-500 hover:text-purple-700 hover:bg-purple-100"
                } p-2 rounded-lg`}
              >
                <HeartIcon className="h-5 w-5" />
              </button>
              <button
                className={`${
                  theme === "dark"
                    ? "text-stone-300 bg-stone-800 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-950"
                    : "text-stone-800 bg-stone-100 transition-colors duration-500 hover:text-purple-700 hover:bg-purple-100"
                } p-2 rounded-lg`}
              >
                <ShoppingBagIcon className="h-5 w-5" />
              </button>
              <button
                className={`${
                  theme === "dark"
                    ? "text-stone-300 bg-stone-800 transition-colors duration-500 hover:text-purple-500 hover:bg-purple-950"
                    : "text-stone-800 bg-stone-100 transition-colors duration-500 hover:text-purple-700 hover:bg-purple-100"
                } p-2 rounded-lg`}
              >
                <Cog6ToothIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
