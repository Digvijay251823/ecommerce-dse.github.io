import useThemeStore from "@/context/store";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function HeroSection() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div className="flex items-start justify-center gap-20 pt-10">
      <div className="md:w-[35vw]">
        <p className="text-gray-400 text-lg">Absolutely hot collections 🔥</p>
        <div
          className={`text-5xl font-extrabold w-full flex flex-col gap-3 mt-8 font-sans ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          <p>The Best Place To</p> <p> Find And Buy</p>{" "}
          <div className="flex gap-5">
            Amazing{" "}
            <p
              className={`text-5lg  bg-gradient-to-r font-extrabold ${
                theme === "light"
                  ? `from-pink-300  to-purple-400`
                  : "from-pink-300  to-purple-400"
              } bg-clip-text text-transparent`}
            >
              Products
            </p>
          </div>
        </div>
        <div
          className={`mt-6 ${
            theme === "dark" ? "text-gray-400" : "text-gray-400"
          }`}
        >
          Elevate your lifestyle, redefine your choices because at XOCO, you
          deserve nothing but the best.
        </div>
        <div className="flex items-center mt-10 gap-10">
          <button
            className={`text-lg px-6 rounded-md py-3 ${
              theme === "dark"
                ? "bg-stone-700 text-stone-200 transition-all duration-500 hover:scale-110"
                : "text-white bg-gray-800 transition-all duration-500 hover:scale-110"
            }`}
          >
            Explore Now
          </button>
          <div
            className={`cursor-pointer flex items-center gap-5 border transition-all duration-500 hover:scale-110 ${
              theme === "dark"
                ? "border-stone-700 hover:border-purple-900"
                : "hover:border-purple-300"
            } rounded-full pr-2`}
          >
            <div
              className={`relative p-5  inset-px h-10 w-10 rounded-full border-l-4 border-t-4 border-t-transparent border-l-transparent bg-gradient-to-r from-pink-300 to-purple-500 border-r-4 border-b-4 ${
                theme === "dark"
                  ? "border-r-stone-700 border-b-stone-700"
                  : "border-r-gray-100 border-b-gray-100"
              } bg-clip-border transform -rotate-45`}
            >
              <div
                className={`absolute h-10 w-10 ${
                  theme === "dark" ? "bg-stone-900 text-white" : "bg-white"
                } rounded-full left-0 top-0 flex items-center justify-center`}
              >
                <ArrowDownTrayIcon className="h-5 w-5 transform -rotate-45 text-gray-500" />
              </div>
            </div>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
              Request A Demo
            </p>
          </div>
        </div>
        <div className="flex items-center gap-10 mt-10">
          <div
            className={`flex flex-col items-center gap-5 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <p className="text-4xl font-bold font-sans">20k +</p>
            <p className="text-sm font-semibold font-sans">Collections</p>
          </div>
          <p
            className={`h-10 border ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            }`}
          ></p>
          <div
            className={`flex flex-col items-center gap-5 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <p className="text-4xl font-bold font-sans">16k +</p>
            <p className="text-sm font-semibold font-sans">Users</p>
          </div>
        </div>
      </div>
      {theme === "dark" ? (
        <Image
          src={
            "https://res.cloudinary.com/dko1ffxgt/image/upload/v1704785088/Group_9_ctrfkq.webp"
          }
          height={470}
          width={470}
          alt="heroimage"
          priority={true}
          className="content-fit"
        />
      ) : (
        <Image
          src={
            "https://res.cloudinary.com/dko1ffxgt/image/upload/v1704784445/Group_7_vx3sx2.webp"
          }
          height={470}
          width={470}
          alt="heroimage"
          priority={true}
          className="content-fit"
        />
      )}
    </div>
  );
}

export default HeroSection;
