import React from 'react'

const Setting = () => {
  return (
    <div className="md:w-8/12">
            <h3 className="text-center md:text-left text-3xl p-2 bg-green-200 md:bg-white">
              Profile Setting
            </h3>
            <div className="flex flex-col justify-between  md:items-start m-2 space-y-3 border p-2 rounded shadow-lg">
              <div className="flex justify-between w-full p-2 border rounded bg-red-50 shadow">
                <div className="px-1">
                  <h4 className="font-bold text-lg text-red-700">
                    deactivate this account
                  </h4>
                  <p className="text-sm">
                    will sign out and no longer signin untill activated from
                    librarians
                  </p>
                </div>
                <input
                  onClick={() => (true)}
                  className=" rounded px-2  bg-yellow-700 text-white font-bold hover:bg-white hover:text-black cursor-pointer border-2 border-yellow-500"
                  type="button"
                  value="deactivate"
                />
              </div>

              <div className="flex justify-between w-full p-2 border rounded bg-red-50 shadow">
                <div className="px-1">
                  <h4 className="font-bold text-lg text-red-700">
                    delete this account
                  </h4>
                  <p className="text-sm">will delete everything permanenly. </p>
                </div>
                <input
                  onClick={() => (true)}
                  className=" rounded px-2 bg-red-900 text-white font-bold hover:bg-white hover:text-black cursor-pointer border-2 border-red-700"
                  type="button"
                  value="delete"
                />
              </div>
            </div>
          </div>
  )
}

export default Setting