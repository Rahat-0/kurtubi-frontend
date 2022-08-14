import React from 'react'

const Setting = () => {
  return (
    <div className="">
            <h3 className="text-center md:text-left text-3xl p-2 bg-green-200 md:bg-white">
              Profile Setting
            </h3>
            <div className="flex flex-col justify-between  md:items-start m-2 space-y-3 border p-2 rounded shadow-lg">
              <div className="flex justify-between w-full p-2 border rounded bg-red-50 shadow">
                <div className="px-1">
                  <h4 className="font-bold text-red-700">
                    Update password for this account
                  </h4>
                  <p className="text-sm">
                    Unable to Login with Previous Password.
                  </p>
                </div>
                <input
                  onClick={() => (true)}
                  className=" rounded px-2  bg-yellow-700 text-white font-bold hover:bg-white hover:text-black cursor-pointer border-2 border-yellow-500"
                  type="button"
                  value="Update"
                />
              </div>
            </div>
          </div>
  )
}

export default Setting