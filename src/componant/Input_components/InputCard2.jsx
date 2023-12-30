import React from 'react'
import { SiTailwindcss } from 'react-icons/si'

function InputCard2() {
  return (
    <div className="w-full mt-5 h-fit   grid grid-cols-2 bg-white rounded-md border border-gray-400">
        <div className="w-full h-full flex flex-col  p-16">
          <SiTailwindcss className="text-4xl text-left font-bold text-violet-700" />
          <p className="mt-5 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</p>
          <p className="text-left my-2 text-gray-800 text-sm">Not a member? <span className="text-violet-600">Start a 14 day free trial</span></p>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email1"
                className="block w-full text-left text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email1"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password1"
                className="block text-sm text-left font-medium leading-6 text-gray-900"
              >
                Password
              </label>

              <div className="mt-2">
                <input
                  id="password1"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md outline-none border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center justify-between py-5">
                <p>
                  <input type="checkbox" name="" id="" className="f focus-within:ring-2 focus-within:ring-violet-500 focus-within:ring-offset-1 rounded-md text-sm"/> Remember me
                </p>
                <div className="text-sm">
                  <a
                    href="/#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          
        </div>
        <img src="/user.jpg" alt="hero" className="w-full h-[600px] " />
      </div>
  )
}

export default InputCard2