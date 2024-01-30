import ProductsPage from "@/components/screens/HomePage/Products/Products";
import React from "react";

async function Products() {
  async function getProducts() {
    const response = await fetch(`${process.env.FRONTEND_URL}/api/products`);
    return response.json();
  }
  const response = await getProducts();
  return (
    <div>
      <ProductsPage
        response={response}
        response_ok={response.message === "Success"}
      />
    </div>
  );
}

export default Products;
