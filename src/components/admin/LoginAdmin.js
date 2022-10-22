import React, { useState } from 'react'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import rootapi from '../../rootAPI'
import Cookies from 'js-cookie'
import {  useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { doRefresh } from '../../features/RefreshSlice'

const LoginAdmin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({
        admin_id : '',
        admin_password : ''
    })

const loginHandler = async(e)=>{
    e.preventDefault()
    try {
        const res = await axios.post(`${rootapi}/api/admin/login`, data)
        if(res.data.success){
          Cookies.set('accesstoken', res.data.accesstoken)
          Cookies.set('refreshtoken', res.data.refreshtoken)
          dispatch(doRefresh())
          navigate('/0/dashboard')
      }else{
          toast.error( res.data.error || 'error accoured!', {position : 'bottom-left', autoClose : false})
      }
    } catch (error) {
      toast.error((  error.message) || 'error accoured!', {position : 'bottom-left', autoClose : false})
   
    }
}
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <form onSubmit={loginHandler} className="bg-white lg:w-4/12 md:w-1/2 sm:w-6/12 w-full mx-auto">
    <div className="p-5 border-b-2">
      <h4 className="font-semibold uppercase text-gray-700">Login</h4>
    </div>
    <div className="p-5">
      <form className="w-full">
        <div className="inline-grid w-full mb-3">
          <label className="mb-2" htmlFor="">ID</label>
          <input required onChange={(e)=>setData({...data, admin_id : e.target.value})} type="id" name="id" className="focus:outline-none focus:ring-2 ring-purple-300 placeholder-gray-600 bg-gray-200 w-full p-2 rounded" placeholder="ID" />
        </div>
        <div className="inline-grid w-full mb-3">
          <label className="mb-2" htmlFor="">PIN</label>
          <input required onChange={(e)=>setData({...data, admin_password : e.target.value})} type="password" name="password" className="focus:outline-none focus:ring-2 ring-purple-300 placeholder-gray-600 bg-gray-200 w-full p-2 rounded" placeholder="Password" />
        </div>
      </form>

    </div>
    <div className="p-5 border-t-2 text-center">
      <div className="inline-grid w-1/2 mb-3">
        <button className=" p-1.5 rounded focus:outline-none font-semibold hover:bg-purple-500 hover:text-white transition text-purple-500 border border-purple-500">
          Login
        </button>
      </div>
    </div>
  </form>
  <ToastContainer />
</div>
  )
}

export default LoginAdmin