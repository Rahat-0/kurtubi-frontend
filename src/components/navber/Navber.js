import React, { useState } from "react";
import logo from "../../assets/image/logo.png";
import AboutNav from "./AboutNav";
import AcademicsNav from "./AcademicsNav";
import AdmissionNav from "./AdmissionNav";
import CampusNav from "./CampusNav";
import "./navber.css";
const Navber = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <nav className="fixed w-full z-50 bg-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Kurtubi
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Apply Now
            </button>
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                onClick={()=> setVisible(!visible)}
                className={` ${visible && 'hidden'} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                onClick={()=> setVisible(!visible)}
                className={` ${!visible && 'hidden'} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            
            className={ `  ${!visible && '-mt-96' } md:mt-0 transform transition-all justify-between items-center w-full md:flex md:w-auto md:order-1`}
            id="mobile-menu-4"
          >
            <ul onClick={()=> setVisible(false)} className=" md:flex flex-col relative mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li className="nav-hover ">
                <a
                  href="##"
                  class="font-bold nav-hover block py-2 pr-4 pl-3 focus:text-red-700  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Admission
                </a>
                <div className=" nav-hover-item hidden absolute top-4  pt-6  h-auto  bg-gray-200 shadow-md ">
                  <AdmissionNav />
                </div>
              </li>

              <li className="nav-hover">
                <a
                  href="##"
                  class="font-bold nav-hover block py-2 pr-4 pl-3 focus:text-red-700  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Academics
                </a>
                <div className=" nav-hover-item hidden absolute top-4  pt-6  h-auto  bg-gray-200 shadow-md">
                  <AcademicsNav />
                </div>
              </li>
              <li className="nav-hover">
                <a
                  href="##"
                  className="font-bold nav-hover block py-2 pr-4  focus:text-red-700 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Campus
                </a>
                <div className=" nav-hover-item hidden absolute top-4  pt-6 h-auto  bg-gray-200 shadow-md">
                  <CampusNav />
                </div>
              </li>
              <li className="nav-hover">
                <a
                  href="##"
                  className="font-bold nav-hover block py-2 pr-4  focus:text-red-700 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
                <div className=" nav-hover-item hidden absolute top-4  pt-6  h-auto  bg-gray-200 shadow-md ">
                  <AboutNav />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="md:bg-red-600 pt-14"></div>
    </div>
  );
};

export default Navber;
