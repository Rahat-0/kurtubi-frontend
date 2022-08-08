import React from "react";
import { useState, useRef } from "react";
import  {useReactToPrint} from 'react-to-print'
import { HiUserGroup, HiUsers, HiOutlineUserGroup } from "react-icons/hi";
import { FaUserLock } from "react-icons/fa";
import CountCard from "./CountCard";
import { useDispatch, useSelector } from "react-redux";
import { setBranch } from "../../features/students/branchSlice";
import Loading from "./Loading";
import DataError from "./DataError";
import PopupUser from "./PopupUser";

// eslint-disable-next-line no-unused-vars
const localRootAPI = 'http://localhost:5000'
// eslint-disable-next-line no-unused-vars
const serverRootAPI = 'http://api.kurtubi.nuisters.com'
const currentRootAPI = localRootAPI;

const List = ({ allBranch, counts }) => {
  
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const dispatch = useDispatch();

  // redux state actions
  const { isLoading, users, error } = useSelector((state) => state.student);

  // card logo items
  const cardLogo = {
    All: <HiUserGroup className="inline w-12 h-auto m-2 text-blue-900" />,
    Branch: (
      <HiOutlineUserGroup className="inline w-12 h-auto m-2 text-blue-600" />
    ),
    Class: <HiUsers className="inline w-12 h-auto m-2 text-blue-400" />,
    Block: <FaUserLock className="inline w-12 h-auto m-2 text-red-400" />,
  };

  // subject dropdown list
  const subject = Array.from(new Set(users.map(({ subject }) => subject)));
  const classes = Array.from(new Set(users.map(({ classes }) => classes)));
  const branch = Array.from(new Set(allBranch.map(({ branch }) => branch)));
  // initial state define
  const [search, setsearch] = useState("");
  const [filterd, setfilterd] = useState({
    subject: subject[0] || "",
    classes: classes[0] || "10",
    branch: "tangail branch",
  });
  const [singleUser, setSingleUser] = useState(false)

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
    dispatch(setBranch(e.target.value));
    setfilterd({ ...filterd, subject: subject[0], branch: e.target.value });
  };

  return (
    <div className="relative">
      
     { isLoading && <Loading /> }

     { error && <DataError message={error} />}
     <PopupUser data = {singleUser} state = {[singleUser, setSingleUser]} />

      {/* <!-- here is the main div --> */}
      <h2 className="text-xl p-2 bg-gray-600 tracking-widest rounded-lg my-1 text-white">
        {Stufiltered ? "Student List" : "Teacher List"}
      </h2>
      {/* student counter section  */}
      {Stufiltered && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-white ">
          <CountCard
            link="/"
            title="All Students"
            image={cardLogo.All}
            count={counts.count_student || 0}
          />
          <CountCard
            link="/"
            title={`Total Students of ${filterd.branch}`}
            image={cardLogo.Branch}
            count={counts.count_branch || 0}
          />
          <CountCard
            link="/"
            title={`Total Students of class  ${filterd.classes}`}
            image={cardLogo.Class}
            count={Stufiltered.length}
          />
          <CountCard
            link="/"
            title="Block Students"
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
            title="All Teachers"
            image={cardLogo.All}
            count={counts.count_teacher || 0}
          />
          <CountCard
            link="/"
            title={`Total Teachers of ${filterd.branch}`}
            image={cardLogo.Branch}
            count={counts.count_branch || 0}
          />
          <CountCard
            link="/"
            title={`Total Teachers of ${filterd.subject} subject`}
            image={cardLogo.Class}
            count={Teachfiltered.length}
          />
          <CountCard
            link="/"
            title={`Block ${Stufiltered ? "Students" : "Teachers"}`}
            image={cardLogo.Block}
            count={counts.count_block || 0}
          />
        </div>
      )}

      {/* user filter section start from here  */}
      <div className=" overflow-x-auto relative shadow-md sm:rounded-lg">
        {/* user branch section  */}
        <div className="hidden sm:flex justify-between items-center pb-4">
          <div>
            <select
              onChange={branchHanlder}
              value={filterd.branch}
              className="outline-none capitalize"
              name="dropdown"
              id="dropdown"
            >
              {branch.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handlePrint}>print</button>
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
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => setsearch(e.target.value)}
              type="text"
              id="table-search"
              className="block p-2 pl-10 outline-none w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
              placeholder="Search for name, id or phone"
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
                  Student name
                </th>
                <th scope="col" className="py-3 px-6">
                  ID
                </th>
                <th scope="col" className="py-3 px-6">
                  <select
                    onChange={(e) =>
                      setfilterd({ ...filterd, classes: e.target.value })
                    }
                    value={filterd.classes}
                    className="outline-none"
                    name=""
                    id=""
                  >
                    {classes &&
                      classes.map((classes) => (
                        <option key={classes} value={classes}>
                          class {classes}
                        </option>
                      ))}
                  </select>
                </th>
                <th scope="col" className="hidden lg:table-cell py-3 px-6">
                  Gender
                </th>
                <th scope="col" className="py-3 px-6">
                  Phone
                </th>
                <th scope="col" className="hidden lg:table-cell py-3 px-6">
                  Action
                </th>
              </tr>
            )}
            {/* teacher table header start from here */}
            {Teachfiltered && (
              <tr>
                <th scope="col" className="py-3 px-6">
                  Teacher name
                </th>
                <th scope="col" className="py-3 px-6">
                  ID
                </th>
                <th scope="col" className="py-3 px-6">
                  <select
                    onChange={(e) =>
                      setfilterd({ ...filterd, subject: e.target.value })
                    }
                    defaultValue={filterd.subject}
                    className="outline-none"
                    name=""
                    id=""
                  >
                    {subject &&
                      subject.map((subject) => (
                        <option key={subject} value={subject}>
                          Subject [ {subject} ]
                        </option>
                      ))}
                  </select>
                </th>
                <th scope="col" className="hidden lg:table-cell py-3 px-6">
                  Gender
                </th>
                <th scope="col" className="py-3 px-6">
                  Phone
                </th>
                <th scope="col" className="hidden lg:table-cell py-3 px-6">
                  Action
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
                    <th
                      onClick={()=> setSingleUser(studentInfo)}
                      scope="row"
                      className="py-4 flex items-center gap-3 px-6 cursor-pointer font-medium whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full ring"
                        
                        src={`${currentRootAPI}/images/${image}`}
                        alt={image}
                      />
                      <p> {name} </p>
                    </th>
                    <td className="py-4 px-6"> {student_id} </td>
                    <td className="py-4 px-6">{classes}</td>
                    <td className="hidden lg:table-cell py-4 px-6">{gender}</td>
                    <td className="py-4 px-6">{phone}</td>
                    <td className="hidden lg:table-cell py-4 px-6">
                      <a
                        href="##"
                        className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
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

                        src={`${currentRootAPI}/images/${image}`}
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
                        Edit
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
        <h4 className="text-red-900 text-3xl ">
          Please use laptop/ipad/tab to view information!!
        </h4>
        <p className="text-red-900 text-xl">
          Unable to view data due to small screen!!!
        </p>
      </div>
    </div>
  );
};

export default List;
