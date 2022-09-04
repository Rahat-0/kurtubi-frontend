import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function PopUpConfirm(props) {
  const { language } = useSelector((state) => state.language)
  const changelg = language.language === 'EN'
  const [data, setData] = props.state;
  const { message, action, btn, isShow, updatePassword } = props.data;
  const [show, setShow] = useState(false)

  useEffect(() => {
    isShow && setShow(true)
  }, [isShow])

  const submitHandler = (e) => {
    e.preventDefault()
    if (data.newPassword === data.confirmPassword) {
      action()
      setShow(false)
    } else {
      setShow({ error: true })
    }

  }
  return (
    <div className="text-center flex justify-center items-center opacity-90 z-50" >
      <form onSubmit={submitHandler} className={`${show ? 'scale-100' : 'scale-0'} transform transition-all  fixed bg-gray-300 shadow-2xl top-1/3  rounded-2xl`}>
        <div className="  w-96 min:h-56 flex justify-center items-center">
          <div className="font-bold">
            <p className="mt-20 px-2">
              {message}
            </p>
            {updatePassword && <div className=' mt-3'>
              <input onChange={(e) => setData({ ...data, oldPassword: e.target.value })} className=' bg-white p-1 border-2 outline-none ring-1 hover:bg-green-100 m-1 rounded' required type="password" placeholder='Old Password' />
              <input onChange={(e) => setData({ ...data, newPassword: e.target.value })} className=' bg-white p-1 border-2 outline-none ring-1 hover:bg-green-100 m-1 rounded' required type="password" placeholder='New Password' />
              <input onChange={(e) => setData({ ...data, confirmPassword: e.target.value })} className={`${show.error ? 'bg-red-200' : 'bg-white '} p-1 border-2 outline-none ring-1 hover:bg-green-100 m-1 rounded`} required type="password" placeholder='Repeat New Password' />
              {show.error && <p className='text-sm text-red-900' >{changelg ? 'পাসওয়ার্ড মিলেনি!' : 'password not match!'}</p>}
            </div>}
            <div className="flex justify-between m-7 space-x-5">
              <input
                className="text-gray-100 p-2 px-9 rounded-xl bg-gray-600 border focus:ring-2 focus:ring-gray-500 cursor-pointer"
                onClick={() => setShow(false)}
                type="button"
                value={changelg ? 'বাদ দিন' : 'cancel'}
              />

              <input
                className={` p-2 px-9 text-gray-100 rounded-xl bg-red-600 border focus:ring-2 focus:ring-red-500 cursor-pointer`}
                type="submit"
                value={btn}
              />

            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PopUpConfirm