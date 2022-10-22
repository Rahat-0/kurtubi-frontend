import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import content from './language.userProfile.json'
const Result = (props) => {
    const result = props.data || [];
    const name = props.name;
    const student_id = props.student_id;
    const {language} = useSelector((state)=> state.translate.language)
    const type = content[language] ? language : "EN"

    const semester = Array.from(new Set(result.map(({result_semester})=> result_semester)))
    const classes = Array.from(new Set(result.map(({result_class})=> result_class)))
    const subject = Array.from(new Set(result.map(({subject_name})=> subject_name)))
    
    const [inputs, setinputs] = useState({
        classes : '',
        semester : '',
        subject : ''
    })

    const filteredData = result.filter((value)=>{
        if(value.result_class.toString().includes(inputs.classes) &&
          value.result_semester.toString().includes(inputs.semester) &&
          value.subject_name.toLocaleLowerCase().includes(inputs.subject.toLocaleLowerCase())){
            return value
        }
        return null
    })
    
  return (
    <div className=" bg-gray-300 h-10 text-sm md:text-base">
        <h3 className="text-center md:text-left text-3xl p-2 bg-green-200 md:bg-white">{content[type].results}</h3>
        <p className='p-2'> {content[type].resultOrgLocation} <span className='font-extrabold uppercase'>{name}</span>({student_id}), { content[type].resultWelcome} </p>

        <div className='flex justify-evenly my-2 bg-blue-50 text-blue-900 font-bold'>
            <label htmlFor="class">{content[type].resultClass}</label> 
            <select onClick={(e)=> setinputs({...inputs, classes : e.target.value })} className=' outline-none bg-transparent block' id="class">
                <option value="">{content[type].resultAll}</option>
                {classes.map((classes, index)=>(
                    <option key={index} value={classes}> {classes} </option>
                ))}
                
            </select>

            <label htmlFor="semester">{content[type].resultSemester}</label> 
            <select onClick={(e)=> setinputs({...inputs, semester : e.target.value })} className=' outline-none bg-transparent block' id="semester">
                <option value="">{content[type].resultAll}</option>
                {semester.map((semester)=>(
                    <option key={semester} value={semester}> {semester} </option>
                ))}
            </select>

            <label htmlFor="subject">{content[type].resultSubject}</label> 
            <select onClick={(e)=> setinputs({...inputs, subject : e.target.value })} className=' outline-none bg-transparent block' id="subject">
                <option value="">{content[type].resultAll}</option>
                {subject.map((subject)=>(
                    <option key={subject} value={subject}> {subject} </option>
                ))}
            </select> 
        </div>
        <table className='w-full overflow-scroll text-center rounded bg-indigo-50 shadow-lg '>
            <thead>
                <tr>
                    <th>{content[type].resultClass}</th>
                    <th>{ content[type].resultSemester}</th>
                    <th>{ content[type].resultSubject}</th>
                    <th>{ content[type].resultScore}</th>
                    <th>{ content[type].resultRanking}</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map(({result_semester, result_class, subject_name, subject_ranking, subject_result}, index)=>{
                    const fail = subject_result < 33
                    const color = index % 2 === 0
                    return(
                    <tr key={index} className={`${color && 'bg-gray-300'}  ${fail && 'bg-red-600 text-white hover:text-red-900 hover:bg-red-200'}  hover:bg-gray-400 `}>
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
        {!filteredData[0] && 
                <div className='h-96 bg-blue-50 flex justify-center items-center '>
                    <p  className='text-2xl text-gray-400'>Result Not Found!</p>
                </div>
                 }
    </div>
  )
}

export default Result