"use client";
import useThemeStore from "@/context/store";
import { Products } from "@/types/types";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import CartCard from "./CartCard";
import CartCheckout from "./CartCheckout";

function Cart({
  response_ok,
  response,
}: {
  response_ok: boolean;
  response: any;
}) {
  const params = useSearchParams();
  const theme = useThemeStore((state) => state.theme);
  const [productList, setProductList] = useState<Products[]>([]);
  const [IsError, setIsError] = useState(false);
  const [IsErrorMessage, setIsErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const CartCheck = useRef();
  useEffect(() => {
    if (!response_ok) {
      setIsError(true);
      setIsErrorMessage("Unexpected error occured");
    }
    setProductList(response.data);
  }, [response_ok, response]);

  const calculateTotal = (quantity: number) => {
    return productList.reduce(
      (total, item) => total + item.price * quantity,
      0
    );
  };

  return (
    <div
      className={`min-h-screen flex flex-col md:pb-5 pb-10 ${
        theme === "dark" ? "bg-stone-900" : "bg-gray-50"
      }`}
    >
      <p
        className={`text-3xl font-semibold font-sans py-10 text-center ${
          theme === "dark" ? "text-white" : "text-gray-700"
        }`}
      >
        Shopping Cart
      </p>
      <div className="flex md:flex-row flex-col md:justify-between lg:gap-10 gap-5 lg:px-10 px-5">
        <div className="w-full flex flex-col gap-5">
          {productList?.length > 0 ? (
            productList?.map((product, index) => (
              <CartCard product={product} key={index} />
            ))
          ) : (
            <div>No Product Fount</div>
          )}
        </div>
        <div className="w-full">
          <CartCheckout />
        </div>
      </div>
    </div>
  );
}

export default Cart;
