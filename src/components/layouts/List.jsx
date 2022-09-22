import React from "react";
import { useState, useRef } from "react";
import  {useReactToPrint} from 'react-to-print'
import { HiUserGroup, HiUsers, HiOutlineUserGroup } from "react-icons/hi";
import { FaUserLock } from "react-icons/fa";
import CountCard from "./CountCard";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import DataError from "./DataError";
import PopupUser from "./PopupUser";
import rootapi from "../../rootAPI";
import PopUpUserMutation from "./PopUpUserMutation";
import content from './content/list.content.json'

const List = (props) => {
  const { allBranch, counts } = props
  const [setBranch] = props.branch
  
  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // redux state actions
  const { language } = useSelector((state) => state.translate.language);
  const { isLoading, users, error } = useSelector((state) => state.getFetchUser);

  // language translation action
  const type = content[language] ? language : "EN"

  // subject dropdown list
  const subject = Array.from(new Set(users.map(({ subject }) => subject)));
  const classes = Array.from(new Set(users.map(({ classes }) => classes)));
  const branch = Array.from(new Set(allBranch.map(({ branch }) => branch)));
  // initial state define
  const [search, setsearch] = useState("");
  const [filterd, setfilterd] = useState({
    subject: "",
    classes: "",
    branch: branch[0] || "",
  });
  const [singleUser, setSingleUser] = useState(false)
  const [addUser, setaddUser] = useState(false)

  // student filter handler
  const Stufiltered =
    users[0] &&
    users[0].student_id &&
    users.filter((value) => {
      const clases = new RegExp(`^${filterd.classes}$`, "g");
      if (
        value.student_id.toString().includes(search) ||
        value.phone.toString().includes(search) ||
        value.name.toLowerCase().includes(search.toLowerCase())
      ) {
        if (
          value.branch.toLowerCase().includes(filterd.branch.toLowerCase()) &&
          value.classes.match(clases)
        ) {
          return value;
        }
      }
      return null;
    });

  // teacher filter handler
  const Teachfiltered =
    users[0] &&
    users[0].teacher_id &&
    users.filter((value) => {
      if (
        value.teacher_id.toString().includes(search) ||
        value.phone.toString().includes(search) ||
        value.full_name.toLowerCase().includes(search.toLowerCase())
      ) {
        if (
          value.branch.toLowerCase().includes(filterd.branch.toLowerCase()) &&
          value.subject.toLowerCase().includes(filterd.subject.toLowerCase())
        ) {
          return value;
        }
      }
      return null;
    });

  // branch handler
  const branchHanlder = (e) => {
    setBranch(e.target.value)
    setfilterd({ ...filterd,  branch: e.target.value });
  };
// card logo items
const cardLogo = {
  All: <HiUserGroup className="inline w-12 h-auto m-2 text-blue-900" />,
  Branch: (
    <HiOutlineUserGroup className="inline w-12 h-auto m-2 text-blue-600" />
  ),
  Class: <HiUsers className="inline w-12 h-auto m-2 text-blue-400" />,
  Block: <FaUserLock className="inline w-12 h-auto m-2 text-red-400" />,
};
  return (
    <div className="relative">
      
     { isLoading && <Loading /> }

     { error && <DataError message={error} />}
      <PopupUser data = {singleUser} state = {[singleUser, setSingleUser]} />
      <PopUpUserMutation data = {addUser} state = {[addUser, setaddUser]} />

      {/* <!-- here is the main div --> */}
      <h2 className="text-xl p-2 bg-gray-600 tracking-widest rounded-lg my-1 text-white">
        {Stufiltered ? content[type].studentList : content[type].teacherList}
      </h2>
      {/* student counter section  */}
      {Stufiltered && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-white ">
          <CountCard
            link="/"
            title={content[type].allStudent}
            image={cardLogo.All}
            count={counts.count_student || 0}
          />
          <CountCard
            link="/"
            title={`${content[type].totalStudentOfBranch} ${filterd.branch}`}
            image={cardLogo.Branch}
            count={counts.count_branch || 0}
          />
          <CountCard
            link="/"
            title={`${content[type].totalStudentOfClass}  ${filterd.classes}`}
            image={cardLogo.Class}
            count={Stufiltered.length}
          />
          <CountCard
            link="/"
            title={content[type].block + ' '+ content[type].students}
            image={cardLogo.Block}
            count={counts.count_block || 0}
          />
        </div>
      )}
      {/* teacher counter section  */}
      {Teachfiltered && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-white ">
          <CountCard
            link="/"
            title={content[type].allTeacher}
            image={cardLogo.All}
            count={counts.count_teacher || 0}
          />
          <CountCard
            link="/"
            title={`${content[type].totalTeacherOfBranch} ${filterd.branch}`}
            image={cardLogo.Branch}
            count={counts.count_branch || 0}
          />
          <CountCard
            link="/"
            title={`${content[type].totalTeacherOfSubject} ${filterd.subject} `}
            image={cardLogo.Class}
            count={Teachfiltered.length}
          />
          <CountCard
            link="/"
            title={`${content[type].block} ${Stufiltered ? content[type].students : content[type].teachers}`}
            image={cardLogo.Block}
            count={counts.count_block || 0}
          />
        </div>
      )}

      {/* user filter section start from here  */}
      <div className=" overflow-x-auto relative shadow-md sm:rounded-lg">
        {/* user branch section  */}
        <div className="border rounded-t-lg flex flex-col sm:flex-row text-center justify-center sm:justify-around items-center py-4">
          <div>
            <select
              onChange={branchHanlder}
              value={filterd.branch}
              className="outline-none capitalize"
              name="dropdown"
              id="dropdown"
            >
              <option value="" disabled>{content[type].selectBranch}</option>
              {branch.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
          <button className="text-red-900 font-bold p-1" onClick={handlePrint}>{content[type].print}</button>
          <button className="text-red-900 font-bold p-1" onClick={()=>setaddUser(users[0] && users[0].student_id ? {user : 'student'} : {user : 'teacher'})}>{content[type].add}</button>
          {/* user search section  */}
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 "
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => setsearch(e.target.value)}
              type="text"
              id="table-search"
              className="block p-2 pl-10 outline-none w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
              placeholder={content[type].searchPlaceHolder}
            />
          </div>
        </div>
        {/* user table start from here  */}
        <table ref={componentRef} className=" sm:table w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {/* student table headers start from here */}
            {Stufiltered && (
              <tr>
                <th scope="col" className="py-3 px-6">
                 {content[type].students + ' ' + content[type].name}
                </th>
                <th scope="col" className="py-3 px-6">
                  {content[type].id}
                </th>
                <th scope="col" className="py-3 px-6">
                  <select
                    onChange={(e) =>
                      setfilterd({ ...filterd, classes: e.target.value })
                    }
                    value={filterd.classes}
                    className="outline-none bg-indigo-200 border"
                    name=""
                    id=""
                  >
                  <option className="text-red-400"  value=''> {content[type].selectClass} </option>

                    {classes &&
                      classes.map((classes) => (
                        <option key={classes} value={classes}>
                          class {classes}
                        </option>
                      ))}
                  </select>
                </th>
                <th scope="col" className="hidden lg:table-cell py-3 px-6">
                  {content[type].gender}
                </th>
                <th scope="col" className="py-3 px-6">
                  {content[type].phone}
                </th>
                <th scope="col" className="hidden lg:table-cell py-3 px-6">
                  {content[type].action}
                </th>
              </tr>
            )}
            {/* teacher table header start from here */}
            {Teachfiltered && (
              <tr>
                <th scope="col" className="py-3 px-6">
                {content[type].teachers + ' ' + content[type].name}
                </th>
                <th scope="col" className="py-3 px-6">
                 {content[type].id}
                </th>
                <th scope="col" className="py-3 px-6">
                  <select
                    onChange={(e) =>
                      setfilterd({ ...filterd, subject: e.target.value })
                    }
                    value={filterd.subject}
                    className="outline-none"
                    name=""
                    id=""
                  >
                    <option className="bg-red-400" value="">{content[type].allSubject}</option>
                    {subject &&
                      subject.map((subject) => (
                        <option key={subject} value={subject}>
                          {content[type].subject} [ {subject} ]
                        </option>
                      ))}
                  </select>
                </th>
                <th scope="col" className="hidden lg:table-cell py-3 px-6">
                  {content[type].gender}
                </th>
                <th scope="col" className="py-3 px-6">
                  {content[type].phone}
                </th>
                <th scope="col" className="hidden lg:table-cell py-3 px-6">
                  {content[type].action}
                </th>
              </tr>
            )}
          </thead>
          <tbody>
            {/* student table body start from here  */}
            {Stufiltered &&
              Stufiltered.map(
                (studentInfo) => {
                  const {name, student_id, classes, gender, phone, image, isblock} =  studentInfo
                  return(
                  <tr
                    key={student_id}
                    className={` ${isblock ? 'bg-red-400 text-white hover:text-white hover:bg-red-600' : 'hover:text-gray-900 bg-white'} border-b hover:bg-gray-100 ` }
                  >
                    <td
                      onClick={()=> setSingleUser(studentInfo)}
                      className="py-4 flex items-center gap-3 px-6 cursor-pointer font-medium whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full ring"
                        loading="lazy"
                        src={`${rootapi}/images/${image}`}
                        alt={image}
                      />
                      <p> {name} </p>
                    </td>
                    <td className="py-4 px-6"> {student_id} </td>
                    <td className="py-4 px-6">{classes}</td>
                    <td className="hidden lg:table-cell py-4 px-6">{gender}</td>
                    <td className="py-4 px-6">{phone}</td>
                    <td className="hidden lg:table-cell py-4 px-6">
                      <a
                        href="##"
                        className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        {content[type].edit}
                      </a>
                    </td>
                  </tr>
                  )
                  
                }
              )}
            {/* teacher table body start from here  */}
            {Teachfiltered &&
              Teachfiltered.map((teacherInfo) => {
                  const { full_name, teacher_id, subject, gender, phone, image, isblock } = teacherInfo;
                  return(
                  <tr
                    key={teacher_id}
                    className={` ${isblock ? 'bg-red-400 text-white hover:text-white hover:bg-red-600' : 'hover:text-gray-900 bg-white'} border-b hover:bg-gray-100 ` }
                  >
                    <th
                      onClick={()=> setSingleUser(teacherInfo)}
                      scope="row"
                      className="py-4 flex items-center gap-3 px-6 font-medium whitespace-nowrap cursor-pointer"
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full ring"
                        loading="lazy"
                        src={`${rootapi}/images/${image}`}
                        alt={image}
                      />
                      <p> {full_name} </p>
                    </th>
                    <td className="py-4 px-6"> {teacher_id} </td>
                    <td className="py-4 px-6">{subject}</td>
                    <td className="hidden lg:table-cell py-4 px-6">{gender}</td>
                    <td className="py-4 px-6">{phone}</td>
                    <td className="hidden lg:table-cell py-4 px-6">
                      <a
                        href="##"
                        className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        {content[type].edit}
                      </a>
                    </td>
                  </tr>
              )}
              )}
          </tbody>
        </table>
      </div>

      {/* <!-- mobile phone div component --> */}
      <div className=" sm:hidden bg-red-200 text-center rounded-xl p-3">
        <h4 className="text-red-900 text-lg ">
         {content[type].alert1}
        </h4>
        <p className="text-red-900 text-sm">
          {content[type].alert2}
        </p>
      </div>
    </div>
  );
};

export default List;
