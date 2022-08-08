import React, {useRef, useEffect} from "react";
import axios from 'axios'
import { useReactToPrint } from 'react-to-print'
import { useState } from "react";
import {FaPeopleArrows, FaUsers, FaCheckDouble, FaRegThumbsDown} from 'react-icons/fa'
import CountCard from "../layouts/CountCard";
import { resultAction } from "../../features/result/resultSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../layouts/Loading";
import DataError from "../layouts/DataError";

const Results = () => {
  
  useEffect(()=>{
    getBranchAndClass()
  }, [])

const dispatch = useDispatch()
const {results, isLoading, error} = useSelector((state)=> state.result)

// printing handler 
  const componentRef = useRef()
  const printHandler = useReactToPrint({
    content : ()=> (componentRef.current)
  })

  const [inputs, setInputs] = useState({
    classes: "10",
    semester: "",
    subject_name: "",
    branch : "tangail branch", 
    allBranchClasses : [],
    
  });
  useEffect(() => {
    dispatch(resultAction({branch : inputs.branch, classes : inputs.classes}))
   }, [inputs.branch, inputs.classes])

  const getBranchAndClass = async ()=>{
    const res = await axios.get('http://localhost:5000/api/result/branchandclass')
    const allBranchClasses = res.data
    setInputs({...inputs, allBranchClasses })
   }

  const cardLogo = {
    all : <FaUsers className="inline w-12 h-auto m-2 text-blue-900" />,
    pass : <FaCheckDouble className="inline w-12 h-auto m-2 text-purple-900" />,
    fail : <FaRegThumbsDown className="inline w-12 h-auto m-2 text-red-900" />,
    top10 : <FaPeopleArrows className="inline w-12 h-auto m-2 text-green-900" />
  }

  const branchTag = Array.from(new Set(inputs.allBranchClasses.map(({branch})=> branch)));
  const classTag = Array.from(new Set(inputs.allBranchClasses.map(({classes})=> classes)));
  const subTag =  Array.from(new Set(results.map(({subject_name})=> subject_name )))
  const semesterTag = Array.from(new Set(results.map(({ semester }) => semester)));

    const filterd = results.filter((value) => {
    const regClasses = new RegExp(`^${inputs.classes}$`, "g")
    if(value.branch.toLowerCase().includes(inputs.branch.toLowerCase()) && 
       value.classes.toString().match(regClasses) &&
       value.semester.toString().includes(inputs.semester)){
        if(value.subject_name.toLowerCase().includes(inputs.subject_name.toLowerCase())){
          return value
        }
    }
    return null
  });

  return (
    <div className="relative">
     { isLoading && <Loading />}
     { error && <DataError message={error} />}
      <h2 class="text-xl p-2 bg-gray-600 tracking-widest rounded-lg my-1 text-white">
        All Result
      </h2>
      {/* counter card component */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-white ">
        <CountCard link='/' image={cardLogo.all} title='All Examinee' count={110} />
        <CountCard link='/' image={cardLogo.pass} title='Total Pass' count={50} />
        <CountCard link='/' image={cardLogo.fail} title='Total Fail' count={10} />
        <CountCard link='/' image={cardLogo.top10} title='Top10 Student' count={5} />
      </div>

      {/* select filter start from here  */}
      <div className="flex justify-between rounded-lg text-sm bg-blue-300 py-1 my-1 items-center">
        <select
          onChange={(e)=> setInputs({...inputs, branch : e.target.value}) }
          value={inputs.branch}
          className="w-full  p-1 mr-4 bg-transparent outline-none"
          name=""
          id=""
        >
          {branchTag.map((branch)=>(
            <option key={branch} value={branch}>{branch}</option>
          ))}
         
        </select>
        <select
          onChange={(e)=>setInputs({...inputs, classes : e.target.value})}
          className="w-full p-1 mx-4 bg-transparent outline-none"
          name=""
          id=""
        >
          {classTag.sort().map((classes)=>(
            <option key={classes} value={classes}>Class {classes}</option>
          ))}

        </select>
        <select
          onChange={(e)=>setInputs({...inputs, semester : e.target.value})}
          className="w-full p-1 mx-4 bg-transparent outline-none"
          name=""
          id=""
        >
            <option value='' >Semester All</option>
          {semesterTag.sort().map((semester)=>(
            <option key={semester} value={semester}>Semester {semester}</option>
          ))}
          
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
          <button className="px-2 text-green-900 hover:text-red-900 hover:scale-110 transform w-full font-bold" onClick={printHandler}>PRINT</button>
      </div>
      <div  className=" overflow-x-auto relative shadow-md sm:rounded-lg">
        <div style={{height : '32.6rem', scrollBehavior : "revert"}} className="relative overflow-y-auto">
        {/* result table start from here */}
          <table ref={componentRef} className="absolute w-full text-xs text-left text-gray-500 ">
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
                  Class
                </th>
                <th scope="col" className="py-2 px-3">
                  Semester
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
                    subject_ranking
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
                      <td className="py-2 px-3">{classes}</td>
                      <td className="py-2 px-3">{semester}</td>
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
