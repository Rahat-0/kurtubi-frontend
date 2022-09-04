import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
const Result = (props) => {
    const result = props.data;
    const name = props.name;
    const {language} = useSelector((state)=> state.language)
    const changelg = language.language === 'EN'
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
    <div className=" bg-gray-300 h-10 text-sm md:text-base">
        <h3 className="text-center md:text-left text-3xl p-2 bg-green-200 md:bg-white">{changelg ? 'রেজাল্টস' : 'Results'}</h3>
        <p className='p-2'> { changelg ? 'কুরতুবী মাদরাসা, টাংগাইল ।' : 'Kurtubi madrasah, tangail.'} <span className='font-extrabold uppercase'>{name}</span>({result[0].student_id}), { changelg ? 'টিচিং ম্যানেজমেন্ট সিস্টেম ব্যাবহার করার জন্য আপনাকে সাগতম!' : 'welcome to use Teaching Management System.'} </p>

        <div className='flex justify-evenly my-2 bg-blue-50 text-blue-900 font-bold'>
            <label htmlFor="class">{changelg ? 'ক্লাস' : 'Class'}</label> 
            <select onClick={(e)=> setinputs({...inputs, classes : e.target.value })} className=' outline-none bg-transparent block' id="class">
                <option value="">{changelg ? 'সব' : 'all'}</option>
                {classes.map((classes, index)=>(
                    <option key={index} value={classes}> {classes} </option>
                ))}
                
            </select>

            <label htmlFor="semester">{changelg ? 'সেমিস্টার' : 'Semester'}</label> 
            <select onClick={(e)=> setinputs({...inputs, semester : e.target.value })} className=' outline-none bg-transparent block' id="semester">
                <option value="">{changelg ? 'সব' : 'all'}</option>
                {semester.map((semester)=>(
                    <option key={semester} value={semester}> {semester} </option>
                ))}
            </select>

            <label htmlFor="subject">{changelg ? 'বিষয়' : 'Subject'}</label> 
            <select onClick={(e)=> setinputs({...inputs, subject : e.target.value })} className=' outline-none bg-transparent block' id="subject">
                <option value="">{changelg ? 'সব' : 'all'}</option>
                {subject.map((subject)=>(
                    <option key={subject} value={subject}> {subject} </option>
                ))}
            </select> 
        </div>
        <table className='w-full overflow-scroll text-center rounded bg-indigo-50 shadow-lg '>
            <thead>
                <tr>
                    <th>{changelg ? 'ক্লাস' : 'class'}</th>
                    <th>{ changelg ? 'সেমিস্টার' : 'semester'}</th>
                    <th>{ changelg ? 'বিষয়' : 'subject'}</th>
                    <th>{ changelg ? 'নাম্বার' : 'score'}</th>
                    <th>{ changelg ? 'র‍্যাংকিং' : 'ranking'}</th>
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
    </div>
  )
}

export default Result