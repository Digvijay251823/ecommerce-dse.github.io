import useThemeStore from "@/context/store";
import React, { useState } from "react";

function CardList() {
  const theme = useThemeStore((state) => state.theme);
  return (
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
  );
}

export default CardList;
