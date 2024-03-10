import React from "react";
import ProductCard from "../../components/card/ProductCard";
const CartPage = () => {
  return (
    <>
  <div className="h-screen w-screen bg-gray-300 min-h-96">

    <nav className="w-screen h-24 bg-blue-600 flex items-center justify-center font-serif font-extrabold text-white text-4xl">
        <h1>Your Cart</h1>
    </nav>
    <section>
<ProductCard/>
    </section>
    <footer></footer>
  </div>
    </>
  );
};

export default CartPage;
