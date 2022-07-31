import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from '../layouts/List'
import { useDispatch, useSelector } from 'react-redux'
import { studentData } from '../../features/students/studentSlice'
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
    const res = await axios.get('http://localhost:5000/api/teacher/branch')
    const response = await axios.get(`http://localhost:5000/api/teacher/count/${branch}`)
    const counts = response.data;
    const branchs = res.data
    setData({counts , branch : branchs })
  }
  return <List allBranch = {data.branch} counts = {data.counts[0]} />
}

export default TeachersList