import React from 'react'
import { useState } from 'react'
const Result = (props) => {
    const result = props.data;
    const name = props.name;
    
    const semester = Array.from(new Set(result.map(({result_semester})=> result_semester)))
    const classes = Array.from(new Set(result.map(({result_class})=> result_class)))
    const subject = Array.from(new Set(result.map(({subject_name})=> subject_name)))
    
    const [inputs, setinputs] = useState({
        classes : '',
        semester : '',
        subject : ''
    })

    const filteredData = result.filter((value)=>{
        if(value.result_class.includes(inputs.classes) &&
          value.result_semester.toString().includes(inputs.semester) &&
          value.subject_name.toLocaleLowerCase().includes(inputs.subject.toLocaleLowerCase())){
            return value
        }
        return null
    })


  return (
    <div className=" bg-gray-300 h-10">
        <h3 className="text-center md:text-left text-3xl p-2 bg-green-200 md:bg-white">Results</h3>
        <p className='p-2'>Kurtubi madrasah, tangail. <span className='font-extrabold uppercase'>{name}</span>({result[0].student_id}), welcome to use Teaching Management System. </p>

        <div className='flex justify-evenly my-2 bg-blue-50 text-blue-900 font-bold'>
            <label htmlFor="class">class</label> 
            <select onClick={(e)=> setinputs({...inputs, classes : e.target.value })} className=' outline-none bg-transparent block' id="class">
                <option value="">All</option>
                {classes.map((classes)=>(
                    <option key={classes} value={classes}> {classes} </option>
                ))}
                
            </select>

            <label htmlFor="semester">Semester</label> 
            <select onClick={(e)=> setinputs({...inputs, semester : e.target.value })} className=' outline-none bg-transparent block' id="semester">
                <option value="">All</option>
                {semester.map((semester)=>(
                    <option key={semester} value={semester}> {semester} </option>
                ))}
            </select>

            <label htmlFor="subject">Subject</label> 
            <select onClick={(e)=> setinputs({...inputs, subject : e.target.value })} className=' outline-none bg-transparent block' id="subject">
                <option value="">All</option>
                {subject.map((subject)=>(
                    <option key={subject} value={subject}> {subject} </option>
                ))}
            </select>
        </div>
        <table className='w-full overflow-scroll text-center rounded bg-indigo-50 shadow-lg '>
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Semester</th>
                    <th>subject</th>
                    <th>score</th>
                    <th>Ranking</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map(({result_semester, result_class, subject_name, subject_ranking, subject_result}, index)=>{
                    const fail = subject_result < 33
                    const color = index % 2 === 0
                    return(
                    <tr className={`${color && 'bg-gray-300'}  ${fail && 'bg-red-600 text-white hover:text-red-900 hover:bg-red-200'}  hover:bg-gray-400 `}>
                        <td>{result_class}</td>
                        <td>{result_semester}</td>
                        <td>{subject_name}</td>
                        <td>{subject_result}</td>
                        <td>{subject_ranking}</td>
                    </tr>
                    )
                })}
                
                
            </tbody>
        </table>
    </div>
  )
}

export default Result