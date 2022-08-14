import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { postFetchAction } from '../features/fetching/postFetch'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
export const Login = () => {
 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
   const {isLoading, response, error } = useSelector((state)=> state.postFetch)

   useEffect(() => {
    if(response.success){
        Cookies.set('accesstoken', response.accesstoken)
        Cookies.set('refreshtoken', response.refreshtoken)
        navigate('/auth/user')
    }
    (error || response.error )&& toast.error( error || response.error, {position : 'bottom-left', autoClose : false})

   
   }, [response, error])

 
    
  
   
   
    const [data, setData] = useState({
        id : '',
        password : '',
        type : 'student_id'
    })
    const [warn, setWarn] = useState({ warnId : false, warnPass : false})
    useEffect(() => {
        if(!data.id){setWarn({...warn, warnId : true})}
        else{ setWarn({...warn, warnId : false}) }   
    }, [data.id])

    useEffect(() => {
        if(!data.password){setWarn({...warn, warnPass : true})}
        else{ setWarn({...warn, warnPass : false})}   
    }, [data.password])

    const formHandler = (e) =>{
        e.preventDefault()
        const send = {
            [data.type] : data.id,
            'password' : data.password
        }
        dispatch(postFetchAction({api : 'http://localhost:5000/api/login', data : send}))
    }

    return (
        <div className="flex fixed w-screen h-screen items-center justify-center top-4 bg-gray-100 bg-opacity-50 z-20">
            <div className="px-8 py-6 mt-4 mx-2 lg:w-4/12 md:w-6/12 w-11/12 text-left bg-white shadow-lg relative">
                <button className='hidden absolute hover:text-red-700 right-7'>X</button>
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                <form onSubmit={formHandler} >
                    <div className="mt-4">
                        <div>
                            <label className="block" for="email">ID</label>
                            <input type="number" placeholder="user ID"
                                
                                onChange={(e)=> setData({...data, id : e.target.value })}
                                required
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            { warn.warnId && <span className="text-xs tracking-wide text-red-600">ID field is required! </span>}
                        </div>
                        <div className="mt-4">
                            <label className="block">Password </label>
                            <input type="password" placeholder="Password" required 
                                onChange={(e)=> setData({...data, password : e.target.value })}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            {warn.warnPass && <span className="text-xs tracking-wide text-red-600">Password field is required! </span>} 
                        </div>
                        <div className='flex justify-between text-sm my-2'>
                            <div className='flex item-center space-x-1'>
                                <label htmlFor="student">Student</label><input onChange={(e)=> setData({...data, type : e.target.value}) } type="radio" defaultChecked name="option" id="student" value='student_id' />
                            </div>
                            <div className='flex item-center space-x-1'>
                                <label htmlFor="teacher">Teacher</label><input onChange={(e)=> setData({...data, type : e.target.value}) } type="radio" name="option" id="teacher" value='teacher_id' />
                            </div>
                        </div>
                        <div className="flex items-baseline justify-between">
                           {!isLoading ? <button type='submit' className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button> :
                            <button  className="px-6 py-2 mt-4 text-white bg-gray-600 rounded-lg hover:bg-gray-900">Loading</button>}
                            <a href="##" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                        </div>

                    </div>
                </form>
            </div>
           <ToastContainer />
        </div>
    )
}
