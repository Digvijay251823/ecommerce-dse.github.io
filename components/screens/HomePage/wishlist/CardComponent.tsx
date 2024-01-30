import useThemeStore from "@/context/store";
import { Products } from "@/types/types";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

function CardComponent({ product }: { product: Products }) {
  const theme = useThemeStore((state) => state.theme);
  const [isCLicked, setIsClicked] = useState(false);
  return (
    <div className="flex flex-col items-center w-[250px] gap-3">
      <div
        className={`${
          theme === "dark" ? "bg-stone-800" : "bg-gray-100"
        } w-full  h-[300px] p-5 rounded-xl flex items-center justify-center relative`}
      >
        <Link href={`/products/${product?._id}`}>
          {product?.images[0]?.secure_url && (
            <Image
              src={product?.images[0]?.secure_url}
              alt={product?.name}
              height={150}
              width={150}
              className="w-auto"
            />
          )}
        </Link>
        {isCLicked ? (
          <button
            className={`absolute right-0 bottom-0 mx-3 my-3 py-2 px-2 backdrop-blur-xl ${
              theme === "dark"
                ? "hover:bg-purple-950 bg-gray-900"
                : "hover:bg-purple-100 bg-white"
            } rounded-full drop-shadow-lg transition-colors duration-300 `}
            onClick={() => setIsClicked(false)}
          >
            <HeartIcon className="h-6 w-6 text-red-400" />
          </button>
        ) : (
          <button
            className={`absolute right-0 bottom-0 mx-3 my-3 py-2 px-2 ${
              theme === "dark"
                ? "text-gray-400 bg-stone-800 hover:bg-purple-950 hover:text-purple-600"
                : "text-gray-400 bg-white hover:bg-purple-100 hover:text-purple-500"
            } rounded-full drop-shadow-lg transition-colors duration-300  outline-none`}
            onClick={() => setIsClicked(true)}
          >
            <HeartIconOutline className="h-6 w-6" />
          </button>
        )}
      </div>
      <div className="flex items-center w-full justify-between">
        <div>
          <p
            className={`text-lg font-bold ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {product?.name}
          </p>
          <p className="text-gray-400">{product?.brand}</p>
        </div>
        <p
          className={`text-lg font-bold w-[110px] ${
            theme === "dark"
              ? " bg-gradient-to-tr from-red-900 via-stone-800 to-purple-950 text-gray-300"
              : "bg-gradient-to-tr from-red-200 via-white to-purple-300 text-gray-700"
          } px-5 py-1.5 rounded-lg`}
        >
          $ {product?.price}
        </p>
      </div>
    </div>
  );
}

export default CardComponent;
