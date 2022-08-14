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


        if(new Date(decode.exp * 1000) > new Date().getTime()){
            if (decode.student_id || decode.teacher_id) {
                return { student_id: decode.student_id, teacher_id: decode.teacher_id, token : accesstoken }
            }
        }

        if(new Date(decode.exp * 1000) < new Date().getTime()){
            const res = await axios.post(`${rootapi}/api/student/auth`, {data : ''}, {headers : {refreshtoken}} )
            if(res.data.success){
              Cookies.set('accesstoken', res.data.accesstoken)
              console.log('update token')
              const updateToken = Cookies.get('accesstoken')
              return { student_id: decode.student_id, teacher_id: decode.teacher_id, token : updateToken }
            }
          } 

        return null

    } catch (error) {
        return {error : error.response}
    }

}


export default TokenHandler