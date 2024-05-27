import React from "react";
import { useNavigate } from "react-router-dom";
const PageError = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };
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
              <button
                className="px-8 py-3 font-semibold dark:bg-violet-600 dark:text-gray-50 rounded-2xl bg-deep-orange-500"
                onClick={backHome}
              >
                Back To Home
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PageError;
