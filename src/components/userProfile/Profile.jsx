
import React from 'react'
import { useState } from 'react'
import rootapi from '../../rootAPI'


const Profile = (props) => {
  const {branch, classes, email, first_name, last_name, gender, image, dob, phone, roll, time, student_id,
         designation, education, full_name, join_date, subject, teacher_id, varsity_name  } = props.data;
  const [seeMore, setSeeMore] = useState(false)
  const [addressEdit, setaddressEdit] = useState(false)

  const address = 'fdsa'

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
                  src={`${rootapi}/images/${image}`}
                  alt="" />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{student_id ? first_name+' '+last_name : full_name}</h1>
              <h3 className="text-green-600 font-lg text-semibold leading-6">{student_id ? 'Student' : 'Teacher'}</h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {student_id ? 'student of kurtubi dakhil madrasah.' :
                 'teacher of kurtubi dakhil madrasah.'}
              </p>
              <ul
                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto"><span
                    className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                </li>
                <li className="flex items-center py-3">
                  <span>{student_id ? 'Student' : 'Teacher'} since</span>
                  <span className="ml-auto">{student_id ? new Date(time).toLocaleDateString() : new Date(join_date).toLocaleDateString() }</span>
                </li>
              </ul>
            </div>
            {/* <!-- End of profile card --> */}
            <div className="my-4"></div>
          </div>
          {/* <!-- Right Side --> */}
          <div className="w-full md:w-9/12 ">
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
                 {student_id &&  <>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Full Name</div>
                    <div className="px-4 py-2">{first_name+' '+last_name}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Student ID</div>
                    <div className="px-4 py-2">{student_id}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Branch</div>
                    <div className="px-4 py-2">{branch}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">{gender}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">{phone}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Class</div>
                    <div className="px-4 py-2">{classes}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Roll</div>
                    <div className="px-4 py-2">{roll}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      <a className="text-blue-800"
                        href="mailto:jane@example.com">{email}</a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    <div className="px-4 py-2">{new Date(dob).toLocaleDateString()}</div>
                  </div>
                  </>}


                  {teacher_id &&  <>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Full Name</div>
                    <div className="px-4 py-2">{full_name}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Teacher ID</div>
                    <div className="px-4 py-2">{teacher_id}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Branch</div>
                    <div className="px-4 py-2">{branch}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Subject</div>
                    <div className="px-4 py-2">{subject}</div>
                  </div>
                  {/* ispermit, join_date, subject, teacher_id, varsity_name  */}
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Designation</div>
                    <div className="px-4 py-2">{designation}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Education</div>
                    <div className="px-4 py-2">{education}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">{phone}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      <a className="text-blue-800"
                        href={`mailto:${email}`}>{email}</a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    <div className="px-4 py-2">{new Date(dob).toLocaleDateString()}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">University</div>
                    <div className="px-4 py-2">{varsity_name}</div>
                  </div>
                  </>}
                  
                  

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