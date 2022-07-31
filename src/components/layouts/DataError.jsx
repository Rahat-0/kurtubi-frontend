import React from 'react'

const DataError = ({message}) => {
  return (
    <div
        className=" absolute flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-300 to-blue-50  z-10"
      >
        <div class="px-40 py-20 bg-white rounded-md shadow-xl">
          <div class="flex flex-col items-center">
            <h1 class="font-bold text-blue-600 text-9xl">404</h1>

            <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span class="text-red-500">Oops!</span> Data not found
            </h6>

            <p class="mb-8 text-center text-gray-500 md:text-lg">
              {message || 'An Error Occurred!!'}.
            </p>
          </div>
        </div>
      </div>
  )
}

export default DataError