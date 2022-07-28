import React from "react";
import stuData from "../../data/students.json";
import List from "../layouts/List";
const StudentList = () => {
  const stuInfo = stuData[2].data;

  return <List data={stuInfo} />;
};

export default StudentList;
