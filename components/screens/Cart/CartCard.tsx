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
    <div className="bg-white pb-5 rounded md:w-full w-[90vw] mx-5">
      <div
        className={`border-b md:mx-5 md:w-[500px]  ${
          theme === "dark" ? "border-b-stone-700" : "border-b-stone-300"
        }`}
      >
        <div className="p-2 md:p-5 flex items-center lg:gap-10 gap-5 relative w-full">
          <button className="absolute top-0 right-0 p-5">
            {" "}
            <XMarkIcon className="h-6 w-6" />
          </button>
          <div className="">
            <input
              type="checkbox"
              value={product._id}
              onChange={(e) => setSelectedProduct(e.target.value)}
            />
          </div>
          <div
            className={`p-2 w-max rounded-md border ${
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
            className={`flex flex-col items-start gap-5 ${
              theme === "dark" ? "text-gray-500" : "text-gray-700"
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
            <div className="flex items-center justify-between gap-5 md:w-[260px] w-[200px]">
              <p className="underline">add to favourite</p>
              <p className="font-semibold">$ {product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
