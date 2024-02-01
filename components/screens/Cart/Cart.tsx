"use client";
import useThemeStore from "@/context/store";
import { Products } from "@/types/types";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import CartCard from "./CartCard";

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
        theme === "dark" ? "bg-stone-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`${
          theme === "dark" ? "bg-purple-950" : "bg-purple-200"
        } flex md:flex-row flex-col items-center text-purple-700 p-10 md:justify-between mb-5`}
      >
        <p className="md:text-3xl font-semibold font-sans">Shopping Cart</p>
        <p className="md:pr-32">
          <ShoppingBagIcon className="h-20 w-20" />
        </p>
      </div>
      <div className="flex md:flex-row flex-col lg:gap-14 gap-5 md:justify-center">
        <div className="flex flex-col gap-5">
          {productList?.length > 0 ? (
            productList.map((product, index) => (
              <CartCard product={product} key={index} />
            ))
          ) : (
            <>No Products</>
          )}
        </div>
        <div className="md:w-[400px] w-full bg-black">
          <div>Checkout</div>
          <div>Checkout</div>
          <div>Checkout</div>
          <div>Checkout</div>
          <div>Checkout</div>
          <div>Checkout</div>
          <div>Checkout</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
