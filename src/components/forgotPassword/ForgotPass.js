import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import rootapi from '../../rootAPI'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

const ForgotPass = () => {
    const navigate = useNavigate()
    const [isSend, setIsSend] = useState({
        send : false,
        image : ''
    })
    const [warn, setWarn] = useState(false)
    const [time, setTime] = useState({ min: 10, sec: 0 })
    const [data, setData] = useState({
        email: '',
        code: '',
        password: ''
    })


    const navigateToLogin = ()=>{
        let timeout = setTimeout(() => {
            navigate('/login')
            clearTimeout(timeout)
        }, 6000);
    }

    useEffect(() => {
        if (time.min === 0 && time.sec === 0) {
            navigate('/login')
            return
        }
        if (time.sec === 0) {
            setTime({ min: time.min - 1, sec: 59 })
        }
        let timer = setInterval(() => {
            time.sec !== 0 && setTime({ ...time, sec: time.sec - 1 })
        }, 1000);

        return () => {
            clearInterval(timer)
        }

    }, [time])


    const passwordHandler = (e) => {
        e.preventDefault()
        let eventClick = e.target.lastElementChild.name;
        if (eventClick === 'code') {
            setWarn(true)
            axios.post(rootapi + '/api/forgot', { email: data.email })
                .then((res) => {
                    let resp = res.data;
                    if (resp?.info?.accepted[0]) {
                        setTime({ min: 10, sec: 0 })
                        setIsSend({send : true, image : resp?.result[0]?.image})
                    } else {
                        toast.error('mail send failed!', { position: "top-center" })     
                    }
                    setWarn(false)
                })
                .catch((err) => {
                    console.log(err.message);
                    toast.error(err?.response?.data || 'invalid operation!', { position: "top-center" })
                    setWarn(false)
                })
            return
        }

        if (eventClick === 'submit') {
            setWarn(true)
            axios.get(`${rootapi}/api/auto/${data.code}/${data.password}`)
                .then((res) => {
                    setWarn(false)
                    if (res.data.changedRows === 1) {
                        toast.success('password successfully updated!', { position: "top-center" })
                        navigateToLogin()
                    } else {
                        toast.error('password update failed!', { position: "top-center" })
                        navigateToLogin()
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                    toast.error(err.response?.data || 'operation failed!', { position: "top-center" })
                    setWarn(false)
                    navigateToLogin()
                })

        }

    }

    return (
        <div>

            <div className=" bg-gray-400">

                <div className="container mx-auto h-screen">
                    <div className="flex justify-center p-6 md:p-12 ">

                        <div className="w-full h-auto xl:w-3/4 lg:w-11/12 flex">

                            <div className=" h-auto bg-gray-400 hidden lg:block  lg:w-1/2  rounded-l-lg" >
                                <img className='w-full rounded-l-lg h-full object-cover' src={isSend.image ? `${rootapi}/images/${isSend.image}` : 'https://nuisters.com/kurtubi.jpg'} alt='' />
                            </div>

                            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <div className="px-8 mb-4 text-center">
                                    <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                                    {isSend.send ? <>
                                        <p className="mb-4 text-sm text-gray-700">
                                            We've send Verification Code to <strong>{data.email}</strong> . please provide that code here and set your new password for your account.
                                        </p>
                                        <p className="mb-4 text-sm text-red-700">code valid until : {time.min} : {time.sec} </p>
                                    </>
                                        :
                                        <p className="mb-4 text-sm text-gray-700">
                                            We get it, stuff happens. Just enter your email address below and we'll send you code to reset your password!

                                        </p>}

                                </div>
                                <form onSubmit={passwordHandler} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                    <div className="mb-4">
                                        {isSend.send ?
                                            <>
                                                <label className="block mb-2 text-sm font-bold text-gray-700" for="code">
                                                    Verification Code
                                                </label>
                                                <input
                                                    onChange={(e) => setData({ ...data, code: e.target.value })}
                                                    value={data.code}
                                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="code"
                                                    type="number"
                                                    placeholder="Enter Verification Code"
                                                    required
                                                />

                                                <label className="block mb-2 text-sm font-bold text-gray-700" for="pass">
                                                    New Password
                                                </label>
                                                <input
                                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                                    value={data.password}
                                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="pass"
                                                    type="password"
                                                    placeholder="Enter New Password"
                                                    required
                                                />
                                            </>
                                            :
                                            <>
                                                <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                                    Email
                                                </label>
                                                <input
                                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                                    value={data.email}
                                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="email"
                                                    type="email"
                                                    placeholder="Enter Email Address..."
                                                    required
                                                />
                                            </>



                                        }
                                    </div>

                                    {isSend.send ?
                                        <input
                                        className={` ${warn ? 'bg-gray-500 hover:bg-gray-700 cursor-not-allowed' : 'bg-red-500 hover:bg-red-700 cursor-pointer'}   w-full px-4 py-2  font-bold text-white rounded-full  focus:outline-none focus:shadow-outline`}
                                        type="submit"
                                            value={`${warn ? 'Loading...' : 'Submit'}`}
                                            name='submit'
                                        />
                                        :

                                        <input
                                            className={` ${warn ? 'bg-gray-500 hover:bg-gray-700 cursor-not-allowed' : 'bg-red-500 hover:bg-red-700 cursor-pointer'}   w-full px-4 py-2  font-bold text-white rounded-full  focus:outline-none focus:shadow-outline`}
                                            type='submit'
                                            value={`${warn ? 'Loading...' : 'Send Code'}`}
                                            name='code'

                                        />




                                    }

                                </form>
                                <hr className="mb-6 border-t" />

                                <div className="text-center">
                                    <Link
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        to='/login'
                                    >
                                        Already have an account? Login!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ForgotPass