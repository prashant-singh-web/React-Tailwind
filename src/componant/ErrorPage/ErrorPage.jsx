import { NavLink } from "react-router-dom"
import ErrorPage1 from "./ErrorPage1"
import ErrorPage2 from "./ErrorPage2"
import TestErrror from "./TestErrror"

function ErrorPage() {
    return (
      <div className='w-full flex flex-col justify-center p-10 dark:bg-[#111827] bg-white  xsm:p-2 md:p-5 lg:p-10'>
          <p className=' text-left my-1 text-sm font-semibold text-gray-600'><NavLink to="/" className="mr-3 hover:text-blue-700">Home</NavLink>/  Buttuns</p>
          <p className='text-left  my-1 font-sans text-3xl font-bold dark:text-gray-400'>ErrorPages</p>
  
        <ErrorPage1/>
        <ErrorPage2/>
        <TestErrror/>
      
        
      </div>
    )
  }
  
  export default ErrorPage