import React, { useState, useEffect } from "react";
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

function UserProfile() {

  const dispatch = useDispatch()

  const [visible, setVisible] = useState(true)
  const [view, setview] = useState({
    setting: false,
    profile: true,
    result: false
  });
  const [user, setUser] = useState([])
  const [result, setresult] = useState([])

  const { isLoading, users, error } = useSelector((state) => state.getFetchUser)
  const { language } = useSelector((state) => state.language)

  const changelg = (language.language === 'EN') || false

  useEffect(() => {
    if (users[0]) {
      setUser(users[0])
      localStorage.setItem('user', JSON.stringify(users[0]))
    }

  }, [users])

  const tokenresponse = async () => {
    try {
      const { student_id, teacher_id, token, error } = await tokenHandler()

      if (error === 'Network Error') {
        let user1 = localStorage.getItem('user')
        let result1 = localStorage.getItem('result')
        setUser(JSON.parse(user1))
        setresult(JSON.parse(result1))
      }
      else {
        if (student_id) {
          dispatch(userData({ api: `${rootapi}/api/student/single`, token: { 'accesstoken': token } }))
          const res = await axios.get(`${rootapi}/api/student/result`, { headers: { 'accesstoken': token } })
          localStorage.setItem('result', JSON.stringify(res.data))
          if (res.data[0].student_id) {
            setresult(res.data)
          }
        }

        if (teacher_id) {
          dispatch(userData({ api: `${rootapi}/api/teacher/single`, token: { 'accesstoken': token } }))
        }
        dispatch(doRefresh())
      }
    } catch (error) {
      dispatch(doRefresh())
    }
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
          <h3 className="font-bold text-4xl py-3">{changelg ? 'সেটিংস' : 'Settings'}</h3>
          <ul onClick={() => setVisible(false)}>
            <li
              className={`${view.profile && "bg-red-300 text-white"
                } p-2 bg-gray-100 my-2 rounded-lg hover:bg-red-400 cursor-pointer`}
              onClick={() => setview({ profile: true })}
            >
              {" "}
             { changelg ? 'পাবলিক প্রফাইল' : ' Public profile'}
            </li>
            <li
              className={`${view.setting && "bg-red-300 text-white"
                } p-2 bg-gray-100 my-2 rounded-lg hover:bg-red-400 cursor-pointer`}
              onClick={() => setview({ setting: true })}
            >
              { changelg ? 'একাউন্ট সেটিংস' : 'Account settings'}
            </li>
            {user.student_id && <li
              className={`${view.result && "bg-red-300 text-white"
                } p-2 bg-gray-100 my-2 rounded-lg hover:bg-red-400 cursor-pointer`}
              onClick={() => setview({ result: true })}
            >
              {changelg ? 'রেজাল্টস' : 'Results'}
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
    </div>
  );
}



export default UserProfile;
