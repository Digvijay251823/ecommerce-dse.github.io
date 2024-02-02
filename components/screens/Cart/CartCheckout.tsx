import useThemeStore from "@/context/store";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

function CartCheckout() {
  const theme = useThemeStore((state) => state.theme);
  const [isOpenCard, setIsOpenCard] = useState(false);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-stone-800 text-white" : "bg-stone-700 text-white"
      } rounded-2xl md:p-5 p-3`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col gap-5">
          <p
            className={`text-lg font-semibold font-sans ${
              theme === "dark"
                ? "border-b py-1.5 border-b-stone-600"
                : "border-b py-1.5 border-b-stone-500"
            }`}
          >
            Shipping Address
          </p>
          <div className="flex flex-col">
            <p className="font-normal text-stone-300">Phone number</p>
            <p className="font-normal text-stone-300">Address</p>
          </div>
          <div>
            <button className="px-4 py-1 bg-purple-600 rounded-md">
              change address
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p
            className={`text-lg font-semibold font-sans mt-3 ${
              theme === "dark"
                ? "border-b py-1.5 border-b-stone-600"
                : "border-b py-1.5 border-b-stone-500"
            }`}
          >
            Order Summary
          </p>
          <div>
            <div className="flex items-center justify-between">
              <p>subtotal</p>
              <p>₹ 200000000</p>
            </div>
            <div className="flex items-center justify-between">
              <p>shipping</p>
              <p>₹ 20</p>
            </div>
          </div>
          <div className="flex items-center justify-between font-semibold text-purple-400 font-sans text-lg">
            <p>total</p>
            <p>₹ 199999980</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p
            className={`text-lg font-semibold font-sans mt-3 ${
              theme === "dark"
                ? "border-b py-1.5 border-b-stone-600"
                : "border-b py-1.5 border-b-stone-500"
            }`}
          >
            Order Summary
          </p>
          <div
            className={`${
              theme === "dark"
                ? "bg-stone-600 text-stone-200"
                : "bg-white text-stone-600"
            } rounded-md py-5 px-5 font-semibold`}
          >
            <div
              className="text-xl font-sans font-semibold flex items-center justify-between cursor-pointer"
              onClick={() => setIsOpenCard(!isOpenCard)}
            >
              cards
              {isOpenCard ? (
                <ChevronUpIcon className="h-6 w-6" />
              ) : (
                <ChevronDownIcon className="h-6 w-6" />
              )}
            </div>

            {isOpenCard && (
              <div>
                <p className="font-sans text-center py-2">
                  you have no cards available
                </p>
                <div
                  className={`flex font-normal border border-dashed justify-between items-center border-stone-400 cursor-pointer`}
                >
                  <p className="w-full text-center">Add Payment Method</p>
                  <p
                    className={`${
                      theme === "dark"
                        ? "bg-stone-500 border-l-stone-400"
                        : "bg-stone-100 border-l-stone-400"
                    } p-2 border-l`}
                  >
                    <PlusIcon className="h-6 w-6" />
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-purple-600 w-[200px] py-1.5 rounded-md">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCheckout;
