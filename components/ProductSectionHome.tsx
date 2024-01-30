"use client";
import useThemeStore from "@/context/store";
import {
  FunnelIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CardList from "./screens/HomePage/wishlist/CardList";
import { Products } from "@/types/types";
import CardComponent from "./screens/HomePage/wishlist/CardComponent";

function ProductSectionHome() {
  const theme = useThemeStore((state) => state.theme);
  const params = useSearchParams();
  const [productList, setProductList] = useState([]);
  const [IsError, setIsError] = useState(false);
  const [IsErrorMessage, setIsErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const products = params.get("products");
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetch("/api/products")
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            setIsError(true);
            return data.json();
          }
        })
        .then((data) => {
          if (!IsError) {
            setProductList(data.data);
          } else {
            setIsErrorMessage(data.message);
          }
        })
        .catch((err) => {
          setIsErrorMessage(err.message || err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();
  }, [IsError]);
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
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-center">
              search for the latest fashion articles and find amazing products
              to buy from our huge collection
            </p>
            <form
              className={`flex px-4 py-2 rounded-2xl mt-10 border md:mx-0 mx-5 md:w-full ${
                theme === "dark"
                  ? "bg-stone-700 text-white border-stone-600"
                  : "text-black border-stone-200 bg-stone-100"
              } items-center`}
            >
              <MagnifyingGlassIcon className="h-5 w-6 text-gray-400" />
              <input
                type="text"
                className={`flex-1 outline-none ${
                  theme === "dark" ? "bg-stone-700" : "bg-stone-100"
                } md:px-2 px-1 py-3`}
                placeholder="search..."
              />
              <button
                className={` md:px-5 py-2 px-3 transition-all duration-300 drop-shadow-md hover:scale-105 hover:drop-shadow-xl  ${
                  theme === "dark"
                    ? "bg-stone-900 text-gray-300 rounded-xl"
                    : "bg-stone-700 text-white rounded-xl"
                }`}
              >
                Explore
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className="">
            <div className="flex items-center justify-between text-gray-500 mt-10">
              <button
                className={`px-2 py-1 rounded-md h-max ${
                  theme === "dark"
                    ? "hover:bg-purple-950 hover:text-white"
                    : "hover:bg-purple-200"
                }`}
              >
                Popular
              </button>
              <button
                className={`px-2 py-1 rounded-md h-max ${
                  theme === "dark"
                    ? "hover:bg-purple-950 hover:text-white"
                    : "hover:bg-purple-200"
                }`}
              >
                Hot
              </button>
              <button
                className={`px-2 py-1 rounded-md h-max ${
                  theme === "dark"
                    ? "hover:bg-purple-950 hover:text-white"
                    : "hover:bg-purple-200"
                }`}
              >
                New
              </button>
              <button
                className={`px-2 py-1 rounded-md h-max ${
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
      <div className="w-full flex justify-center mt-20">
        <div className="lg:w-[80vw] md:w-[90vw] w-[70vw]">
          {!isLoading ? (
            <div className="flex flex-wrap gap-5">
              {productList?.length > 0 ? (
                productList?.map((product: Products, key) => (
                  <CardComponent key={key} product={product} />
                ))
              ) : (
                <p>{IsErrorMessage}</p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
              <CardList />
              <CardList />
              <CardList />
              <CardList />
              <CardList />
              <CardList />
              <CardList />
              <CardList />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductSectionHome;
