import axios from "axios"
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import rootapi from "../../rootAPI"


const TokenHandler = async () => {

    const accesstoken = Cookies.get('accesstoken')
    const refreshtoken = Cookies.get('refreshtoken')
    const freshtoken = accesstoken && accesstoken.split(' ')[1]
    const decode = freshtoken && await jwtDecode(freshtoken)
    
    try {
        const {student_id, teacher_id, admin_id, image} = decode
        const userType = student_id ? 'student' : teacher_id ? 'teacher' : admin_id ? 'admin' : null
        if(new Date(decode.exp * 1000) > new Date().getTime()){
            if (decode.student_id || decode.teacher_id || decode.admin_id) {
                return { student_id: decode.student_id, teacher_id: decode.teacher_id, admin_id : decode.admin_id , token : accesstoken, image, exp : true }
            }
        }

        if(new Date(decode.exp * 1000) < new Date().getTime()){
            console.log('token update');
            const res = await axios.post(`${rootapi}/api/${userType}/auth`, {data : ''}, {headers : {refreshtoken}} )
            if(res.data.success){
              Cookies.set('accesstoken', res.data.accesstoken)
              const updateToken = Cookies.get('accesstoken')
              return { student_id: decode.student_id, teacher_id: decode.teacher_id, admin_id : decode.admin_id, token : updateToken, image, exp : true }
            }else{
                return {error : true, exp : false}
            }
          } 

        return null 

    } catch (error) {
        // Cookies.remove('accesstoken')
        return {error : error.message || true, student_id: decode && decode.student_id , admin_id : decode && decode.admin_id, teacher_id: decode && decode.teacher_id , image : decode && decode.image, exp : false}
    }

}


export default TokenHandler