import React from "react";
import { useState } from "react";
import data from "../../data/mock_results.json";
import {FaPeopleArrows, FaUsers, FaCheckDouble, FaRegThumbsDown} from 'react-icons/fa'
import CountCard from "../layouts/CountCard";
const Results = () => {
  const info = data;
  const [inputs, setInputs] = useState({
    classes: "10",
    semester: "1",
    subject_name: "",
  });
  const cardLogo = {
    all : <FaUsers className="inline w-12 h-auto m-2 text-blue-900" />,
    pass : <FaCheckDouble className="inline w-12 h-auto m-2 text-purple-900" />,
    fail : <FaRegThumbsDown className="inline w-12 h-auto m-2 text-red-900" />,
    top10 : <FaPeopleArrows className="inline w-12 h-auto m-2 text-green-900" />
  }

  const subTag = info[0].subject_name && Array.from(new Set(info.map(({subject_name})=> subject_name )))

    const filterd = info.filter((value) => {
    const regClasses = new RegExp(`^${inputs.classes}$`, "g")
    if (
      value.classes.toString().match(regClasses) &&
      value.semester.toString().includes(inputs.semester)
    ) {
      if (
        value.subject_name.toLowerCase().includes(inputs.subject_name.toLowerCase())
      ) {
        return value;
      }
     
    }
    return null;
  });

  const branchHandler =(e)=>{

  }



  return (
    <div className="relative">
      <h2 class="text-xl p-2 bg-gray-600 tracking-widest rounded-lg my-1 text-white">
        All Result
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-white ">
        <CountCard link='/' image={cardLogo.all} title='All Examinee' count={110} />
        <CountCard link='/' image={cardLogo.pass} title='Total Pass' count={50} />
        <CountCard link='/' image={cardLogo.fail} title='Total Fail' count={10} />
        <CountCard link='/' image={cardLogo.top10} title='Top10 Student' count={5} />
      </div>
      <div className="flex justify-between rounded-lg text-sm bg-blue-300 py-1 my-1 items-center">
        <select
          onChange={branchHandler}
          className="w-full  p-1 mr-4 bg-transparent outline-none"
          name=""
          id=""
        >
          <option value="tangail">tangail branch</option>
          <option value="dhaka">dhaka branch</option>
          <option value="sokhipur">sokhipur branch</option>
        </select>
        <select
          onChange={(e)=>setInputs({...inputs, classes : e.target.value})}
          defaultValue='10'
          className="w-full p-1 mx-4 bg-transparent outline-none"
          name=""
          id=""
        >
          <option value="10">class 10</option>
          <option value="9">class 9</option>
          <option value="8">class 8</option>
          <option value="7">class 7</option>
          <option value="6">class 6</option>
          <option value="5">class 5</option>
          <option value="4">class 4</option>
          <option value="3">class 3</option>
          <option value="2">class 2</option>
          <option value="1">class 1</option>
        </select>
        <select
          onChange={(e)=>setInputs({...inputs, semester : e.target.value})}
          defaultValue='1'
          className="w-full p-1 mx-4 bg-transparent outline-none"
          name=""
          id=""
        >
          <option value="1">semester 1</option>
          <option value="2">semester 2</option>
          <option value="3">semester 3</option>
          <option value="4">semester 4</option>
        </select>
        <select
          onChange={(e)=>setInputs({...inputs, subject_name : e.target.value})}
          className="w-full p-1 mx-4 bg-transparent outline-none"
          name=""
          id=""
        >
          <option value="">all subject</option>
          {subTag.map((subject)=>(
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </div>
      <div className=" overflow-x-auto relative shadow-md sm:rounded-lg">
        <div style={{height : '32.6rem', scrollBehavior : "revert"}} className="relative overflow-y-auto">
          <table className="absolute w-full text-xs text-left text-gray-500 ">
            <thead className=" text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="py-2 px-3">
                  Student name
                </th>
                <th scope="col" className="py-2 px-3">
                  student ID
                </th>
                <th scope="col" className="py-2 px-3">
                  teacher ID
                </th>
                <th scope="col" className="py-2 px-3">
                  Semester
                </th>
                <th scope="col" className="py-2 px-3">
                  Class
                </th>
                <th scope="col" className="py-2 px-3">
                  subject
                </th>
                <th scope="col" className="py-2 px-3">
                  score
                </th>
                <th scope="col" className="py-2 px-3">
                  Ranking
                </th>
              </tr>
            </thead>
            
              <tbody>
                {filterd.map(
                  ({
                    name,
                    student_id,
                    teacher_id,
                    semester,
                    classes,
                    subject_name,
                    subject_result,
                    subject_ranking,
                  }, index) => (
                    <tr
                      key={index}
                      className={` ${index % 2 === 0 &&'bg-gray-300'} ${subject_result < 33 && 'bg-red-700 text-white hover:bg-red-500'} bg-white border-b hover:bg-red-100`}
                    >
                      <th
                        scope="row"
                        className="py-2 px-3 font-medium whitespace-nowrap dark:text-white"
                      >
                        {name}
                      </th>
                      <td className="py-2 px-3">{student_id}</td>
                      <td className="py-2 px-3">{teacher_id}</td>
                      <td className="py-2 px-3">{semester}</td>
                      <td className="py-2 px-3">{classes}</td>
                      <td className="py-2 px-3">{subject_name}</td>
                      <td className="py-2 px-3">{subject_result}</td>
                      <td className="py-2 px-3">{subject_ranking}</td>
                    </tr>
                  )
                )}
              </tbody>
            
          </table>
        </div>
      </div>
      
        
    {/* <nav className="absolute right-0 mt-4  pb-4">
      <ul className="inline-flex -space-x-px">
        <li>
          <a href="##" className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
        </li>
        <li>
          <a href="##" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
        </li>
        <li>
          <a href="##" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
        </li>
        <li>
          <a href="##" aria-current="page" className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
        </li>
        <li>
          <a href="##" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
        </li>
        <li>
          <a href="##" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
        </li>
        <li>
          <a href="##" className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </li>
      </ul>
    </nav> */}

    </div>
  );
};

export default Results;
