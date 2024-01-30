"use client";
import useThemeStore from "@/context/store";

import {
  BellAlertIcon,
  Cog6ToothIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function BottomNav() {
  const pathname = usePathname();
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 flex md:hidden ${
        theme === "dark" ? "bg-stone-800" : " bg-white"
      }`}
    >
      <div className="flex items-center w-full justify-evenly">
        <Link href={"/"}>
          <button
            className={` py-3 transition-colors duration-500 ${
              pathname === "/"
                ? theme === "dark"
                  ? "text-purple-400 border-t-2 border-t-purple-400 px-3"
                  : "text-purple-400 border-t-2 border-t-purple-400 px-3"
                : theme === "dark"
                ? "text-gray-500 px-3"
                : "text-gray-400 px-3"
            }`}
          >
            <HomeIcon className="h-6 w-6" />
          </button>
        </Link>
        <Link href={"/search"}>
          <button
            className={` py-3 transition-colors duration-500 ${
              pathname === "/search"
                ? theme === "dark"
                  ? "text-purple-400 border-t-2 border-t-purple-400 px-3"
                  : "text-purple-400 border-t-2 border-t-purple-400 px-3"
                : theme === "dark"
                ? "text-gray-500 px-3"
                : "text-gray-400 px-3"
            }`}
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </Link>
        <Link href={"/user/wishlist"}>
          <button
            className={` py-3 transition-colors duration-500 ${
              pathname === "/user/wishlist"
                ? theme === "dark"
                  ? "text-purple-400 border-t-2 border-t-purple-400 px-3"
                  : "text-purple-400 border-t-2 border-t-purple-400 px-3"
                : theme === "dark"
                ? "text-gray-500 px-3"
                : "text-gray-400 px-3"
            }`}
          >
            <HeartIcon className="h-6 w-6" />
          </button>
        </Link>
        <Link href={"/user/notifications"}>
          <button
            className={` py-3 transition-colors duration-500 ${
              pathname === "/user/notifications"
                ? theme === "dark"
                  ? "text-purple-400 border-t-2 border-t-purple-400 px-3"
                  : "text-purple-400 border-t-2 border-t-purple-400 px-3"
                : theme === "dark"
                ? "text-gray-500 px-3"
                : "text-gray-400 px-3"
            }`}
          >
            <BellAlertIcon className="h-6 w-6" />
          </button>
        </Link>
        <Link href={"/user/settings"}>
          <button
            className={` py-3 transition-colors duration-500 ${
              pathname === "/user/settings"
                ? theme === "dark"
                  ? "text-purple-400 border-t-2 border-t-purple-400 px-3"
                  : "text-purple-400 border-t-2 border-t-purple-400 px-3"
                : theme === "dark"
                ? "text-gray-500 px-3"
                : "text-gray-400 px-3"
            }`}
          >
            <Cog6ToothIcon className="h-6 w-6" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BottomNav;
