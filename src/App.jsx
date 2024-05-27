import React, { useEffect, useState } from "react";
import { NavbarSimple } from "./component/navbar";
import Products from "./Pages/Products";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Carts from "./Pages/Cart";
import PageError from "./Pages/PageError";
import axios from "axios";
import MainProducts from "./Pages/MainProducts";

function App() {
  const [handleError, setError] = useState(false);
  const [products, setProducts] = useState([]);

  const [carts, setCarts] = useState([]);

  const getProducts = () => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((info) => setProducts(info.data))
      .catch((err) => {
        if (err.name == "AxiosError") {
          setError(true);
        }
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (pro) => {
    let check = carts.some((products) => products.id == pro.id);

    if (check) {
      increment(pro);
    } else {
      products.filter((ele) => ele.id == products.id);

      pro = { ...pro, item: 1 };

      setCarts([...carts, pro]);
    }
  };

  const increment = (cart) => {
    let newCarts = carts.map((ele) => {
      if (cart.id == ele.id) {
        ele.item = ele.item + 1;
      }
      return ele;
    });
    setCarts(newCarts);
  };

  const decrement = (cart) => {
    let newCarts = carts.map((ele) => {
      if (cart.id == ele.id && ele.item > 1) {
        ele.item = ele.item - 1;
      }
      return ele;
    });

    setCarts(newCarts);
  };

  const deletProduct = (cart) => {
    let newCart = carts.filter((ele) => ele.id !== cart.id);

    setCarts(newCart);
  };

  if (handleError == true) {
    return (
      <div>
        <div>
          <section className="flex items-center  dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-5">
              <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                  <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">
                  Sorry, we couldn't find this page.
                </p>
                <p className="mt-4 mb-8 dark:text-gray-600">
                  But dont worry, you can find plenty of other things on our
                  homepage.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-amber-200">
        <NavbarSimple />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<MainProducts products={products} addToCart={addToCart} />}
          />
          <Route
            path="/carts"
            element={
              <Carts
                carts={carts}
                decrement={decrement}
                increment={increment}
                deletProduct={deletProduct}
              />
            }
          />
          <Route path="/*" element={<PageError />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default App;
