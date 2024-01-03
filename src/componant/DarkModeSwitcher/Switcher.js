import { useState } from "react";
import useDarkSide from "./useDarkSide";





export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
    const [toggle, setToggle] = useState(false)
  
    const toggleDarkMode = checked => {
      setTheme(colorTheme);
      setDarkSide(checked);
      setToggle(toggle => !toggle);
    };
  
    return (
      <>
        <div>
          {/* {
            !toggle ? <BiSolidMoon className="text-xl dark:text-gray-400 cursor-pointer hover:scale-125 ease-in-out duration-300" onClick={toggleDarkMode}/> :<BiSolidSun className="text-xl dark:text-gray-400 cursor-pointer hover:scale-125 ease-in-out duration-300" onClick={toggleDarkMode}/>
          } */}
          <p onClick={toggleDarkMode} className="py-1 w-fit capitalize font-bold px-3 text-gray-700 cursor-pointer text-base hover:text-blue-600 ">{!toggle ? "light" : "dark"}</p>
        </div>
      </>
    );
  }