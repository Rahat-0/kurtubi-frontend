import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import rootapi from '../../rootAPI'
import PopUpConfirm from '../layouts/PopupConfirm'
import TokenHandler from '../utils/tokenHandler'

const AddResult = () => {

    const [data, setData] = useState([])
    const [updateBtn, setUpdateBtn] = useState(false)
    const [popup, setPopup] = useState(false)
    const [warn, setWarn] = useState(false)
    const [isTeacher, setisTeacher] = useState(false)
    const [inputValue, setInputValue] = useState({
        student_id: "",
        teacher_id: "",
        result_class: "",
        result_semester: "",
        subject_name: "",
        subject_result: "",
        subject_ranking: "",
    })


    const formHandler = (e) => {
        e.preventDefault()
        if (e.target.lastElementChild.name === 'update') { return updateHandler(e.target.lastElementChild.value) };
        if (!data[0]) { return setData([...data, inputValue]) };
        if (data.find((ary) => ary.student_id === inputValue.student_id)) {
            setWarn(true)
            toast.warn('student ID duplicate detected!', {position : "top-center"})
        } else {
            setData([...data, inputValue])
        }

    }

    const deleteHandler = (e) => {
        const stuId = e.target.value;
        setData(data.filter((data) => data.student_id !== stuId))
    }

    const updateHandler = (stuId) => {
        const updateData = data.findIndex((index) => index.student_id === stuId)
        data[updateData] = inputValue
        setUpdateBtn(false)
    }

    useEffect(() => {
        const test = async ()=>{
            const {teacher_id, subject} = await TokenHandler()
            const token = await TokenHandler()
            console.log(token);
            setInputValue({...inputValue, teacher_id, subject_name: subject})
            setisTeacher(teacher_id && true)
        }
    
        test()
        
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    const handleSave = async () => {
        try {
        const {token} = await TokenHandler()
            const apiType = isTeacher ? "teacheraddmany" : "addmany"
            const res = await axios.post(`${rootapi}/api/result/${apiType}`, data, { headers: {'accessToken': token} })
            setData([])
            toast.success(`${res.data.affectedRows} result added successful!`, {autoClose : false, position : "top-center"})
        } catch (error) {
            const err = error.response.data.error;
            const studentIdError = (err[0].student_id && err.map((id)=> id.student_id)) 
            toast.error( (studentIdError && `student doesn't exist ID (${studentIdError})`) || err , {position : 'top-center', autoClose : false})
        }
    }

    const popUpData = {
        message: 'do you want to add all results ?',
        btn: 'Add All',
        isShow: popup,
        action: handleSave
    }

    return (
        <div>
            <h2 className="text-xl p-2 bg-gray-600 tracking-widest rounded-lg my-1 text-white"> Add Result </h2>

            <div className='flex flex-col-reverse md:flex-row relative justify-between gap-2 top-0 min-h-screen md:max-h-screen overflow-hidden'>
                <div className='overflow-y-scroll relative top-0 h-screen  md:w-8/12'>
                    <table className=" w-full text-xs text-left text-gray-800">
                        <thead className=" text-gray-700 uppercase bg-gray-50 ">
                            <tr>
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
                            {data.map(
                                (value, index) => {
                                    const { 
                                        student_id,
                                        teacher_id,
                                        result_semester,
                                        result_class,
                                        subject_name,
                                        subject_result,
                                        subject_ranking } = value;

                                    const inputUpdate = () => {
                                        setInputValue(value)
                                        setUpdateBtn(true)
                                    }



                                    return (
                                        <tr
                                            key={index}
                                            className={` ${index % 2 === 0 && 'bg-gray-300'} ${subject_result < 33 && 'bg-red-700 text-white hover:bg-red-500'} bg-white border-b hover:bg-red-100`}
                                        >
                                        <td className="py-2 px-3">
                                            <button className='w-full' value={student_id} onClick={inputUpdate} > {student_id}</button>
                                        </td>
                                            <td className="py-2 px-3">{teacher_id}</td>
                                            <td className="py-2 px-3">{result_class}</td>
                                            <td className="py-2 px-3">{result_semester}</td>
                                            <td className="py-2 px-3">{subject_name}</td>
                                            <td className="py-2 px-3">{subject_result}</td>
                                            <td className="py-2 px-3 relative">{subject_ranking} <button value={student_id} onClick={deleteHandler} className='text-white bg-red-800 p-1 absolute right-0 top-0 w-7 h-full inline-block'>x</button> </td>

                                        </tr>
                                    )
                                }

                            )}
                            {!data[0] &&
                                <div className=' text-2xl md:text-4xl  text-gray-400 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>No Record Added</div>}
                        </tbody>
                    </table>
                </div>



                <form onSubmit={formHandler} className='md:w-4/12 md:absolute md:top-0 md:right-0 md:p-2'>
                    <div className="mb-2">
                        <label for="stu_id" className="block  text-sm font-medium text-gray-900 dark:text-gray-300">student ID {warn && <span className='text-red-800'>(duplicate student ID)</span>} </label>
                        <input value={inputValue.student_id} onChange={(e) => {
                            setWarn(false)
                            setInputValue({ ...inputValue, student_id: e.target.value })
                        }} type="number" id="stu_id" className={` ${warn && 'bg-red-200 border-red-800'}  outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} required />
                    </div>
                    <div className="mb-2">
                        <label for="stu_id" className="block  text-sm font-medium text-gray-900 dark:text-gray-300">teacher ID</label>
                       { isTeacher ?
                        <input disabled value={inputValue.teacher_id} onChange={(e) => setInputValue({ ...inputValue, teacher_id: e.target.value })} type="number" id="stu_id" className="outline-none bg-green-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required /> :
                        <input value={inputValue.teacher_id} onChange={(e) => setInputValue({ ...inputValue, teacher_id: e.target.value })} type="number" id="stu_id" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        }
                    </div>
                    <div className="mb-2">
                        <label for="stu_id" className="block  text-sm font-medium text-gray-900 dark:text-gray-300">class</label>
                        <input value={inputValue.result_class} onChange={(e) => setInputValue({ ...inputValue, result_class: e.target.value })} type="number" id="stu_id" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-2">
                        <label for="stu_id" className="block  text-sm font-medium text-gray-900 dark:text-gray-300">semester</label>
                        <input value={inputValue.result_semester} onChange={(e) => setInputValue({ ...inputValue, result_semester: e.target.value })} type="number" id="stu_id" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-2">
                        <label for="stu_id" className="block  text-sm font-medium text-gray-900 dark:text-gray-300">subject</label>
                        { isTeacher ? 
                        <input disabled value={inputValue.subject_name} type="text" id="stu_id" className="outline-none bg-green-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required /> :
                            <input value={inputValue.subject_name} onChange={(e) => setInputValue({ ...inputValue, subject_name: e.target.value })} type="text" id="stu_id" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        }
                    </div>
                    <div className="mb-2">
                        <label for="stu_id" className="block  text-sm font-medium text-gray-900 dark:text-gray-300">score</label>
                        <input value={inputValue.subject_result} onChange={(e) => setInputValue({ ...inputValue, subject_result: e.target.value })} type="number" id="stu_id" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-2">
                        <label for="stu_id" className="block  text-sm font-medium text-gray-900 dark:text-gray-300">ranking</label>
                        <input value={inputValue.subject_ranking} onChange={(e) => setInputValue({ ...inputValue, subject_ranking: e.target.value })} type="number" id="stu_id" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <button type="submit" name='add' onClick={() => setUpdateBtn(false)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                    {updateBtn && <button value={inputValue.student_id} type="submit" name='update' className="text-white md:mx-2 my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>}

                </form>
            </div>

            { data[0] ? 
            <p onClick={() => setPopup({ popup: true })} className=" cursor-pointer my-2 text-white  bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Check & Submit</p> 
            :
            <p className=" cursor-not-allowed my-2 text-white  bottom-0 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Check & Submit</p>}
            <PopUpConfirm data={popUpData} state = {[0, 0]} />
            <ToastContainer />
        </div>
    )
}

export default AddResult