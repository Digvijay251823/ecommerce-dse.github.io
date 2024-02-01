import Cart from "@/components/screens/Cart/Cart";
import React from "react";

async function CartPage() {
  async function getProducts() {
    const response = await fetch(`${process.env.FRONTEND_URL}/api/products`);
    return response.json();
  }
  const response = await getProducts();
  return (
    <div>
      <Cart response_ok={response.message === "Success"} response={response} />
    </div>
  );
}

export default CartPage;
