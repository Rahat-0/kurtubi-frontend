import React, {  useState } from "react";
import { ToastContainer} from "react-toastify";
import Setting from "./Setting";
import Profile from "./Profile";
import Result from "./Result";

function UserProfile() {
  const [visible, setVisible] = useState(true)
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

      <div >
{/* static user seciton (user navber) */}
        <div  className={ `${visible  ? 'left-0' : '-left-72'}  md:left-0  transform transition-all bg-gray-200 w-72 fixed z-40 lg:overflow-scroll  h-screen `}>
        <button onClick={()=>setVisible(!visible)} className='bg-red-900 absolute md:hidden w-3 h-14 rounded-r-3xl border-2 -right-2 top-0'></button>
          <h3 className="font-bold text-4xl py-3">Settings</h3>
          <ul onClick={()=> setVisible(false)}>
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

{/* dynamic user section  */}
        <div className='md:ml-72 bg-gray-40 p-3'>
          {view.profile && <Profile />}
          {view.setting && <Setting />}
          {view.result && <Result />}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}



export default UserProfile;
