import React, {  useState } from "react";
import { ToastContainer} from "react-toastify";
import Setting from "./Setting";
import Profile from "./Profile";
import Result from "./Result";

function UserProfile() {

  const [view, setview] = useState({
    setting : false,
    profile : true,
    result : false
  });

  
  return (
    <div>
    
      {/* popup confirmation component */}
      {/* <ComPopUpConfirm
        deleted={deleteHandler}
        deactived={deactiveHandler}
        states={[deletes, setDelete, deactivate, setDeactivate]}
      /> */}

      <div className=" md:flex md:justify-around min-h-screen">
        <div className=" md:block md:w-3/12">
          <h3 className="font-bold text-4xl py-3">Settings</h3>
          <ul>
            <li
              className={`${
                view.profile && "bg-red-300 text-white"
              } p-2 bg-gray-100 my-2 rounded-lg hover:bg-red-400 cursor-pointer`}
              onClick={() => setview({profile : true})}
            >
              {" "}
              Public profile
            </li>
            <li
              className={`${
                view.setting && "bg-red-300 text-white" 
              } p-2 bg-gray-100 my-2 rounded-lg hover:bg-red-400 cursor-pointer`}
              onClick={() => setview({setting : true})}
            >
              Account settings
            </li>
            <li
              className={`${
                view.result && "bg-red-300 text-white" 
              } p-2 bg-gray-100 my-2 rounded-lg hover:bg-red-400 cursor-pointer`}
              onClick={() => setview({result : true})}
            >
              Results
            </li>
          </ul>
        </div>
        {view.profile && <Profile />}
        {view.setting && <Setting />}
        {view.result && <Result />}
      </div>
      <ToastContainer />
    </div>
  );
}



export default UserProfile;
