import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import shopping from "../assets/shopping-bag-cart.jpg";
const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${shopping})` }}
      className="flex flex-col justify-between items-start w-full h-[32rem]  bg-cover bg-right"
    >
      <h1 className=" text-6xl font-semibold mx-5 my-4 capitalize text-blue-gray-900">
        welcome to our shop
      </h1>
      <Link to="/Products">
        <Button
          variant="text"
          className="flex items-center gap-2 font-bold w-52 mb-16 ms-5 text-xl bg-amber-400 capitalize "
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
};

export default Home;
