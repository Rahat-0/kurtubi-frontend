import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import rootapi from '../../rootAPI'
import PopUpConfirm from '../layouts/PopupConfirm'
import TokenHandler from '../utils/tokenHandler'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import contentSetting from './language.userProfile.json'
const Setting = () => {
 const navigate = useNavigate()
 const {language} = useSelector((state)=> state.translate.language)
 const type = language || "EN"
  const check = TokenHandler()
  const [isshow, setIsshow] = useState(false)
  const [data, setdata] = useState({
    oldPassword : '',
    newPassword : '',
    confirmPassword : ''
  })
  const passwordUpdateHandler =()=>{
    check.then( async ({token, student_id, teacher_id})=>{
      if(token){
        const usertype = student_id ? 'student' : teacher_id ? 'teacher' : null
       const res = await axios.post(`${rootapi}/api/${usertype}/updatepassword`, {password : data.oldPassword, newPassword : data.confirmPassword}, {headers : {accesstoken : token}})
       if(res.data.changedRows === 1){
        return toast.success('password updated!', {position : 'bottom-left'})
       }
       toast.error(res.data.error, {position : 'bottom-left'})
      }else{
        toast.error('login expired!', {position : 'bottom-left'})
        navigate('/login')
      }
    })
    .catch((error)=>  toast.error(error.message, {position : 'bottom-left'}))
  }

  const PopupData = {
    message : contentSetting[type].settingPopup,
    btn : contentSetting[type].settingBtn,
    updatePassword : true,
    action : passwordUpdateHandler,
    isShow : isshow 
  }

  return (
    <div className="">
            <h3 className="text-center md:text-left text-3xl p-2 bg-green-200 md:bg-white">
              { contentSetting[type].settingProfile}
            </h3>
            <div className="flex flex-col justify-between  md:items-start m-2 space-y-3 border p-2 rounded shadow-lg">
              <div className="flex justify-between w-full p-2 border rounded bg-red-50 shadow">
                <div className="px-1">
                  <h4 className="font-bold text-red-700">
                    { contentSetting[type].settingMgTitle}
                  </h4>
                  <p className="text-sm">
                    { contentSetting[type].settingMgMessage}
                  </p>
                </div>
                <input
                  onClick={() => setIsshow({show : true})}
                  className=" rounded px-2  bg-yellow-700 text-white font-bold hover:bg-white hover:text-black cursor-pointer border-2 border-yellow-500"
                  type="button"
                  value={ contentSetting[type].settingBtn}
                />
              </div>
            </div>
            <PopUpConfirm state={[data, setdata]} data = {PopupData}  />
            <ToastContainer />
          </div>
  )
}

export default Setting