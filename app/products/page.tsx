import ProductsPage from "@/components/screens/HomePage/Products/Products";
import React from "react";

export async function getProducts() {
  const response = await fetch(`${process.env.FRONTEND_URL}/api/products`);
  return response.json();
}

async function Products() {
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
