import React, { useState } from "react";
// from react-icon
import { SiTailwindcss } from "react-icons/si";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function InputCard3() {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full relative py-10 bg-white mt-5 rounded-md border border-gray-400 flex flex-col justify-center items-center">
       <button
        onClick={() => setShow((show) => !show)}
        className="ab absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-se-md  capitalize bg-blue-700 text-white hover:bg-blue-400   z-50"
      >
        {!show ? "code" : "preview"}
      </button>
      <div
        className={
          show
            ? "w-full absolute top-0 left-0 h-full overflow-scroll rounded-md z-10 bg-black"
            : "hidden"
        }
      >
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {`
        import React, { useState } from "react";
        // from react-icon
        import { SiTailwindcss } from "react-icons/si";
        // for image import
        import user from "../user.jpg";
        i
        
        function SignUpForm() {
         
          return (
            <div className="w-full grid place-items-center bg-white h-fit py-10 p-2 my-5 relative rounded-md">
              <button onClick={()=>setShow(show => !show)} className="ab absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-se-md  capitalize bg-blue-700 text-white hover:bg-blue-400   z-50">{!show ? "code":"preview"}</button>
              <div className={show ? "w-full absolute top-0 left-0 h-full overflow-scroll rounded-md z-10 bg-black" : "hidden"}>
              
              </div>
              <div className="w-full mt-5 h-fit grid grid-cols-1 xsm:grid-cols-1 md; md:grid-cols-2 bg-white rounded-md border border-gray-400 md:w-full">
                <img src={user} alt="hero" className="w-full h-[200px] md:h-full " />
                <div className="w-full h-full flex flex-col p-4 xsm:p-8 sm:p-16 md:p-8">
                  <SiTailwindcss className="text-3xl xsm:text-4xl text-left font-bold text-violet-700" />
                  <p className="mt-5 text-left text-xl  font-bold leading-9 tracking-tight text-gray-900 xsm:text-lg md:text-2xl">
                    Sign in to your account
                  </p>
                  <p className="text-left my-2 text-gray-800 text-sm">
                    Not a member?{" "}
                    <span className="text-violet-600">Start a 14 day free trial</span>
                  </p>
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label
                        htmlFor="email1"
                        className="block w-full text-left text-sm xsm:text-base font-medium leading-6 text-gray-900"
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
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xsm:text-sm xsm:p-1.5 sm:text-base sm:p-2"
                        />
                      </div>
                    </div>
        
                    <div>
                      <label
                        htmlFor="password1"
                        className="block text-sm xsm:text-base text-left font-medium leading-6 text-gray-900"
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
                          className="block w-full rounded-md outline-none border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xsm:text-sm xsm:p-1.5 sm:text-base sm:p-2"
                        />
                      </div>
                      <div className="flex items-center justify-between py-5">
                        <p className="xsm:text-xs md:text-sm">
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="f focus-within:ring-2 focus-within:ring-violet-500 focus-within:ring-offset-1 rounded-md text-sm"
                          />{" "}
                          Remember me
                        </p>
                        <div className="text-sm">
                          <a
                            href="/#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500 xsm:text-xs md:text-sm"
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
              </div>
            </div>
          );
        }
        
        export default SignUpForm;
        
         
        `}
        </SyntaxHighlighter>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <SiTailwindcss className="text-4xl w-full text-center font-bold text-violet-700" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="fname"
              className="block w-full text-left text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="fname"
                name="fname"
                type="text"
                autoComplete="full name"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="number"
              className="block w-full text-left text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="number"
                name="number"
                type="text"
                autoComplete="number"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Address"
              className="block w-full text-left text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                id="Address"
                name="address"
                type="text"
                autoComplete="Address"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email2"
              className="block w-full text-left text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email2"
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
              htmlFor="pwd"
              className="block w-full text-left text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="pwd"
                name="pwd"
                type="password"
                autoComplete="password"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <a
            href="/#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            SignIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default InputCard3;
