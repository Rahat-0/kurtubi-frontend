import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import AboutNav from "./AboutNav";
import AcademicsNav from "./AcademicsNav";
import AdmissionNav from "./AdmissionNav";
import CampusNav from "./CampusNav";
import tokenHandler from "../utils/tokenHandler";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { doRefresh } from "../../features/RefreshSlice";
import PopUpConfirm from "../layouts/PopupConfirm";
import "./navber.css";
import rootapi from "../../rootAPI";
import { translateAction } from "../../features/translate/translateSlice";
import languageNav from './language.navber.json'
const Navber = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { refresh } = useSelector((state) => state.refresh)
  const { language } = useSelector((state) => state.translate.language)
  // const changelg = language === "EN" 
  const type = language || "EN"
  const [logoutConfirmShow, setLogoutConfirmShow] = useState(false)
  const [visible, setVisible] = useState({
    dropdown: false,
    user: false,
    isAdmin: false,
    active: false,
    image: null
  })

  // language localization func start from here
  const [langu, setLangu] = useState('')

  const changeLanguageHanlder = (e) => {
    const lang = e.target.value
    setLangu(lang)
    localStorage.setItem('language', lang)
  }

  useEffect(() => {
    const lang = localStorage.getItem('language')
    dispatch(translateAction({ language: lang }))

  }, [langu])


  useEffect(() => {
    tokenCheck()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])

  const tokenCheck = async () => {
    try {
      const { error, exp, admin_id } = await tokenHandler()
      let user = localStorage.getItem('user')
      let image = user && JSON.parse(user).image
      
      

      if (error === 'Network Error') {
        console.log(error);
        setVisible({ ...visible, active: true, image })
        admin_id && setVisible({ ...visible, active: true, image, isAdmin: true })
        return
      }
      if (error && (error !== 'Network Error')) {
        return setVisible({ ...visible, active: false })
      }

      if (!error && exp) {
        setVisible({ ...visible, active: true, image })
        admin_id && setVisible({ ...visible, active: true, image, isAdmin: true })
      }

    } catch (error) {
      if (error.message === 'Network Error') {
        console.log(error);
        setVisible({ ...visible, active: true })
      } else {
        setVisible({ ...visible, active: false, isAdmin: false })
      }
    }
  }

  // user logout handler start here 
  const handleLogout = () => {
    setVisible({ ...visible, active: false, isAdmin: false })
    Cookies.remove('accesstoken')
    Cookies.remove('refreshtoken')
    dispatch(doRefresh())
    navigate('/')
  }

  const PopupData = {
    message: languageNav[type].popupMsg,
    btn: languageNav[type].popupbtn,
    action: handleLogout,
    isShow: logoutConfirmShow
  }

  return (
    <div>
      <nav className="fixed w-full z-50 bg-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <PopUpConfirm state={[0, 0]} data={PopupData} />
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="kcm" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {languageNav[type].logoName}
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 sm:px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {languageNav[type].apply}
            </button>

            {/* dropdown start */}

            {visible.active ?
              <div className=" flex items-center ml-1 md:ml-3 relative">
                <div>
                  <div
                    onClick={() => setVisible({ ...visible, user: !visible.user })}
                    className=" text-gray-200 cursor-pointer">
                    <div className="bg-gray-800 flex text-sm rounded-full  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full "
                        src={`${rootapi}/images/${visible.image}`}
                        alt=""
                      />
                    </div>
                  </div>

                  <div onClick={() => setVisible({ ...visible, user: false })} className={`${visible.user ? 'translate-x-0' : 'translate-x-96'} user-option transform transition-all `}>
                    <div className="origin-top-right absolute right-0 mt-2 w-48  rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {visible.isAdmin ?
                        <>
                          <div>
                            <Link
                              to="/0/dashboard"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                            >
                              {languageNav[type].dashboard}
                            </Link>

                          </div>
                        </>
                        : <>
                          <div>
                            <Link
                              to="/auth/user"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                            >
                              {languageNav[type].profile}
                            </Link>

                          </div>
                          <div>

                            <Link
                              to="/user"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                            >
                              {languageNav[type].settings}
                            </Link>

                          </div>
                        </>}

                      <div>

                        <p
                          onClick={() => setLogoutConfirmShow({ isShow: true })}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                        >
                          {languageNav[type].logout}
                        </p>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              :
              <Link

                onDoubleClick={() => navigate('/admin')}
                to='/login'
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 ml-1 md:ml-3 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2 sm:px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {languageNav[type].login}
              </Link>}

            {/* dropdown end */}

            {/* mobile toggle button start from here  */}
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                onClick={() => setVisible({ ...visible, dropdown: !visible.dropdown })}
                className={` ${visible.dropdown && 'hidden'} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                onClick={() => setVisible({ ...visible, dropdown: !visible.dropdown })}
                className={` ${!visible.dropdown && 'hidden'} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {/* mobile toggle button end here  */}
          </div>

          <div className={`  ${!visible.dropdown && '-mt-96'} md:mt-0 transform transition-all justify-between items-center w-full md:flex md:w-auto md:order-1`}
            id="mobile-menu-4"
          >
            <ul onTouchMove={() => setVisible({ ...visible, dropdown: false })} className=" md:flex flex-col relative mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li className="nav-hover ">
                <a
                  href="##"
                  className="font-bold nav-hover block py-2 pr-4 pl-3 focus:text-red-700  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {languageNav[type].admission}
                </a>
                <div className=" nav-hover-item hidden absolute top-4  pt-6  h-auto  bg-gray-200 shadow-md ">
                  <AdmissionNav />
                </div>
              </li>

              <li className="nav-hover">
                <a
                  href="##"
                  className="font-bold nav-hover block py-2 pr-4 pl-3 focus:text-red-700  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {languageNav[type].academics}
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
                  {languageNav[type].campus}
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
                  {languageNav[type].about}
                </a>
                <div className=" nav-hover-item hidden absolute top-4  pt-6  h-auto  bg-gray-200 shadow-md ">
                  <AboutNav />
                </div>

              </li>
              <li className="nav-hover">
                {/* <button
                  onClick={changeLanguageHanlder}
                  className="font-bold w-full text-left nav-hover block py-2 pr-4  focus:text-red-700 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  (English)
                </button> */}

                <select value={localStorage.getItem('language')} className="font-bold w-full text-left nav-hover bg-transparent outline-none block py-2 pr-4  focus:text-red-700 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onChange={changeLanguageHanlder}>
                  <option value="EN">English</option>
                  <option value="BN" >বাংলা</option>
                </select>

                {/* <button
                  onClick={changeLanguageHanlder}
                  className="font-bold w-full text-left nav-hover block py-2 pr-4  focus:text-red-700 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  (English)
                </button> */}

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
