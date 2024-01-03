import React, { useState } from "react";
// from react-icon
import { SiTailwindcss } from "react-icons/si";
import {  Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function InputCard1() {
  const [show, setShow] = useState(false)
  return (
    <div className="w-full h-fit py-10 bg-white rounded-md border border-gray-400 flex flex-col justify-center items-center  relative">
      <button onClick={()=>setShow(show => !show)} className="ab absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-se-md  capitalize bg-blue-700 text-white hover:bg-blue-400   z-50">{!show ? "code":"preview"}</button>
      <div className={show ? "w-full absolute top-0 left-0 h-full overflow-scroll rounded-md z-10 bg-black" : "hidden"}>
      <SyntaxHighlighter language="javascript" style={oneDark} >
        {`
         import React, { useState } from "react";
         // from react-icon
         import { SiTailwindcss } from "react-icons/si";
         
         
         function UserLogin() {
           
           return (
             <div className="w-full h-fit py-10 bg-white rounded-md border border-gray-400 flex flex-col justify-center items-center relative">
               
               
           <div className="sm:mx-auto xsm:mx-auto sm:w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
             <SiTailwindcss className="text-4xl w-full text-center font-bold text-violet-700" />
             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 xsm:text-lg sm:text-xl md:text-2xl lg:text-3xl">
               Sign in to your account
             </h2>
           </div>
         
           <div className="mt-10 w-full xsm:mt-5 xsm:w-[70%] sm:mx-auto sm:w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
             <form className="space-y-6" action="#" method="POST">
               <div>
                 <label
                   htmlFor="email"
                   className="block w-full text-left text-xs font-medium leading-6 text-gray-900 xsm:text-sm sm:text-base md:text-lg lg:text-xl"
                 >
                   Email address
                 </label>
                 <div className="mt-2">
                   <input
                     id="email"
                     name="email"
                     type="email"
                     autoComplete="email"
                     required
                     className="block w-full rounded-md border-0 p-1.5 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xsm:text-sm xsm:p-1.5 sm:text-base sm:p-2 md:text-lg md:p-2.5 lg:text-xl lg:p-3"
                   />
                 </div>
               </div>
         
               <div>
                 <div className="flex items-center justify-between">
                   <label
                     htmlFor="password"
                     className="block text-sm font-medium leading-6 text-gray-900 xsm:text-sm sm:text-base md:text-lg lg:text-xl"
                   >
                     Password
                   </label>
                   <div className="text-sm">
                     <a
                       href="/#"
                       className="font-semibold text-indigo-600 hover:text-indigo-500 xsm:text-sm sm:text-base md:text-lg lg:text-xl"
                     >
                       Forgot password?
                     </a>
                   </div>
                 </div>
                 <div className="mt-2">
                   <input
                     id="password"
                     name="password"
                     type="password"
                     autoComplete="current-password"
                     required
                     className="block w-full rounded-md outline-none border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xsm:text-sm xsm:p-1.5 sm:text-base sm:p-2 md:text-lg md:p-2.5 lg:text-xl lg:p-3"
                   />
                 </div>
               </div>
         
               <div>
                 <button
                   type="submit"
                   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 xsm:text-sm xsm:p-1.5 sm:text-base sm:p-2 md:text-lg md:p-2.5 lg:text-xl lg:p-3"
                 >
                   Sign in
                 </button>
               </div>
             </form>
         
             <p className="mt-10 text-center text-sm text-gray-500 xsm:text-sm sm:text-base md:text-lg lg:text-xl">
               Not a member?{" "}
               <a
                 href="/#"
                 className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 xsm:text-sm sm:text-base md:text-lg lg:text-xl"
               >
                 Start a 14 day free trial
               </a>
             </p>
           </div>
         </div>
         
           );
         }
         
         export default UserLogin;
         
        `}
      </SyntaxHighlighter>
      </div>
  <div className="sm:mx-auto xsm:mx-auto sm:w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
    <SiTailwindcss className="text-4xl w-full text-center font-bold text-violet-700" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 xsm:text-lg sm:text-xl md:text-2xl lg:text-3xl">
      Sign in to your account
    </h2>
  </div>

  <div className="mt-10 w-full xsm:mt-5 xsm:w-[70%] sm:mx-auto sm:w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label
          htmlFor="email"
          className="block w-full text-left text-xs font-medium leading-6 text-gray-900 xsm:text-sm sm:text-base md:text-lg lg:text-xl"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xsm:text-sm xsm:p-1.5 sm:text-base sm:p-2 md:text-lg md:p-2 lg:text-xl lg:p-2"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900 xsm:text-sm sm:text-base md:text-lg lg:text-xl"
          >
            Password
          </label>
          <div className="text-sm">
            <a
              href="/#"
              className="font-semibold text-indigo-600 hover:text-indigo-500 xsm:text-sm sm:text-base md:text-lg lg:text-xl"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md outline-none border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 xsm:text-sm xsm:p-1.5 sm:text-base sm:p-2 md:text-lg md:p-2 lg:text-xl lg:p-2"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 xsm:text-sm xsm:p-1.5 sm:text-base sm:p-2 md:text-lg md:p-2 lg:text-xl lg:p-2"
        >
          Sign in
        </button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500 xsm:text-sm sm:text-base md:text-lg lg:text-xl">
      Not a member?{" "}
      <a
        href="/#"
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 xsm:text-sm sm:text-base md:text-lg lg:text-xl"
      >
        Start a 14 day free trial
      </a>
    </p>
  </div>
</div>

  );
}

export default InputCard1;
