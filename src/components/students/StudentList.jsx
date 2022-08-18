import React from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import List from "../layouts/List";
import { useState } from "react";
import rootapi from "../../rootAPI";
import { userData } from "../../features/fetching/getFetchUser";

const StudentList = () => {
  const dispatch = useDispatch()
  
  const [branch, setBranch] = useState('tangail branch')
  const [data, setData] = useState({
    branch : [{branch : 'tangail branch'}],  
    counts : [{
      count_student : 0,
      count_branch : 0,
      count_block : 0
    }]
  })

  useEffect(() => {
      dispatch(userData({api : `${rootapi}/api/student/all/${branch}`}))
      countAndBranch()
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [branch, dispatch])

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
