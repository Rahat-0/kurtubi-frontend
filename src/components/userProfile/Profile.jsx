import React from 'react'
import { useState } from 'react'

const Profile = () => {
    const [data, setData] = useState({

    })
  return (
    <form onSubmit={(e)=>e.preventDefault()} className="md:w-8/12">
            <h3 className="text-center md:text-left text-3xl p-2 bg-green-200 md:bg-white">
              Public profile
            </h3>
            <div className="flex flex-col md:flex-row md:w-9/12  justify-center items-center">
              <div className="flex justify-center w-56 h-56 m-2">
                <img
                  className=" shadow-2xl bg-cover w-60 h-60 object-cover text-center border-8 rounded-full"
                  src={`../image/${data.profileImage}`}
                  alt="profile pictures"
                />
              </div>
              <div className="text-white mt-3">
                <button className=" md:w-52 block md:ml-10 md:my-6 bg-green-500 w-80 my-2 rounded-lg py-2 hover:bg-green-800">
                  Change picture
                </button>

                {data ? 
                <>
                  <button
                    
                    className=" md:w-52 block md:ml-10 md:my-6 bg-red-500 w-80 my-2 rounded-lg py-2 hover:bg-red-800"
                  >
                    Cancel
                  </button>

                  <button
                    
                    type='submit'
                    className=" md:w-52 block md:ml-10 md:my-6 bg-red-500 w-80 my-2 rounded-lg py-2 hover:bg-red-800"
                  >
                    Save
                  </button>
                </>
                :
                  <button
                  className=" md:w-52 block md:ml-10 md:my-6 bg-red-500 w-80 my-2 rounded-lg py-2 hover:bg-red-800"
                  >
                   Edit profile
                  </button>
                }
                

                
              </div>
            </div>
            <div className="flex flex-col  justify-center md:items-start items-center">
              {data ? 
// update avtivated section
                <>
                  <div className="flex flex-col md:m-2 md:flex-row md:w-9/12 md:space-x-5 justify-center items-center ">
      {/* full Name component */}
                    <ActiveInputComponent name={data.name} data={data} setData={setData} type='text' title="Full Name" field='name' />
      {/* schoolID component */}
                    <DisableInputComponent name={data.schoolId} data={data} setData={setData} type='number' title="SchoolID" field='schoolId' />
                  </div>
      {/* email component */}          
                  <ActiveInputComponentTwo name={data.email} data={data} setData={setData} type='email' title="Email" field='email' />
      {/* User Type component */}
                  <DisableInputComponentTwo name={data.userType} data={data} setData={setData} type='text' title="User Type" field='userType' />
      {/* mobileNumber component */}
                  <ActiveInputComponentTwo name={data.mobile} data={data} setData={setData} type='number' title="Mobile" field='mobile' />
                  
      {/* gender component */}
                  <div className="md:w-full md:m-2">
                    <label className="block font-bold">gender</label>
                    <select
                      className="w-80 md:w-9/12 rounded-lg px-2 py-2 bg-green-100 outline-none"
                      onChange={(e) => setData({ ...data, gender: e.target.value })}
                      value={data.gender}
                    >
                      <option>male</option>
                      <option>female</option>
                    </select>
                  </div>
      {/* bio component */}
                  <div className="md:w-full md:m-2">
                    <label className="block font-bold">Bio</label>
                    <textarea
                      className="w-80 md:w-9/12 rounded-lg px-2 py-2 bg-green-100 outline-none"
                      onChange={(e) => setData({ ...data, bio: e.target.value })}
                      value={data.bio}
                      type="textarea"
                    />
                  </div>
                </>
              
              :
// updata deactivate section 
              <>
                  <div className="flex flex-col md:m-2 md:flex-row md:w-9/12 md:space-x-5 justify-center items-center ">
                    <DisableInputComponent name={data.name} data={data} setData={setData} type='text' title="Full Name" field='name' />
                    <DisableInputComponent name={data.schoolId} data={data} setData={setData} type='number' title="SchoolID" field='schoolId' />
                  </div>
                  
                  <DisableInputComponentTwo  name={data.email} data={data} setData={setData} type='email' title="Email" field='email' />

                  <DisableInputComponentTwo name={data.userType} data={data} setData={setData} type='text' title="User Type" field='userType' />

                  <DisableInputComponentTwo  name={data.mobile} data={data} setData={setData} type='number' title="Mobile" field='mobile' />
                  

                  <div className="md:w-full md:m-2">
                    <label className="block font-bold">gender</label>
                    <select
                      className="w-80 md:w-9/12 rounded-lg px-2 py-2 bg-pink-100 outline-none"
                      onChange={(e) => setData({ ...data, gender: e.target.value })}
                      value={data.gender}
                      disabled
                    >
                      <option>male</option>
                      <option>female</option>
                    </select>
                  </div>

                  <div className="md:w-full md:m-2">
                    <label className="block font-bold">Bio</label>
                    <textarea
                      className="w-80 md:w-9/12 rounded-lg px-2 py-2 bg-pink-100 outline-none"
                      onChange={(e) => setData({ ...data, bio: e.target.value })}
                      value={data.bio}
                      type="textarea"
                      disabled
                    />
                  </div>
                
              </>
              }
            </div>
          </form>
  )
}

// active input prototype component
const ActiveInputComponent =({name, data, setData, type, title, field})=>{
    return(
      <div className="md:w-6/12">
        <label className="font-bold">{title}</label>
          <input
            className="block w-80 md:w-full rounded-lg px-2 py-2 bg-green-100 outline-none"
            onChange={(e) => setData({ ...data, [field] : e.target.value })}
            value={name}
            type={type}
          />
        
      </div>
    )
  }
  
  // deactive input prototype component
  const DisableInputComponent =({name, data, setData, type, title, field})=>{
    return(
      <div className="md:w-6/12">
        <label className="font-bold">{title}</label>
          <input
            className="block w-80 md:w-full rounded-lg px-2 py-2 bg-pink-100 outline-none"
            onChange={(e) => setData({ ...data, [field] : e.target.value })}
            value={name}
            type={type}
            disabled
          />
        
      </div>
    )
  }
  
  // active input prototype componentTwo
  const ActiveInputComponentTwo =({name, data, setData, type, title, field})=>{
    return(
      <div className="md:w-full md:m-2">
                  <label className="block font-bold">{title}</label>
                  <input
                    className="w-80 md:w-9/12 rounded-lg px-2 py-2 bg-green-100 outline-none"
                    onChange={(e) => setData({ ...data, [field]: e.target.value })}
                    value={name}
                    type={type}
                  />
                </div>
    )
  }
  
  // deactive input prototype componentTwo
  const DisableInputComponentTwo =({name, data, setData, type, title, field})=>{
    return(
      <div className="md:w-full md:m-2">
                  <label className="block font-bold">{title}</label>
                  <input
                    className="w-80 md:w-9/12 rounded-lg px-2 py-2 bg-pink-100 outline-none"
                    onChange={(e) => setData({ ...data, [field]: e.target.value })}
                    value={name}
                    type={type}
                    disabled
                  />
                </div>
    )
  }

export default Profile