"use client";
import useThemeStore from "@/context/store";
import { Products } from "@/types/types";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CardList from "@/components/screens/HomePage/wishlist/CardList";

function Wishlist() {
  const { data: session, update } = useSession();
  const [productList, setProductList] = useState([]);
  const [IsError, setIsError] = useState(false);
  const [IsErrorMessage, setIsErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const theme = useThemeStore((state) => state.theme);
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
    <div
      className={`${
        theme === "dark" ? "bg-stone-900" : "bg-white"
      } min-h-screen flex flex-col items-center`}
    >
      <div
        className={`w-full flex flex-col items-center justify-center py-10 ${
          theme === "dark" ? "text-stone-300" : " text-stone-700"
        }`}
      >
        <HeartIconOutline className="h-20 w-20 text-red-400" />
        <p className="text-5xl font-bold font-sans ">My Wishlist</p>
      </div>

      {!isLoading ? (
        <div className="w-full flex justify-center">
          <div className="flex flex-wrap gap-5 lg:w-[80vw] md:w-[90vw] w-[70vw]">
            {productList?.length > 0 ? (
              productList?.map((product: Products, key) => (
                <div
                  key={key}
                  className="flex flex-col items-center w-[250px] gap-3"
                >
                  <div
                    className={`${
                      theme === "dark" ? "bg-stone-800" : "bg-gray-100"
                    } w-full  h-[300px] rounded-3xl flex items-center justify-center relative`}
                  >
                    {product?.images[0]?.secure_url && (
                      <Image
                        src={product?.images[0]?.secure_url}
                        alt={product?.name}
                        height={150}
                        width={150}
                        className="w-auto"
                      />
                    )}
                    <p className="absolute right-0 bottom-0 mx-3 my-3 py-2 px-2 bg-white rounded-full drop-shadow-lg">
                      <HeartIcon className="h-6 w-6 text-red-400" />
                    </p>
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
              ))
            ) : (
              <p>{IsErrorMessage}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-5">
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
  );
}

export default Wishlist;
