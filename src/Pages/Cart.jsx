import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Carts = ({ carts, increment, decrement, deletProduct }) => {
  let total = 0;

  if (carts.length > 0) {
    return (
      <div>
        <div className="bg-gray-100 h-fit py-5">
          <div className="container mx-16 px-1">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div className="flex flex-col md:flex-row gap-3">
              <div>
                {" "}
                {carts.map((ele, ind) => (
                  <div key={ind} className="md:w-full">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="text-left font-semibold">Product</th>
                            <th className="text-left font-semibold px-5">
                              Price
                            </th>
                            <th className="text-left font-semibold">
                              Quantity
                            </th>
                            <th className="text-left font-semibold">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-4">
                              <div className="flex items-center">
                                <img
                                  className="h-16 w-16 mr-4"
                                  src={ele.image}
                                  alt="Product image"
                                />
                                <span className="font-semibold ">
                                  {ele.title}
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-5 font-bold text-orange-400">
                              ${ele.price}
                            </td>
                            <td className="py-4">
                              <div className="flex items-center">
                                <button
                                  onClick={() => decrement(ele)}
                                  className="border rounded-md py-2 px-4 mr-2"
                                >
                                  -
                                </button>
                                <span className="text-center w-8">
                                  {ele.item}
                                </span>
                                <button
                                  onClick={() => increment(ele)}
                                  className="border rounded-md py-2 px-4 ml-2"
                                >
                                  +
                                </button>
                                <button
                                  onClick={() => deletProduct(ele)}
                                  className="text-red-500 font-bold rounded-md py-2 px-4 ml-2"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                            <td className="py-4">
                              ${Math.ceil(ele.price * ele.item)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:w-72">
                <div className="bg-white rounded-lg shadow-md p-5">
                  <h2 className="text-lg font-semibold mb-4">Summary</h2>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>
                      {
                        (total = carts
                          .map((ele) => ele.price * ele.item)
                          .reduce((one, tow) => Math.ceil(one + tow)))
                      }
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Taxes</span>
                    <span>$1.99</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>$0.00</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">
                      ${Math.ceil(1.99 + total)}
                    </span>
                  </div>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-screen flex flex-col items-center mt-32 ">
        <h1 className="text-red-800 font-bold text-4xl capitalize mb-16">
          cart is empty
        </h1>
        <Link to="/Products">
          <Button
            variant="text"
            className="flex items-center gap-2 font-bold w-52  text-xl bg-amber-400 capitalize "
          >
            shop now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </div>
    );
  }
};

export default Carts;
