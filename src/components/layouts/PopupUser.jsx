import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { doRefresh } from '../../features/RefreshSlice';
import rootapi from '../../rootAPI';
import TokenHandler from '../utils/tokenHandler';
import PopUpConfirm from './PopupConfirm';
import content from './content/popupUser.content.json'

const PopupUser = (props) => {
  const dispatch = useDispatch()
  const {language} = useSelector((state)=> state.translate.language)
  const type = content[language] ? language : "EN"

  const [toggle, setToggle] = useState(false)
  const [popToggle, setpopToggle] = useState({
    block: false,
    passreset: false
  })
  const [singleUser, setSingleUser] = props.state
  const { branch, classes, dob, email, gender, image, isblock, name, phone, roll, student_id, time,
    teacher_id, designation, education, ispermit, varsity_name, full_name, subject, join_date } = props.data;

  const blockUnblockToggle = isblock === 0 ? content[type].block : content[type].unblock

  // teacher block handling function start from here
  const blockHandler = async () => {
    const payload = student_id ? { student_id, block: isblock === 0 ? 1 : 0 } : { teacher_id, block: isblock === 0 ? 1 : 0 }
    const user = teacher_id ? 'teacher' : 'student'
    try {
      const { token } = await TokenHandler()
      const res = await axios.post(`${rootapi}/api/${user}/block`, payload, { headers: { 'accesstoken': token } })
      if (res.data.changedRows === 1) {
        setSingleUser(false)
        dispatch(doRefresh())
      } else {
        toast.error(res.data.error || content[type].errBlock, { position: 'top-center' })
      }

    } catch (error) {
      console.log(error.response.data.error);
      toast.error( content[type].errBlock, { position: 'top-center' })
    }

  }

  // teacher password reset handling function start from here
  const passResetHandler = async () => {
    try {
      const { token } = await TokenHandler()
      const payload = student_id ? { student_id } : { teacher_id }
      const user = teacher_id ? 'teacher' : 'student'
      const res = await axios.put(`${rootapi}/api/${user}/reset`, payload, { headers: { 'accesstoken': token } })
      if (res.data.affectedRows === 1) {
        toast.success( content[type].sucPassReset , { position: 'top-center' })
      } else {
        toast.error(res.data.error || content[type].errPassReset, { position: 'top-center' })
      }

    } catch (error) {
      console.log(error.response.data.error);
      toast.error( content[type].errPassReset, { position: 'top-center' })
    }

  }

  // block popup option define for popupConfirm component
  const blockPopupData = {
    message: `${content[type].doWant} ${blockUnblockToggle} ${content[type].thisAccount}`,
    btn: blockUnblockToggle,
    action: blockHandler,
    isShow: popToggle.block
  }

  // password reset popup options define for popupConfirm component
  const resetPasswordPopupData = {
    message: content[type].mesResetPass,
    btn: content[type].btnReset,
    action: passResetHandler,
    isShow: popToggle.passreset
  }

  return (

    <div className={` bg-indigo-50 shadow-2xl border-l ${singleUser ? 'translate-x-0' : 'translate-x-full'} p-1 overflow-scroll  lg:p-5 z-10 fixed transform transition-all top-14 right-0 pb-12 w-full sm:w-5/12 h-screen text-sm`}>
      <button onClick={() => setSingleUser(false)} id='t' className='absolute z-10 right-4 top-4 bg-red-700 text-white w-6 h-6 hover:bg-gray-500'>X</button>
      <div>
        <div className='relative lg:flex lg:items-start lg:space-x-2'>
          <div>
            <img className='w-full lg:w-36 h-auto lg:h-28 object-cover rounded-lg'
              src={`${rootapi}/images/${image}`}
              alt="m" />
          </div>
          <div className="text-center">
            <p className="py-1 uppercase font-bold text-2xl lg:py-0 "> {name || full_name} </p>
            <div className="lg:absolute lg:bottom-0 lg:flex font-semibold lg:justify-evenly ">
              <p className="bg-pink-200 p-1 lg:mx-1 my-2 lg:my-0 rounded capitalize">{branch}</p>
              {isblock === 0 ? <p className="bg-green-100 p-1 lg:mx-1 my-2 lg:my-0 rounded">{content[type].active} </p>
                :
                <p className="bg-red-800 text-white p-1 lg:mx-1 my-2 lg:my-0 rounded">{content[type].block} </p>}
              <p className=" bg-indigo-200 p-1 lg:mx-1 my-2 lg:my-0 rounded">{student_id ? content[type].student : content[type].teacher}</p>
            </div>
          </div>
        </div>

        {/* student information section  */}
        {student_id &&
          <table className="w-full my-6 text-left ">
            <tr className=" border-2 border-transparent  bg-gradient-to-r to-gray-50 from-gray-300">
              <th>{content[type].name}</th>
              <td>: {name}</td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>{content[type].studentId}</th>
              <td>: {student_id}</td>
            </tr>
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>{content[type].class}</th>
              <td>: {classes}</td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>{content[type].roll}</th>
              <td>: {roll}</td>
            </tr>

            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>{content[type].gender}</th>
              <td>: {gender}</td>
            </tr>
            <tr className=" border-2 border-transparent  ">
              <th>{content[type].phone}</th>
              <td>: {phone}</td>
            </tr>

            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>{content[type].email}</th>
              <td>: {email}</td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>{content[type].dob}</th>
              <td>: {dob}</td>
            </tr>
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>{content[type].join}</th>
              <td>: {time}</td>
            </tr>
          </table>}

        {/* teacher infromaiton section  */}
        {teacher_id &&
          <table className="w-full my-6 text-left ">
            <tr className=" border-2 border-transparent  bg-gradient-to-r to-gray-50 from-gray-300">
              <th>{content[type].name}</th>
              <td>: {full_name}</td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>{content[type].teacherId}</th>
              <td>: {teacher_id}</td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>{content[type].resultAdd}</th>
              <td>: {ispermit === 0 ? content[type].unablePermit : content[type].hasPermit}</td>
            </tr>
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>{content[type].designation}</th>
              <td>: {designation}</td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>{content[type].subject}</th>
              <td>: {subject}</td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>{content[type].education}</th>
              <td>: {education}</td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>{content[type].varsity}</th>
              <td>: {varsity_name}</td>
            </tr>

            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>{content[type].gender}</th>
              <td>: {gender}</td>
            </tr>
            <tr className=" border-2 border-transparent  ">
              <th>{content[type].phone}</th>
              <td>: {phone}</td>
            </tr>

            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>{content[type].email}</th>
              <td>: {email}</td>
            </tr>
            <tr className=" border-2 border-transparent ">
              <th>{content[type].dob}</th>
              <td>: {dob}</td>
            </tr>
            <tr className=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
              <th>{content[type].join}</th>
              <td>: {join_date}</td>
            </tr>
          </table>}

        {toggle && <div className='grid md:grid-cols-3 text-center'>
          <a href='#t' onClick={() => setpopToggle({ block: { show: true } })} className='rounded px-1 my-1 p-1 bg-pink-700 hover:border-gray-400 border-2 text-white'>{blockUnblockToggle}</a>
          <a href='#t' className='rounded px-1 my-1 p-1 bg-indigo-700 hover:border-gray-400 border-2 text-white'>{content[type].edit}</a>
          <a href='#t' onClick={() => setpopToggle({ passreset: { show: true } })} className='rounded px-1 my-1 p-1 bg-red-700 hover:border-gray-400 border-2 text-white'>{content[type].resetPass}</a>
        </div>}

        <button onClick={() => setToggle(!toggle)} className="bg-red-300 block w-full scroll-smooth rounded my-2 text-gray-800 border">{toggle ? content[type].hideAdv : content[type].showAdv}</button>
      </div>

      <PopUpConfirm state={[0, 0]} data={blockPopupData} />
      <PopUpConfirm state={[0, 0]} data={resetPasswordPopupData} />
      <ToastContainer />
    </div>


  )
}

export default PopupUser