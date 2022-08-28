import React from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import List from "../layouts/List";
import { useState } from "react";
import rootapi from "../../rootAPI";
import { userData } from "../../features/fetching/getFetchUser";
import { useSelector } from "react-redux";
import TokenHandler from "../utils/tokenHandler";
import { doRefresh } from "../../features/RefreshSlice";
const StudentList = () => {
  const dispatch = useDispatch()
  const {refresh} = useSelector((state)=> state.refresh)
  const [branch, setBranch] = useState('tangail branch')
  const [data, setData] = useState({
    branch : [{branch : 'tangail branch'}],  
    counts : [{
      count_student : 0,
      count_branch : 0,
      count_block : 0
    }]
  })

  const studentData = async ()=>{
    const {token, exp} = await TokenHandler()
    dispatch(userData({api : `${rootapi}/api/student/all/${branch}`, token: { 'accesstoken': token }}))
    !exp && dispatch(doRefresh())
  }

  useEffect(() => {
      studentData()
      countAndBranch()
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [branch, dispatch, refresh ])

  const countAndBranch = async ()=>{
    const res1 = await axios.get(`${rootapi}/api/student/branch`)
    const res2 = await axios.get(`${rootapi}/api/student/count/${branch}`)
    const branchs = res1.data;
    const counts = res2.data;
    setData({counts , branch : branchs })
  }

  // <List allBranch = {data.branch} counts = {data.counts} />
  return <List allBranch = {data.branch} counts = {data.counts[0]} branch={[setBranch]} /> ;
};

export default StudentList;
