import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Setting from "./Setting";
import Profile from "./Profile";
import Result from "./Result";
import { useDispatch, useSelector } from "react-redux";
import rootapi from "../../rootAPI";
import { userData } from "../../features/fetching/getFetchUser";
import Loading from "../layouts/Loading";
import DataError from "../layouts/DataError";
import axios from "axios";
import tokenHandler from "../utils/tokenHandler";
import { doRefresh } from "../../features/RefreshSlice";
import { useNavigate } from "react-router-dom";


function UserProfile() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [visible, setVisible] = useState(true)
  const [view, setview] = useState({
    setting: false,
    profile: true,
    result: false
  });
  const [user, setUser] = useState([])
  const [result, setresult] = useState([])

  const { isLoading, users, error } = useSelector((state) => state.getFetchUser)

  useEffect(() => {
    if (users[0]) {
      setUser(users[0])
    }

  }, [users])

  const tokenresponse = async () => {
    const check = tokenHandler()
    check.then(async ({ student_id, teacher_id, token, error }) => {
      if (error) {
        dispatch(doRefresh())
        navigate('/login')
        return
      }
      if (student_id) {
        dispatch(userData({ api: `${rootapi}/api/student/single`, token: { 'accesstoken': token } }))
        const res = await axios.get(`${rootapi}/api/student/result`, { headers: { 'accesstoken': token } })
        if (res.data[0].student_id) {
          setresult(res.data)
        }
      }
      if (teacher_id) {
        dispatch(userData({ api: `${rootapi}/api/teacher/single`, token: { 'accesstoken': token } }))
      }
      dispatch(doRefresh())
    })
      .catch((er) => {
        console.log(er)
      })

  }

  useEffect(() => {
    tokenresponse()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>

      <div >
        {/* static user seciton (user navber) */}
        <div className={`${visible ? 'left-0' : '-left-72'}  md:left-0  transform transition-all bg-gray-200 w-72 fixed z-40 lg:overflow-scroll  h-screen `}>

          <button onClick={() => setVisible(!visible)} className='bg-red-900 absolute md:hidden w-3 h-14 rounded-r-3xl border-2 -right-2 top-0'></button>
          <h3 className="font-bold text-4xl py-3">Settings</h3>
          <ul onClick={() => setVisible(false)}>
            <li
              className={`${view.profile && "bg-red-300 text-white"
                } p-2 bg-gray-100 my-2 rounded-lg hover:bg-red-400 cursor-pointer`}
              onClick={() => setview({ profile: true })}
            >
              {" "}
              Public profile
            </li>
            <li
              className={`${view.setting && "bg-red-300 text-white"
                } p-2 bg-gray-100 my-2 rounded-lg hover:bg-red-400 cursor-pointer`}
              onClick={() => setview({ setting: true })}
            >
              Account settings
            </li>
            {user.student_id && <li
              className={`${view.result && "bg-red-300 text-white"
                } p-2 bg-gray-100 my-2 rounded-lg hover:bg-red-400 cursor-pointer`}
              onClick={() => setview({ result: true })}
            >
              Results
            </li>}
          </ul>
        </div>

        {/* dynamic user section  */}
        <div className='md:ml-72 bg-gray-40 p-3 relative '>
          {isLoading && <Loading />}
          {error && <DataError message={error} />}
          {view.profile && <Profile data={user} />}
          {view.setting && <Setting />}
          {view.result && user.student_id && <Result data={result} name={`${user.first_name} ${user.last_name}`} />}
        </div>
      </div>
      {/* // <PopUpConfirm /> */}
      <ToastContainer />
    </div>
  );
}



export default UserProfile;
