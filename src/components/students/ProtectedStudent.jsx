import Cookies from 'js-cookie'
import React, {useEffect} from 'react'
import { Outlet, useNavigate} from 'react-router-dom'
import TokenHandler from '../utils/tokenHandler'
const ProtectedStudent = () => {
  
  const navigate = useNavigate()
  useEffect(() => {
    handleAuth()
    
  }, [])

  const handleAuth =()=>{
    const check =  TokenHandler()
    console.log('protected route');
    console.log(check);
    check.then(({error})=>{
      console.log(error);
      if(error){
        Cookies.remove('accesstoken')
        Cookies.remove('refreshtoken')
        navigate('/login')
        return
      }
    })
    .catch((error)=>{
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