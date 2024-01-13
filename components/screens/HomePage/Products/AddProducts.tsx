"use client";
import useThemeStore from "@/context/store";
import React, { useRef, useState } from "react";
import Model from "@/components/ResponseModal";

function AddProducts() {
  const theme = useThemeStore((state) => state.theme);
  const [Loading, setISLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ErrorMessage, setIsErrorMessage] = useState("");
  const [SuccessMessage, setIsSuccessMessage] = useState("");

  const formRef = useRef<HTMLFormElement | any>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setISLoading(true);
    const formData = new FormData(formRef.current);
    await fetch("/api/products", {
      method: "POST",
      body: formData,
    })
      .then((data) => {
        if (data.ok) {
          setIsModalOpen(true);
          setIsSuccess(true);
          return data.json();
        } else {
          setIsModalOpen(true);
          setIsSuccess(false);
          return data.json();
        }
      })
      .then((data) => {
        if (isSuccess) {
          setIsSuccessMessage(data.message);
        } else {
          setIsErrorMessage(data.message);
        }
      })
      .finally(() => {
        setISLoading(false);
      });
  };
  const onClose = () => {
    setISLoading(false);
    setIsModalOpen(false);
    setIsErrorMessage("");
    setIsSuccessMessage("");
  };
  return (
    <div
      className={`min-h-screen md:pt-10 px-5 ${
        theme === "dark" ? "bg-stone-900 text-white" : "bg-white text-stone-800"
      }`}
    >
      <div>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-2">
              <label>name</label>
              <input
                type="text"
                name="name"
                placeholder="Hand Bag"
                className={`border px-4 py-1.5 outline-none rounded-lg ${
                  theme === "dark"
                    ? "bg-stone-900 border-stone-700"
                    : "border-stone-200"
                }`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>
                Slug{" "}
                <i className="text-gray-400">
                  (slug will be shown as a url path)
                </i>
              </label>
              <input
                type="text"
                name="slug"
                placeholder="hand-bag"
                className={`border px-4 py-1.5 outline-none rounded-lg ${
                  theme === "dark"
                    ? "bg-stone-900 border-stone-700"
                    : "border-stone-200"
                }`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>description</label>
              <textarea
                name="description"
                placeholder="enter the description of this product"
                className={`border px-4 py-1.5 outline-none rounded-lg ${
                  theme === "dark"
                    ? "bg-stone-900 border-stone-700"
                    : "border-stone-200"
                }`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Price</label>
              <input
                type="number"
                name="price"
                placeholder="enter the price"
                className={`border px-4 py-1.5 outline-none rounded-lg ${
                  theme === "dark"
                    ? "bg-stone-900 border-stone-700"
                    : "border-stone-200"
                }`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Category</label>
              <input
                type="text"
                name="category"
                placeholder="HandBag"
                className={`border px-4 py-1.5 outline-none rounded-lg ${
                  theme === "dark"
                    ? "bg-stone-900 border-stone-700"
                    : "border-stone-200"
                }`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Brand</label>
              <input
                type="text"
                name="brand"
                placeholder="Nike"
                className={`border px-4 py-1.5 outline-none rounded-lg ${
                  theme === "dark"
                    ? "bg-stone-900 border-stone-700"
                    : "border-stone-200"
                }`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Stock</label>
              <input
                type="number"
                name="stock_Qty"
                placeholder="enter the stock"
                className={`border px-4 py-1.5 outline-none rounded-lg ${
                  theme === "dark"
                    ? "bg-stone-900 border-stone-700"
                    : "border-stone-200"
                }`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Attributes</label>
              <input
                type="string"
                name="attributes"
                placeholder="enter the stock"
                className={`border px-4 py-1.5 outline-none rounded-lg ${
                  theme === "dark"
                    ? "bg-stone-900 border-stone-700"
                    : "border-stone-200"
                }`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>image</label>
              <input
                type="file"
                name="image"
                multiple={true}
                accept="image"
                className={`border px-4 py-1.5 outline-none rounded-lg file:outline-none file:border-none file:bg-purple-400 file:text-white file:rounded-md ${
                  theme === "dark"
                    ? "border-stone-700 text-white"
                    : "text-stone-800 border-gray-200"
                }`}
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-20">
            <button
              type="submit"
              disabled={Loading}
              className="tex-lg bg-purple-400 text-white px-5 py-2 rounded-md"
            >
              {Loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <Model
        isLoading={Loading}
        isSuccess={isSuccess}
        isModalOpen={isModalOpen}
        onClose={onClose}
        successMessage={SuccessMessage}
        errorMessage={ErrorMessage}
      />
    </div>
  );
}

export default AddProducts;
