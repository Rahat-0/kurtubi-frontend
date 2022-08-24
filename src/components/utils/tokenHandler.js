import axios from "axios"
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import rootapi from "../../rootAPI"


const TokenHandler = async () => {
    try {
        const accesstoken = Cookies.get('accesstoken')
        const refreshtoken = Cookies.get('refreshtoken')
        const freshtoken = accesstoken.split(' ')[1]
        const decode = await jwtDecode(freshtoken)
        const {student_id, teacher_id} = decode
        const userType = student_id ? 'student' : teacher_id ? 'teacher' : null
        if(new Date(decode.exp * 1000) > new Date().getTime()){
            if (decode.student_id || decode.teacher_id) {
                return { student_id: decode.student_id, teacher_id: decode.teacher_id, token : accesstoken, exp : true }
            }
        }

        if(new Date(decode.exp * 1000) < new Date().getTime()){
            console.log('token update');
            const res = await axios.post(`${rootapi}/api/${userType}/auth`, {data : ''}, {headers : {refreshtoken}} )
            if(res.data.success){
              Cookies.set('accesstoken', res.data.accesstoken)
              const updateToken = Cookies.get('accesstoken')
              return { student_id: decode.student_id, teacher_id: decode.teacher_id, token : updateToken, exp : true }
            }else{
                return {error : true, exp : false}
            }
          } 

        return null 

    } catch (error) {
        Cookies.remove('accesstoken')
        return {error : error.response || true, exp : false}
    }

}


export default TokenHandler