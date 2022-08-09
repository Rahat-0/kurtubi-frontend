import React from 'react'
import { useState } from 'react'

const Profile = () => {
  const [seeMore, setSeeMore] = useState(false)
  const [addressEdit, setaddressEdit] = useState(false)
  const address = 'fds'

  return (
    <div className="bg-gray-100">
      <h3 className="text-center md:text-left text-3xl p-2 bg-green-200 md:bg-white">Profile</h3>

      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* <!-- Left Side --> */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* <!-- Profile Card --> */}
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img className="h-auto w-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt="" />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Jane Doe</h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">Student</h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit
                amet
                consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
              <ul
                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto"><span
                    className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                </li>
                <li className="flex items-center py-3">
                  <span>Student since</span>
                  <span className="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
            </div>
            {/* <!-- End of profile card --> */}
            <div className="my-4"></div>
          </div>
          {/* <!-- Right Side --> */}
          <div className="w-full md:w-9/12 mx-2 h-64">
            {/* <!-- Profile tab --> */}
            {/* <!-- About Section --> */}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Full Name</div>
                    <div className="px-4 py-2">Jane</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Student ID</div>
                    <div className="px-4 py-2">201853082050</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">Male</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">+11 998001001</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Class</div>
                    <div className="px-4 py-2">10</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Roll</div>
                    <div className="px-4 py-2">43</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      <a className="text-blue-800"
                        href="mailto:jane@example.com">jane@example.com</a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    <div className="px-4 py-2">Feb 06, 1998</div>
                  </div>

                  {seeMore && <>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Division</div>
                      <div className="px-4 py-2">Dhaka</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">District</div>
                      <div className="px-4 py-2">Tangail</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Police Station</div>
                      <div className="px-4 py-2">Kalihati</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Post Office</div>
                      <div className="px-4 py-2">Paikara</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Village</div>
                      <div className="px-4 py-2">Golora</div>
                    </div>
                  </>
                  }
                  {addressEdit && <>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Division</div>
                      <input type='text' className="px-4 py-2 my-1 bg-red-100 focus:bg-transparent" />
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">District</div>
                      <input type='text' className="px-4 py-2 my-1 bg-red-100 focus:bg-transparent" />
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Police Station</div>
                      <input type='text' className="px-4 py-2 my-1 bg-red-100 focus:bg-transparent" />
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Post Office</div>
                      <input type='text' className="px-4 py-2 my-1 bg-red-100 focus:bg-transparent" />
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Village</div>
                      <input type='text' className="px-4 py-2 my-1 bg-red-100 focus:bg-transparent" />
                    </div>
                  </>
                  }

                </div>
              </div>

              {
                address ?
                  <button
                    onClick={() => setSeeMore(!seeMore)}
                    className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                    {seeMore ? ' Less' : ' Full'} Information
                  </button>
                  :
                  <button
                    onClick={() => setaddressEdit(true)}
                    className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                    Update Address
                  </button>
              }
            </div>
            {/* <!-- End of about section --> */}

            <div className="my-4"></div>

            {/* <!-- End of profile tab --> */}
          </div>
        </div>
      </div>
    </div>

  )
}


export default Profile