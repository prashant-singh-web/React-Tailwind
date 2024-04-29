import React from 'react'
import { NavLink } from 'react-router-dom'
import TestProduct from './TestProduct'
import ProductDetails1 from './ProductDetails1'
import ProductDetails2 from './ProductDetails2'

function ProductInfo() {
  return (
    <div className="w-full flex flex-col justify-center p-10 dark:bg-[#111827] bg-white xsm:p-2 md:p-5 lg:p-10">
      <p className=" text-left my-1 text-sm font-semibold text-gray-600">
        <NavLink to="/" className="mr-3 hover:text-blue-700">
          Home
        </NavLink>
        / Product Info
      </p>
      <p className="text-left  my-1 font-sans text-3xl font-bold dark:text-gray-400">
        Product Information
      </p>
      <ProductDetails1/>
      <ProductDetails2/>
     <TestProduct/>
    </div>
  )
}

export default ProductInfo