import React, { useState } from 'react';
import rootapi from '../../rootAPI';
import { toast, ToastContainer } from 'react-toastify';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
// import { doRefresh } from '../../features/RefreshSlice';
import TokenHandler from '../utils/tokenHandler';
// import PopUpConfirm from './PopupConfirm';

const PopUpUserMutation = (props) => {
  //   const dispatch = useDispatch()



  const [addUser, setAddUser] = useState({
    first_name: '',
    last_name: '',
    student_id: 'Auto',
    branch: '',
    classes: '',
    roll: '',
    gender: 'male',
    phone: '',
    email: '',
    dob: '',
    time: null,
    full_name: '',
    teacher_id: 'Auto',
    designation: '',
    subject: '',
    education: '',
    varsity_name: '',
    join_date: ''
  })
  const [singleUser, setSingleUser] = props.state
  const data = props.data


  const addUserHandler = async (e) => {
    e.preventDefault()
    const { token } = await TokenHandler()
    const { first_name, last_name, branch, classes, roll, gender, phone, email, dob, time, full_name,
      designation, subject, education, varsity_name, join_date } = addUser;

    const student = {
      first_name, last_name, branch, classes, roll, gender, phone, email, dob, time
    }
    const teacher = {
      full_name, designation, subject, branch, education, varsity_name, join_date, email, phone, gender, dob
    }

    try {
      if (addUser.classes) {
        const res = await axios.post(`${rootapi}/api/student/add`, student, { headers: { 'accesstoken': token } })
        if (res.data.insertId) {
          toast.success(`${first_name} ID : ${res.data.insertId} add Success!`, { position: 'top-center', autoClose: false })
        }
      }

      if (addUser.designation) {
        const res = await axios.post(`${rootapi}/api/teacher/add`, teacher, { headers: { 'accesstoken': token } })
        if (res.data.insertId) {
          toast.success(`${full_name} ID : ${res.data.insertId} add Success!`, { position: 'top-center', autoClose: false })
        }
      }

    } catch (error) {
      console.log(error.response.status);
      toast.error(error.response.data || error.message || 'User Add failed!', { position: 'top-center', autoClose: false })
    }



  }

  return (

    <div className={` bg-indigo-50 shadow-2xl border-l ${singleUser ? 'translate-x-0' : 'translate-x-full'} p-1 overflow-scroll  lg:p-5 z-10 fixed transform transition-all top-14 right-0 pb-12 w-full sm:w-5/12 h-screen text-sm`}>
      <button onClick={() => setSingleUser(false)} id='t' className='absolute z-10 right-4 top-4 bg-red-700 text-white w-6 h-6 hover:bg-gray-500'>X</button>
      <form onSubmit={addUserHandler}>
        <div className='relative lg:flex lg:items-start lg:space-x-2'>
          <div className="text-center">
            <p className=' p-2 font-bold text-xl text-gray-800 '>Insert {data.user === "student" ? 'Student' : 'Teacher'} Information's</p>
          </div>
        </div>

        {/* student information section  */}
        {data.user === 'student' &&
          <table className="w-full my-6 text-left text-gray-800 ">
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>First Name</th>
              <td>: <input required className=' outline-none bg-transparent' placeholder='enter First Name' value={addUser.first_name} onChange={(e) => setAddUser({ ...addUser, first_name: e.target.value })} /></td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>Last Name</th>
              <td>:<input required className=' outline-none bg-transparent' placeholder='enter Last Name' value={addUser.last_name} onChange={(e) => setAddUser({ ...addUser, last_name: e.target.value })} /> </td>
            </tr>
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>Student ID</th>
              <td>: <input readOnly className=' outline-none bg-transparent' value={addUser.student_id} /></td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>Class</th>
              <td>: <input type='number' required className=' outline-none bg-transparent' placeholder='enter Class' value={addUser.classes} onChange={(e) => setAddUser({ ...addUser, classes: e.target.value })} /></td>
            </tr>
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>Roll</th>
              <td>: <input type='number' required className=' outline-none bg-transparent' placeholder='enter Roll' value={addUser.roll} onChange={(e) => setAddUser({ ...addUser, roll: e.target.value })} /></td>
            </tr>

            <tr className=" border-2 border-transparent ">
              <th>Gender</th>
              <td>:
                <select className='border-2 border-transparent bg-transparent outline-none ' value={addUser.gender} onChange={(e) => setAddUser({ ...addUser, gender: e.target.value })} >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </td>
            </tr>
            <tr className=" border-2 border-transparent  bg-gradient-to-r to-gray-50 from-gray-300">
              <th>Phone</th>
              <td>: <input type='number' required className=' outline-none bg-transparent ' placeholder='enter Phone Number' value={addUser.phone} onChange={(e) => setAddUser({ ...addUser, phone: e.target.value })} /></td>
            </tr>

            <tr className=" border-2 border-transparent ">
              <th>Email</th>
              <td>: <input type='email' required className=' outline-none bg-transparent' placeholder='enter Email' value={addUser.email} onChange={(e) => setAddUser({ ...addUser, email: e.target.value })} /></td>
            </tr>
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>DOB</th>
              <td>: <input type='date' required className=' outline-none bg-transparent' placeholder='enter Date of birth' value={addUser.dob} onChange={(e) => setAddUser({ ...addUser, dob: e.target.value })} /></td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>Branch</th>
              <td>: <input required className=' outline-none bg-transparent' placeholder='enter Branch Name' value={addUser.branch} onChange={(e) => setAddUser({ ...addUser, branch: e.target.value })} /></td>
            </tr>
          </table>}

        {/* teacher infromaiton section  */}
        {data.user === 'teacher' &&
          <table className="w-full my-6 text-left text-gray-800">
            <tr className=" border-2 border-transparent  bg-gradient-to-r to-gray-50 from-gray-300">
              <th>Full Name</th>
              <td>: <input required className=' outline-none bg-transparent' placeholder='enter Full Name' value={addUser.full_name} onChange={(e) => setAddUser({ ...addUser, full_name: e.target.value })} /></td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>Teacher ID</th>
              <td>: <input readOnly className=' outline-none bg-transparent' value={addUser.teacher_id} /></td>
            </tr>
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>Designation</th>
              <td>: <input required className=' outline-none bg-transparent' placeholder='enter Designation' value={addUser.designation} onChange={(e) => setAddUser({ ...addUser, designation: e.target.value })} /></td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>Branch</th>
              <td>: <input required className=' outline-none bg-transparent' placeholder='enter Branch Name' value={addUser.branch} onChange={(e) => setAddUser({ ...addUser, branch: e.target.value })} /></td>
            </tr>
            
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>Subject</th>
              <td>:<input required className=' outline-none bg-transparent' placeholder='enter Subject' value={addUser.subject} onChange={(e) => setAddUser({ ...addUser, subject: e.target.value })} /></td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>Education</th>
              <td>: <input required className=' outline-none bg-transparent' placeholder='enter Education' value={addUser.education} onChange={(e) => setAddUser({ ...addUser, education: e.target.value })} /></td>
            </tr>
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>University</th>
              <td>: <input required className=' outline-none bg-transparent' placeholder='enter Varsity Name' value={addUser.varsity_name} onChange={(e) => setAddUser({ ...addUser, varsity_name: e.target.value })} /></td>
            </tr>

            <tr  className=" border-2 border-transparent ">
              <th>Gender</th>
              <td>: <select value={addUser.gender} onChange={(e) => setAddUser({ ...addUser, gender: e.target.value })} >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              </td>
            </tr>
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>Phone</th>
              <td>: <input type='number' required className=' outline-none bg-transparent' placeholder='enter Phone' value={addUser.phone} onChange={(e) => setAddUser({ ...addUser, phone: e.target.value })} /></td>
            </tr>

            <tr  className=" border-2 border-transparent ">
              <th>Email</th>
              <td>: <input type='email' required className=' outline-none bg-transparent' placeholder='enter Email' value={addUser.email} onChange={(e) => setAddUser({ ...addUser, email: e.target.value })} /></td>
            </tr>
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>DOB</th>
              <td>:<input required className=' outline-none bg-transparent' placeholder='enter Date of Birth' type='date' value={addUser.dob} onChange={(e) => setAddUser({ ...addUser, dob: e.target.value })} /></td>
            </tr>
          </table>}

        <div className=' text-center'>
          <button type='submit' className='rounded px-1 my-1 p-1 w-full bg-indigo-700 hover:border-gray-400 border-2 text-white'>Add</button>
        </div>

      </form>

      <ToastContainer />
    </div>


  )
}

export default React.memo(PopUpUserMutation)