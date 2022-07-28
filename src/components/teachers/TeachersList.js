import React from 'react'
import List from '../layouts/List'
import data from '../../data/teachers.json'
const TeachersList = () => {
  return <List data={data[2].data} />
}

export default TeachersList