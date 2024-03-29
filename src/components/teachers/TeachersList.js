import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from '../layouts/List'
import { useDispatch, useSelector } from 'react-redux'
import rootapi  from '../../rootAPI'
import { userData } from '../../features/fetching/getFetchUser'
import TokenHandler from '../utils/tokenHandler'
import { doRefresh } from '../../features/RefreshSlice'

const TeachersList = () => {
const dispatch = useDispatch()
const {refresh} = useSelector((state)=> state.refresh)
const [branch, setBranch] = useState('tangail branch')
const [data, setData] = useState({
    branch : [{branch : 'tangail branch'}],
    counts : [{
      count_teacher : 0,
      count_branch : 0,
      count_block : 0
    }]
  })

  const teacherData = async ()=>{
    const {token, exp} = await TokenHandler()
    dispatch(userData({api : `${rootapi}/api/teacher/all/${branch}`, token: { 'accesstoken': token }}))
    !exp && dispatch(doRefresh())
  }

  useEffect(() => {
    teacherData()
    countAndBranch()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [branch, refresh])

  const countAndBranch = async ()=>{
    const res = await axios.get(`${rootapi}/api/teacher/branch`)
    const response = await axios.get(`${rootapi}/api/teacher/count/${branch}`)
    const counts = response.data;
    const branchs = res.data
    setData({counts , branch : branchs })
  }
  return <List allBranch = {data.branch} counts = {data.counts[0]} branch={[setBranch]} />
}

export default TeachersList