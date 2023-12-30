import React from "react";

function About() {
  return (
    <div className="w-full bg-white overflow-y-scroll flex flex-col items-center pb-9">
      <div className="w-full min-h-[100vh] flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold text-black mb-10">
          Build website rapidly using{" "}
          <span className="font-bold text-4xl text-violet-700">
            React-Tailwind !
          </span>
        </p>
        <p className="w-[80%] text-left text-base mt-4 font-medium text-gray-600">
          Welcome to React-Tailwind, your one-stop solution for pre-built React
          components styled with Tailwind CSS and SCSS. Our website offers a
          wide range of components, including Cards, Home, Navbar, Bottom, and
          many more, all ready to be used in your next React or Next project.{" "}
          <br />
        </p>
      </div>
      <div className="w-[80%] flex justify-center flex-col">
        <p className="text-2xl font-bold my-4">why React-Tailwind</p>
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
        <p className="text-xl font-semibold my-5">
          Here is some features about <span>react-tailwind</span>
        </p>
        <div className="w-full grid grid-cols-2 gap-8 ">
          <div className="w-full flex flex-col hover:bg-white bg-gray-100 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <h1 className="text-lg font-semibold">Responsive</h1>
            <p className="text-sm text-gray-700">
              {" "}
              Our component is built to look great on all screen sizes, from
              mobile devices to large desktop screens.{" "}
            </p>
          </div>
          <div className="w-full flex flex-col hover:bg-white bg-gray-100 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <h1 className="text-lg font-semibold">Interactive</h1>
            <p className="text-sm text-gray-700">
              The Card component supports interactive elements like buttons and
              links. You can add click events to make your cards more dynamic.{" "}
            </p>
          </div>
          <div className="w-full flex flex-col hover:bg-white bg-gray-100 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <h1 className="text-lg font-semibold">Modular</h1>
            <p className="text-sm text-gray-700">
              Our components are designed to be modular and reusable across
              different projects. This helps in maintaining a consistent design
              language and speeds up the development process.
            </p>
          </div>
          <div className="w-full flex flex-col hover:bg-white bg-gray-100 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <h1 className="text-lg font-semibold">Easy Integration</h1>
            <p className="text-sm text-gray-700">
              React-Tailwind components can be easily integrated into existing
              projects. They are compatible with most modern front-end
              frameworks and libraries.
            </p>
          </div>
          <div className="w-full flex flex-col hover:bg-white bg-gray-100 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <h1 className="text-lg font-semibold">Customizable</h1>
            <p className="text-sm text-gray-700">
              {" "}
              With Tailwind CSS and SCSS, you can easily customize the Card
              component to match your project’s design requirements. You can
              change the colors, fonts, spacing, and more.{" "}
            </p>
          </div>
          <div className="w-full flex flex-col hover:bg-white bg-gray-100 hover:shadow-md duration-200 ease-linear cursor-pointer text-left p-4 border rounded-md">
            <h1 className="text-lg font-semibold">Accessible</h1>
            <p className="text-sm text-gray-700">
              {" "}
              We’ve designed our Card component with accessibility in mind. It
              supports keyboard navigation and screen readers, ensuring that
              your website is accessible to all users.{" "}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
