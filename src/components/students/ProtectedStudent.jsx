import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import TokenHandler from '../utils/tokenHandler'
const ProtectedStudent = () => {

  const navigate = useNavigate()
  const { refresh } = useSelector((state) => state.refresh)
  useEffect(() => {
    handleAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])

  const handleAuth = async () => {
    try {
      const { error } = await TokenHandler()
      if (error && !(error === 'Network Error')) {
        Cookies.remove('accesstoken')
        Cookies.remove('refreshtoken')
        return navigate('/login')
      }

    } catch (error) {
      Cookies.remove('accesstoken')
      Cookies.remove('refreshtoken')
      localStorage.removeItem('user')
      localStorage.removeItem('result')
      return navigate('/login')

    }
  }


  return (
    <div ><Outlet /> </div>
  )

}

export default ProtectedStudent