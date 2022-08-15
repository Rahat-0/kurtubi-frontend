import React from 'react'
import {ToastContainer} from 'react-toastify'

function PopUpConfirm(props) {
  
   
  return (
    
      <div  className={`text-center flex justify-center items-center opacity-90   z-50`}
      >
        <div className="  fixed bg-gray-300 shadow-2xl top-1/3 rounded-2xl">
          <div className="  w-96 h-56 flex justify-center items-center">
            <div className="font-bold">
              <p className="mt-20 px-2">
               {`do you want to active this account?`}
              </p>
              <div className="flex justify-between mt-12">
                <input
                  className="text-black p-2 px-9 rounded-xl bg-gray-400 border focus:ring-2 focus:ring-gray-500 cursor-pointer"
                  onClick={()=> (false)}
                  type="button"
                  value="cancel"
                /> 
                
                <input
                className={` p-2 px-9 rounded-xl bg-red-400 border focus:ring-2 focus:ring-red-500 cursor-pointer`}
                onClick={(false)}
                type="button"
                value="delete"
              /> 
              
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    
  )
}

export default PopUpConfirm