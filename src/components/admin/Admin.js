import Cookies from 'js-cookie'
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import TokenHandler from '../utils/tokenHandler'
import Navber from './Navber'

const Admin = () => {
    
    const navigate = useNavigate()
  const { refresh } = useSelector((state) => state.refresh)
  useEffect(() => {
    handleAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])

  const handleAuth = async () => {
    try {
      const { admin_id, error, exp } = await TokenHandler()
      if (!admin_id && !(error === 'Network Error')) {
        Cookies.remove('accesstoken')
        Cookies.remove('refreshtoken')
        return navigate('/login')
      }
      if(!exp){
        Cookies.remove('accesstoken')
        Cookies.remove('refreshtoken')
        return navigate('/login')
      }

    } catch (error) {
        console.log('except', error);
      Cookies.remove('accesstoken')
      Cookies.remove('refreshtoken')
      localStorage.removeItem('user')
      localStorage.removeItem('result')
      return navigate('/login')
    }
  }

    return (
        <div>
            <Navber />
            <div className="md:ml-72 bg-gray-40 p-3">
                <Outlet />
            </div> 
        </div>
    )
}

export default Admin