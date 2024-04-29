import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ProductDetails1() {
  const [codeShow, setCodeShow] = useState(false);
  return (
    <div className="w-full  my-5 flex flex-col ">
      <div className="w-full flex flex-row justify-between">
        <p className="text-lg font-medium font-sans dark:text-gray-200 ">
          Simple Product Description
        </p>
        <div className="flex flex-row bg-gray-100 rounded-md">
          <button
            onClick={() => setCodeShow(false)}
            className={
              !codeShow
                ? " bg-white  rounded-md text-sm font-medium p-1 flex flex-row justify-center items-center border-black border-[1.5px] ring ring-white shadow-md"
                : "  p-1 px-2 text-sm font-semibold flex flex-row justify-center items-center text-gray-800  "
            }
          >
            <LuEye
              className={
                !codeShow
                  ? "text-base mr-2 text-cyan-700 font-bold"
                  : "text-sm mr-2  font-bold"
              }
            />
            Preview
          </button>
          <button
            onClick={() => setCodeShow(true)}
            className={
              codeShow
                ? " bg-white  rounded-md text-sm font-medium p-1 flex flex-row justify-center items-center border-black border-[1.5px] ring ring-white shadow-md"
                : "  p-1 px-2 text-sm font-semibold flex flex-row justify-center items-center text-gray-800  "
            }
          >
            <IoIosCode
              className={
                codeShow
                  ? "text-base mr-2 text-cyan-700 font-bold"
                  : "text-sm mr-2  font-bold"
              }
            />
            Code
          </button>
        </div>
      </div>
      <div className="w-full h-fit mt-5 rounded-md  bg-white dark:bg-[#111827] relative">
        <div
          className={codeShow ? "absolute inset-0 z-20 h-full overflow-scroll" : "hidden"}
        >
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {`
import React from "react";


function ProductDetail() {

return (
    <div class="flex flex-col md:flex-row font-sans w-full rounded-md overflow-hidden border shadow-md">
  <div class="flex-none md:w-72 aspect-square md:aspect-auto relative">
    <img src="/jacket.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-col mr-auto text-left">
      <h1 class=" text-lg font-semibold text-slate-900">
        Utility Jacket
      </h1>
      <div class="text-lg font-semibold text-slate-500">
        $110.00
      </div>
      <div class="w-full  text-sm font-medium text-slate-700 mt-2">
        In stock
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-2 flex text-sm">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XL
          </div>
        </label>
      </div>
    </div>
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 dark:text-gray-500/90" type="button">
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class=" text-xs md:text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>
);
}

export default ProductDetails;

      `}
          </SyntaxHighlighter>
        </div>
        <div class="flex flex-col md:flex-row font-sans w-full rounded-md overflow-hidden border shadow-md ">
          <div class="flex-none md:w-72 aspect-square md:aspect-auto relative">
            <img
              src="/jacket.jpg"
              alt="your img here"
              class="absolute inset-0 z-10 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <form class="flex-auto p-6">
            <div class="flex flex-col mr-auto text-left">
              <h1 class=" text-lg font-semibold text-slate-900">
                Utility Jacket
              </h1>
              <div class="text-lg font-semibold text-slate-500">$110.00</div>
              <div class="w-full  text-sm font-medium text-slate-700 mt-2">
                In stock
              </div>
            </div>
            <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div class="space-x-2 flex text-sm">
                <label>
                  <input
                    class="sr-only peer"
                    name="size"
                    type="radio"
                    value="xs"
                    checked
                  />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    XS
                  </div>
                </label>
                <label>
                  <input
                    class="sr-only peer"
                    name="size"
                    type="radio"
                    value="s"
                  />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    S
                  </div>
                </label>
                <label>
                  <input
                    class="sr-only peer"
                    name="size"
                    type="radio"
                    value="m"
                  />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    M
                  </div>
                </label>
                <label>
                  <input
                    class="sr-only peer"
                    name="size"
                    type="radio"
                    value="l"
                  />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    L
                  </div>
                </label>
                <label>
                  <input
                    class="sr-only peer"
                    name="size"
                    type="radio"
                    value="xl"
                  />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    XL
                  </div>
                </label>
              </div>
            </div>
            <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 mb-6 text-sm font-medium">
              <div class="flex-auto flex space-x-4">
                <button
                  class="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 dark:text-gray-500/90"
                  type="button"
                >
                  Add to bag
                </button>
              </div>
              <button
                class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                type="button"
                aria-label="Like"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
            <p class=" text-xs md:text-sm text-slate-700">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails1;
