import React from 'react'
import rootapi from '../../rootAPI';

const PopupUser = (props) => {
  const [singleUser, setSingleUser] = props.state
  const {branch, classes, dob, email, gender, image, isblock, name, phone, roll, student_id,  time,
        teacher_id, designation, education, ispermit, varsity_name, full_name, subject, join_date} = props.data;

  return (

    <div className={` bg-red-50 ${singleUser ? 'translate-x-0' : 'translate-x-full'} md:block hidden p-1 overflow-scroll  lg:p-5 z-10 fixed bg-white transform transition-all top-14 right-0 w-5/12 h-screen`}>
      <button onClick={()=> setSingleUser(false)} className='absolute z-10 right-4 top-4 bg-red-700 text-white w-6 h-6 hover:bg-gray-500'>X</button>
      <div>
        <div class='relative lg:flex lg:items-start lg:space-x-2'>
          <div>
            <img class='w-full lg:w-36 h-auto lg:h-28 object-cover rounded-lg'
            
              src={`${rootapi}/images/${image}`}
              alt="m" />
          </div>
          <div class="text-center">
            <p class="py-1 uppercase font-bold text-3xl lg:text-2xl lg:py-0 "> {name} </p>
            <div class="lg:absolute lg:bottom-0 lg:flex font-semibold lg:justify-evenly ">
              <p class="bg-pink-200 p-1 lg:mx-1 my-2 lg:my-0 rounded capitalize">{branch}</p>
              <p class="bg-green-100 p-1 lg:mx-1 my-2 lg:my-0 rounded">{isblock === 0 ? 'Active' : 'block'} </p>
              <p class=" bg-indigo-200 p-1 lg:mx-1 my-2 lg:my-0 rounded">{student_id ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        </div>

{/* student information section  */}
      { student_id && 
        <table class="w-full my-6 text-left ">
          <tr class=" border-2 border-transparent  bg-gradient-to-r to-gray-50 from-gray-300">
            <th>Name</th>
            <td>: {name}</td>
          </tr>
          <tr class=" border-2 border-transparent ">
            <th>Student ID</th>
            <td>: {student_id}</td>
          </tr>
          <tr class=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
            <th>Class</th>
            <td>: {classes}</td>
          </tr>
          <tr class=" border-2 border-transparent ">
            <th>Roll</th>
            <td>: {roll}</td>
          </tr>

          <tr class=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
            <th>Gender</th>
            <td>: {gender}</td>
          </tr>
          <tr class=" border-2 border-transparent  ">
            <th>Phone</th>
            <td>: {phone}</td>
          </tr>

          <tr class=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
            <th>Email</th>
            <td>: {email}</td>
          </tr>
          <tr class=" border-2 border-transparent ">
            <th>DOB</th>
            <td>: {dob}</td>
          </tr>
          <tr class=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
            <th>Join</th>
            <td>: {time}</td>
          </tr>
        </table>}

{/* teacher infromaiton section  */}
      {teacher_id && 
      <table class="w-full my-6 text-left ">
      <tr class=" border-2 border-transparent  bg-gradient-to-r to-gray-50 from-gray-300">
        <th>Name</th>
        <td>: {full_name}</td>
      </tr>
      <tr class=" border-2 border-transparent ">
        <th>Teacher ID</th>
        <td>: {teacher_id}</td>
      </tr>
      <tr class=" border-2 border-transparent ">
        <th>Result add</th>
        <td>: {ispermit === 0 ? 'Has permit to update' : 'unable to permited'}</td>
      </tr>
      <tr class=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
        <th>Designation</th>
        <td>: {designation}</td>
      </tr>
      <tr class=" border-2 border-transparent ">
        <th>Subject</th>
        <td>: {subject}</td>
      </tr>
      <tr class=" border-2 border-transparent ">
        <th>Education</th>
        <td>: {education}</td>
      </tr>
      <tr class=" border-2 border-transparent ">
        <th>University</th>
        <td>: {varsity_name}</td>
      </tr>

      <tr class=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
        <th>Gender</th>
        <td>: {gender}</td>
      </tr>
      <tr class=" border-2 border-transparent  ">
        <th>Phone</th>
        <td>: {phone}</td>
      </tr>

      <tr class=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
        <th>Email</th>
        <td>: {email}</td>
      </tr>
      <tr class=" border-2 border-transparent ">
        <th>DOB</th>
        <td>: {dob}</td>
      </tr>
      <tr class=" border-2 border-transparent bg-gradient-to-r to-gray-50 from-gray-300">
        <th>Join</th>
        <td>: {join_date}</td>
      </tr>
      </table> } 
      
        <button class="bg-red-300 block w-full rounded my-2 text-gray-800 border">Show Advance</button>
      </div>
      

    </div>


  )
}

export default PopupUser