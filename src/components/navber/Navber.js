import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import AboutNav from "./AboutNav";
import AcademicsNav from "./AcademicsNav";
import AdmissionNav from "./AdmissionNav";
import CampusNav from "./CampusNav";
import "./navber.css";
import tokenHandler from "../utils/tokenHandler";
import { useSelector } from "react-redux";

const Navber = () => {
  const {refresh} = useSelector((state)=>state.refresh)

  const [visible, setVisible] = useState({
    dropdown : false,
    user : false,
    active : false
  })
 
  const check = tokenHandler()

  useEffect(() => {
  check.then(({student_id, teacher_id, error})=>{
    if (error){
      return setVisible({...visible, active : false})
    }
    if(student_id || teacher_id){
      setVisible({...visible, active : true})
    }
  })
  .catch((er)=>{
    console.log(er)
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])
  
  return (
    <div>
      <nav className="fixed w-full z-50 bg-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
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

            {/* dropdown start */}
              
          {visible.active && <div className=" flex items-center ml-1 md:ml-3 relative"> 
                  <div>
                    <div 
                    onClick={()=> setVisible({...visible, user : !visible.user})}
                    className=" text-gray-200 cursor-pointer">
                      <div className="bg-gray-800 flex text-sm rounded-full  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full "
                          src={logo}
                          alt=""
                        />
                      </div>
                    </div>

                    <div onClick={()=>setVisible({...visible, user : false})} className={`${visible.user ? 'translate-x-0' : 'translate-x-96'} user-option transform transition-all `}>
                      <div className="origin-top-right absolute right-0 mt-2 w-48  rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div>
                            <Link
                              to="/auth/user"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                            >
                              Your Profile
                            </Link>
                         
                        </div>
                        <div>
                       
                            <Link
                              to="/user"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                            >
                              Settings
                            </Link>
                       
                        </div>
                        <div>
                 
                            <a 
                              href="##"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                            >
                              Sign out
                            </a>
                      
                        </div>
                      </div>
                    </div>
                  </div>
              
              </div>}

{/* dropdown end */}
           
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                onClick={()=> setVisible({...visible, dropdown : !visible.dropdown})}
                className={` ${visible.dropdown && 'hidden'} w-6 h-6`}
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
                onClick={()=> setVisible({...visible, dropdown : !visible.dropdown})}
                className={` ${!visible.dropdown && 'hidden'} w-6 h-6`}
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
            
            className={ `  ${!visible.dropdown && '-mt-96' } md:mt-0 transform transition-all justify-between items-center w-full md:flex md:w-auto md:order-1`}
            id="mobile-menu-4"
          >
            <ul onClick={()=> setVisible({...visible, dropdown : false})} className=" md:flex flex-col relative mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
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
