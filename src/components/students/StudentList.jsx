import React from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { studentData } from "../../features/students/studentSlice";
import List from "../layouts/List";
import { useState } from "react";
const StudentList = () => {
  const [data, setData] = useState({
    branch : [{branch : 'tangail branch'}],
    counts : [{
      count_student : 0,
      count_branch : 0,
      count_block : 0
    }]
  })
  const dispatch = useDispatch()
  const {branch} = useSelector((state)=> state.branch)

  useEffect(() => {
    dispatch(studentData({user: "student", branch }))
    allBranchs()
    
  }, [branch, dispatch])

  const allBranchs = async ()=>{
    const res = await axios.get('http://localhost:5000/api/student/branch')
    const response = await axios.get(`http://localhost:5000/api/student/count/${branch}`)
    const counts = response.data;
    const branchs = res.data;
    setData({counts , branch : branchs })
  }

  // <List allBranch = {data.branch} counts = {data.counts} />
  return <List allBranch = {data.branch} counts = {data.counts[0]} /> ;
};

export default StudentList;
