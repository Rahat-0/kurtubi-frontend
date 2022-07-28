import React from "react";
import { useState } from "react";
import {HiUserGroup, HiUsers, HiOutlineUserGroup} from 'react-icons/hi'
import {FaUserLock} from 'react-icons/fa'
import CountCard from "./CountCard";
const List = ({ data }) => {

  const cardLogo ={
    All : <HiUserGroup className="inline w-12 h-auto m-2 text-blue-900" />,
    Branch : <HiOutlineUserGroup className="inline w-12 h-auto m-2 text-blue-600" />,
    Class : < HiUsers className="inline w-12 h-auto m-2 text-blue-400" />,
    Block : <FaUserLock className="inline w-12 h-auto m-2 text-red-400" />,

  } 


  const [classes, setClasses] = useState("10");
  const [subject, setsubject] = useState("english");
  const [branch, setbranch] = useState("tangail branch");
  const [search, setsearch] = useState("");
  const Stufiltered =
    data[0].student_id &&
    data.filter((value) => {
      const clases = new RegExp(`^${classes}$`, "g");
      if (
        value.student_id.includes(search) ||
        value.phone.includes(search) ||
        value.first_name.toLowerCase().includes(search.toLowerCase())
      ) {
        if (
          value.branch.toLowerCase().includes(branch.toLowerCase()) &&
          value.classes.match(clases)
        ) {
          return value;
        }
      }
      return null;
    });

  const Teachfiltered =
    data[0].teacher_id &&
    data.filter((value) => {
      if (
        value.teacher_id.includes(search) ||
        value.phone.includes(search) ||
        value.full_name.toLowerCase().includes(search.toLowerCase())
      ) {
        if (
          value.branch.toLowerCase().includes(branch.toLowerCase()) &&
          value.subject.toLowerCase().includes(subject.toLowerCase())
        ) {
          return value;
        }
      }
      return null;
    });

  return (
    <div>
      {/* <!-- here is the main div --> */}
      <h2 className="text-xl p-2 bg-gray-600 tracking-widest rounded-lg my-1 text-white">
        {Stufiltered ? "Student List" : "Teacher List"}
      </h2>

      {Stufiltered && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-white ">
        <CountCard link='/' title="All Students" image={cardLogo.All} count={410} />
        <CountCard link='/' title={`Total Students of ${branch}`} image={cardLogo.Branch} count={43} />
        <CountCard link='/' title={`Total Students of class  ${classes}`} image={cardLogo.Class} count={Stufiltered.length} />
        <CountCard link='/' title="Block Students"  image={cardLogo.Block} count={10} />
      </div>}

      {Teachfiltered && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-white ">
        <CountCard link='/' title="All Teachers" image={cardLogo.All} count={110} />
        <CountCard link='/' title={`Total Teachers of ${branch}`} image={cardLogo.Branch} count={43} />
        <CountCard link='/' title={`Total Teachers of ${subject} subject`} image={cardLogo.Class} count={Teachfiltered.length} />
        <CountCard link='/' title={`Block ${Stufiltered ? "Students" : "Teachers"}`} image={cardLogo.Block} count={10} />
      </div>}
      <div className=" overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="hidden sm:flex justify-between items-center pb-4">
          <div>
            <select
              onChange={(e) => setbranch(e.target.value)}
              defaultValue="Tangail Branch"
              className="outline-none"
              name="dropdown"
              id="dropdown"
            >
              <option value="Tangail branch"> Tangail Branch</option>
              <option value="Dhaka branch">Dhaka Branch</option>
              <option value="Gazipur branch">Gazipur Branch</option>
              <option value="Sokhipur branch">Sokhipur Branch</option>
            </select>
          </div>
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
              placeholder="Search for id or phone"
            />
          </div>
        </div>

        <table className="hidden sm:table w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                    onChange={(e) => setClasses(e.target.value)}
                    defaultValue="10"
                    className="outline-none"
                    name=""
                    id=""
                  >
                    <option value="1">class 1</option>
                    <option value="2">class 2</option>
                    <option value="3">class 3</option>
                    <option value="4">class 4</option>
                    <option value="5">class 5</option>
                    <option value="6">class 6</option>
                    <option value="7">class 7</option>
                    <option value="8">class 8</option>
                    <option value="9">class 9</option>
                    <option value="10">class 10</option>
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
                    onChange={(e) => setsubject(e.target.value)}
                    defaultValue="english"
                    className="outline-none"
                    name=""
                    id=""
                  >
                    <option value="english">Subject [ English ]</option>
                    <option value="math">Subject [ Math ]</option>
                    <option value="bangla">Subject [ Bangla ]</option>
                    <option value="biology">Subject [ Biology ]</option>
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
            {Stufiltered &&
              Stufiltered.map(
                ({
                  first_name,
                  last_name,
                  student_id,
                  classes,
                  gender,
                  phone,
                }) => (
                  <tr
                    key={student_id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="py-4 flex items-center gap-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full ring"
                        src="./video.png"
                        alt="##"
                      />
                      <p> {first_name + " " + last_name} </p>
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
              )}

            {Teachfiltered &&
              Teachfiltered.map(
                ({ full_name, teacher_id, subject, gender, phone }) => (
                  <tr
                    key={teacher_id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="py-4 flex items-center gap-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full ring"
                        src="./video.png"
                        alt="##"
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
                )
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
