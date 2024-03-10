import { Image } from "@chakra-ui/image";
import React, { useState } from "react";

const ProductCard = () => {
  const [product, SetProduct] = useState(true);
  return (
    <>
      <div className="min-h-72 w-full flex">
        <div className="min-h-72 w-2/3 bg-white m-5 flex flex-col ">
          {product ? (
            <div className="w-full h-full flex justify-center items-center">
              <span>No products available.</span>
            </div>
          ) : (
            <div className="w-2/3 h-auto m-14">



            </div>
          )}
        </div>
        <div className="min-h-72 w-1/3 bg-white m-5">
          <div className="h-1/5 w-auto bg-gray-200 m-2 flex justify-around items-center">
            <p>Price Details:</p>
          </div>
          <div className="h-6/5 w-auto bg-gray-200 m-2 flex flex-col justify-center items-start ">
            <h1>Price :</h1>
            <h1>Discount :</h1>
            <h1>Delivery Charges :</h1>
          </div>

          <div className="h-1/5 w-auto bg-gray-200 m-2 flex justify-around items-center">
            <h1 className="text-left">Total Amount</h1>
            <h2 className="text-right">hi</h2>
          </div>

          <div className="h-1/5 w-auto bg-gray-200 m-2 flex justify-around items-center">
            <p className="text-left text-green-600 w-auto">You will save Rs. on this order</p>
            <p className="text-right w-auto">5000</p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
