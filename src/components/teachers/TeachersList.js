import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from '../layouts/List'
import { useDispatch, useSelector } from 'react-redux'
import { studentData } from '../../features/students/studentSlice'

// eslint-disable-next-line no-unused-vars
const localRootAPI = 'http://localhost:5000'
// eslint-disable-next-line no-unused-vars
const serverRootAPI = 'http://api.kurtubi.nuisters.com'
const currentRootAPI = localRootAPI;

const TeachersList = () => {
  const [data, setData] = useState({
    branch : [{branch : 'tangail branch'}],
    counts : [{
      count_teacher : 0,
      count_branch : 0,
      count_block : 0
    }]
  })

  const dispatch = useDispatch()
  const{ branch } = useSelector((state)=> state.branch)
  useEffect(() => {
    dispatch(studentData({user: "teacher", branch }))
    allBranchs()
    
  }, [branch, dispatch])

  const allBranchs = async ()=>{
    const res = await axios.get(`${currentRootAPI}/api/teacher/branch`)
    const response = await axios.get(`${currentRootAPI}/api/teacher/count/${branch}`)
    const counts = response.data;
    const branchs = res.data
    setData({counts , branch : branchs })
  }
  return <List allBranch = {data.branch} counts = {data.counts[0]} />
}

export default TeachersList