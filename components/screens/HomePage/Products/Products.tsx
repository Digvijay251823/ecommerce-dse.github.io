"use client";
import useThemeStore from "@/context/store";
import { Products } from "@/types/types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CardList from "../wishlist/CardList";
import CardComponent from "../wishlist/CardComponent";

function ProductsPage({
  response_ok,
  response,
}: {
  response_ok: boolean;
  response: any;
}) {
  const theme = useThemeStore((state) => state.theme);
  const params = useSearchParams();
  const [productList, setProductList] = useState<Products[]>([]);
  const [IsError, setIsError] = useState(false);
  const [IsErrorMessage, setIsErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const products = params.get("products");
  useEffect(() => {
    if (!response_ok) {
      setIsError(true);
      setIsErrorMessage("Unexpected error occured");
    }
    setProductList(response.data);
  }, [response_ok, response]);

  console.log(productList);

  return (
    <div
      className={`pt-5 min-h-screen ${
        theme === "dark"
          ? "bg-stone-900 text-stone-200"
          : "bg-white text-stone-800"
      }`}
    >
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

export default ProductsPage;
