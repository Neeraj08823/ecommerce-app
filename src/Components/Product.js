import React from "react";
import { ProductData } from "./Data";

function Product() {
  return (
    <div className="Product">
      <div class="container my-12 mx-5 px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {ProductData &&
            ProductData.map((e) => (
              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 mt-10 lg:px-4 lg:w-1/3">
                <article class="overflow-hidden rounded-lg shadow-lg">
                  <div className="flex justify-center items-center overflow-hidden">
                    <img
                      alt="Placeholder"
                      class="block h-40 w-40"
                      src={e.image}
                    />
                  </div>

                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <a
                        class="no-underline hover:underline text-black"
                        href="/"
                      >
                        {e.title}
                      </a>
                    </h1>
                    <p class="text-grey-darker text-sm">₹{e.price}</p>
                  </header>

                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <div class="flex items-center text-black">
                      <p class="ml-2 text-sm truncate  overflow-hidden ...">
                        {e.description}
                      </p>
                    </div>
                  </footer>
                  <div className="flex space-x-2 justify-center">
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      class="inline-block px-6 py-2.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Add to Cart
                    </button>
                  </div>
                </article>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Product;
