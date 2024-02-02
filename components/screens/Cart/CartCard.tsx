import useThemeStore from "@/context/store";
import { Products } from "@/types/types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";

function CartCard({ product }: { product: Products }) {
  const [selectedProduct, setSelectedProduct] = useState("");
  console.log(selectedProduct);
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-stone-800" : "bg-white"
      } rounded-2xl`}
    >
      <div
        className={`${
          theme === "dark" ? "border-b-stone-700" : "border-b-stone-300"
        }`}
      >
        <div className="p-2 md:p-5 flex items-center lg:gap-10 gap-5 relative">
          <button
            className={`absolute top-0 right-0 p-2 rounded-full text-red-400 transition-all duration-500 active:scale-75 ${
              theme === "dark" ? "hover:bg-red-900" : "hover:bg-red-100 "
            }`}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <div
            className={`p-2 ${
              theme === "dark" ? "bg-stone-800 border-gray-800" : "bg-stone-100"
            }`}
          >
            {product.images[0].secure_url && (
              <Image
                src={product.images[0].secure_url}
                alt={product.name}
                height={100}
                width={100}
              />
            )}
          </div>
          <div
            className={`flex flex-col items-start gap-5 flex-1 md:justify-between w-full font-sans ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            <p className={`font-semibold text-xl`}>{product.name}</p>
            <button
              className={`font-normal border rounded px-4 py-1.5 ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              controller
            </button>
            <div className="flex items-center justify-between gap-5 w-full">
              <p className="underline">add to favourite</p>
              <p className="font-semibold text-2xl font-sans">
                ₹ {product.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
