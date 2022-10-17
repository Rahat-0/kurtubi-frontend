import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import TokenHandler from '../utils/tokenHandler'
import Loading from '../layouts/Loading'

const withAuth = (OriginalComponent) => {
    const NewComponent =  () => {
        const { refresh } = useSelector((state) => state.refresh)
        const [isAuth, setIsAuth] = useState({admin : false, user : false})
        const [isLoading, setisLoading] = useState(true)
        const removeAuth = () => {
            Cookies.remove('accesstoken')
            Cookies.remove('refreshtoken')
            localStorage.removeItem('user')
            localStorage.removeItem('result')
            setIsAuth({admin : false, user : false})
            console.log('remove auth');
        }

        useEffect(() => {
            handleAuth(setisLoading(false))
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [refresh])

        

        const handleAuth = async () => {
            try {
                const { admin_id, teacher_id, student_id, exp } = await TokenHandler()
                if (admin_id && exp) {
                    console.log('authenticate');
                    setIsAuth({admin : true})
                 }
                else if((teacher_id || student_id) && exp) {
                    setIsAuth({user : true})
                } else{
                    removeAuth()  
                }
                
            } catch (error) {
                
                removeAuth() }

        }

        return isLoading ? <Loading /> : <OriginalComponent adminAuth = {isAuth.admin} userAuth = {isAuth.user} /> 

    }

    return NewComponent
}

export default withAuth