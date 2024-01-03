import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";



function About() {
  return (
    <div className="w-full bg-white dark:bg-[#111827] dark:text-white flex flex-col items-center pb-9">
      <div className="w-full min-h-[100vh] flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold text-black dark:text-gray-200 mb-10">
          Build website rapidly using{" "}
          <span className="font-bold text-4xl text-blue-700">
            React-Tailwind !
          </span>
        </p>
        <p className="w-[80%] text-left text-base mt-4 font-medium text-gray-600">
          Welcome to <span className="text-blue-700 font-semibold">React-Tailwind</span>, your one-stop solution for pre-built React
          components styled with Tailwind CSS and SCSS. Our website offers a
          wide range of components, including Cards, Home, Navbar, Bottom, and
          many more, all ready to be used in your next React or Next project.{" "}
          <br />
        </p>
      </div>
      <div className="w-[80%] flex justify-center flex-col">
        <p className="text-2xl font-bold my-4 dark:text-gray-400">why React-Tailwind</p>
        <p className="text-sm font-medium text-left">
          Our components are designed with a focus on usability, performance,
          and customization. They are built using React, a popular JavaScript
          library for building user interfaces, and styled using Tailwind CSS, a
          utility-first CSS framework, and SCSS, a preprocessor scripting
          language that is interpreted or compiled into CSS. <br />
          Whether you’re a seasoned developer looking to speed up your
          development process, or a beginner seeking to learn and use
          professionally designed components, React-Tailwind is the place for
          you. Explore our extensive library of components and elevate your
          React applications to new heights.{" "}
        </p>
        <p className="text-xl font-semibold my-5 dark:text-gray-400">
          Here is some features about <span>react-tailwind</span>
        </p>
        <div className="w-full grid grid-cols-2 gap-8 xsm:grid-cols-1 md:grid-cols-2 ">
          <div className="w-full flex flex-col hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <h1 className="text-lg font-semibold">Responsive</h1>
            <p className="text-sm text-gray-700 dark:text-gray-500">
              {" "}
              Our component is built to look great on all screen sizes, from
              mobile devices to large desktop screens.{" "}
            </p>
          </div>
          <div className="w-full flex flex-col hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <h1 className="text-lg font-semibold">Interactive</h1>
            <p className="text-sm text-gray-700 dark:text-gray-500">
              The Card component supports interactive elements like buttons and
              links. You can add click events to make your cards more dynamic.{" "}
            </p>
          </div>
          <div className="w-full flex flex-col hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <h1 className="text-lg font-semibold">Modular</h1>
            <p className="text-sm text-gray-700 dark:text-gray-500">
              Our components are designed to be modular and reusable across
              different projects. This helps in maintaining a consistent design
              language and speeds up the development process.
            </p>
          </div>
          <div className="w-full flex flex-col hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <h1 className="text-lg font-semibold">Easy Integration</h1>
            <p className="text-sm text-gray-700 dark:text-gray-500">
              React-Tailwind components can be easily integrated into existing
              projects. They are compatible with most modern front-end
              frameworks and libraries.
            </p>
          </div>
          <div className="w-full flex flex-col hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <h1 className="text-lg font-semibold">Customizable</h1>
            <p className="text-sm text-gray-700 dark:text-gray-500">
              {" "}
              With Tailwind CSS and SCSS, you can easily customize the Card
              component to match your project’s design requirements. You can
              change the colors, fonts, spacing, and more.{" "}
            </p>
          </div>
          <div className="w-full flex flex-col hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <h1 className="text-lg font-semibold">Accessible</h1>
            <p className="text-sm text-gray-700 dark:text-gray-500">
              {" "}
              We’ve designed our Card component with accessibility in mind. It
              supports keyboard navigation and screen readers, ensuring that
              your website is accessible to all users.{" "}
            </p>
          </div>
        </div>
        <p className="text-xl font-semibold my-5 dark:text-gray-400">
          Technology use in <span className="text-blue-700">react-tailwind</span>
        </p>
        <div className="w-full grid grid-cols-2 gap-8 xsm:grid-cols-1 md:grid-cols-4 ">
          <div className="group w-full flex flex-col  hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <FaReact className="text-7xl font-bold duration-200 ease-linear text-gray-700 mx-auto dark:text-gray-400 group-hover:text-cyan-600 group-hover:scale-125" />
            <h1 className="text-lg font-semibold mx-auto text-gray-500 ">
              React
            </h1>
          </div>
          <div className="group w-full flex flex-col  hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <FaReact className="text-7xl font-bold duration-200 ease-linear text-gray-700 mx-auto dark:text-gray-400 group-hover:text-pink-600 group-hover:scale-125" />
            <h1 className="text-lg font-semibold mx-auto text-gray-500 ">
              React-icons
            </h1>
          </div>
          <div className="group w-full flex flex-col  hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <SiTailwindcss className="text-7xl font-bold duration-200 ease-linear text-gray-700 mx-auto dark:text-gray-400 group-hover:text-cyan-700 group-hover:scale-125" />
            <h1 className="text-lg font-semibold mx-auto text-gray-500 ">
              Tailwind CSS
            </h1>
          </div>
          <div className="group w-full flex flex-col  hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <BsFiletypeScss className="text-7xl font-bold duration-200 ease-linear text-gray-700 dark:text-gray-400 mx-auto group-hover:text-red-700 group-hover:scale-110" />
            <h1 className="text-lg font-semibold mx-auto text-gray-500 ">
              SCSS
            </h1>
          </div>
        </div>
        <p className="text-xl font-semibold mt-5 mb-2 dark:text-gray-400">
        Prerequisites for Using  <span className="text-blue-700">react-tailwind</span>
        </p>
        <p className="text-sm font-semibold mb-5 dark:text-gray-400">
        Before using React-Tailwind, the following packages should be installed:
        </p>
        <div className="w-full grid grid-cols-2 gap-8 xsm:grid-cols-1 md:grid-cols-4 ">
          <div className="group w-full flex flex-col  hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <FaReact className="text-7xl font-bold duration-200 ease-linear text-gray-700 mx-auto dark:text-gray-400 group-hover:text-cyan-600 group-hover:scale-125" />
            <h1 className="text-lg font-semibold mx-auto text-gray-500 ">
              React
            </h1>
          </div>
          <div className="group w-full flex flex-col  hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <FaReact className="text-7xl font-bold duration-200 ease-linear text-gray-700 mx-auto dark:text-gray-400 group-hover:text-pink-600 group-hover:scale-125" />
            <h1 className="text-lg font-semibold mx-auto text-gray-500 ">
              React-icons
            </h1>
          </div>
          <div className="group w-full flex flex-col  hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <SiTailwindcss className="text-7xl font-bold duration-200 ease-linear text-gray-700 mx-auto dark:text-gray-400 group-hover:text-cyan-700 group-hover:scale-125" />
            <h1 className="text-lg font-semibold mx-auto text-gray-500 ">
              Tailwind CSS
            </h1>
          </div>
          <div className="group w-full flex flex-col  hover:bg-white bg-gray-100 dark:bg-white/5 dark:hover:bg-white/0 dark:border-gray-600 dark:hover:border-gray-300 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <FaReact className="text-7xl font-bold duration-200 ease-linear text-gray-700 dark:text-gray-400 mx-auto group-hover:text-red-700 group-hover:scale-110" />
            <h1 className="text-lg font-semibold mx-auto text-gray-500 ">
              React RouterDom
            </h1>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default About;
