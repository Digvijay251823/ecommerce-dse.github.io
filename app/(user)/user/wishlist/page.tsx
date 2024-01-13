"use client";
import useThemeStore from "@/context/store";
import { Products } from "@/types/types";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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

  console.log(productList);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-stone-900" : "bg-white"
      } min-h-screen px-10 flex flex-col justify-center w-full`}
    >
      <div
        className={`w-full flex flex-col items-center justify-center py-10 ${
          theme === "dark" ? "text-stone-300" : " text-stone-700"
        }`}
      >
        <HeartIconOutline className="h-20 w-20 text-red-400" />
        <p className="text-5xl font-bold font-sans ">My Wishlist</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {!isLoading ? (
          productList?.length > 0 ? (
            productList?.map((product: Products, key) => (
              <div
                key={key}
                className="flex flex-col items-center max-w-[250px] gap-3"
              >
                <div
                  className={`${
                    theme === "dark" ? "bg-stone-800" : "bg-gray-100"
                  } w-full  h-[250px] p-5 rounded-3xl flex items-center justify-center relative`}
                >
                  <Image
                    src={product?.images[0]?.secure_url}
                    alt={product?.name}
                    height={150}
                    width={150}
                  />
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
          )
        ) : (
          <div className="flex flex-col gap-5">
            <div
              className={`w-[250px] h-[250px] ${
                theme === "dark" ? "bg-stone-700" : "bg-gray-200"
              } animate-pulse rounded-3xl`}
            ></div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-2">
                <div
                  className={`w-28 h-5 ${
                    theme === "dark" ? "bg-stone-700" : "bg-gray-200"
                  } animate-pulse rounded-md`}
                ></div>
                <div
                  className={`w-20 h-3 ${
                    theme === "dark" ? "bg-stone-700" : "bg-gray-200"
                  } animate-pulse rounded-md`}
                ></div>
              </div>
              <div>
                <div
                  className={`w-[110px] h-8 ${
                    theme === "dark" ? "bg-stone-700" : "bg-gray-200"
                  } animate-pulse rounded-lg`}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
