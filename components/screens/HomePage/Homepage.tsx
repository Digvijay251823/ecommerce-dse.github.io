"use client";
import HeroSection from "@/components/HeroSection";
import ProductSectionHome from "@/components/ProductSectionHome";
import useThemeStore from "@/context/store";
import React from "react";

function Homepage() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      className={`min-h-screen min-w-screen ${
        theme === "dark" ? "bg-stone-900" : "bg-white"
      }`}
    >
      <HeroSection />
      <ProductSectionHome />
    </div>
  );
}

export default Homepage;
