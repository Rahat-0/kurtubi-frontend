import Cookies from 'js-cookie'
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate} from 'react-router-dom'
import TokenHandler from '../utils/tokenHandler'
const ProtectedStudent = () => {
  
  const navigate = useNavigate()
  const {refresh} = useSelector((state)=> state.refresh)
  useEffect(() => {
    handleAuth()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])

  const handleAuth =()=>{
    const check =  TokenHandler()
    check.then(({error, exp})=>{
      if(error || !exp){
        Cookies.remove('accesstoken')
        Cookies.remove('refreshtoken')
        navigate('/login')
        return
      }
    })
    .catch((error)=>{
      console.log(error.response);
      Cookies.remove('accesstoken')
      Cookies.remove('refreshtoken')
      navigate('/')
      return
    })
  }
 
  
  return (
    <div ><Outlet /> </div>
  )
  
}

export default ProtectedStudent