import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { FaDashcube, FaRegUser, FaUserAlt, FaRegCalendarAlt, FaUserLock, FaRegFileAlt, FaRegGem } from 'react-icons/fa'
import useOutsideToHide from '../../hooks/useOutsideToHide'
import { useEffect } from 'react'

const Navber = () => {

    // outside focus to hidden element start from here
    const adminNavRef = useRef(null)
    const seen = useOutsideToHide(adminNavRef, false)
    useEffect(() => {
      setVisible(seen.trigger)
    }, [seen])
    // outside focus to hidden element end here
    
    const [visible, setVisible] = useState(false)
    const nablist = [
        { name: 'Dashboard', link: 'dashboard', logo: < FaDashcube /> },
        { name: 'Students', link: 'studentlist', logo: < FaRegUser /> },
        { name: 'Teachers', link: 'teacherlist', logo: < FaUserAlt /> },
        { name: 'Results', link: 'results', logo: < FaRegFileAlt /> },
        { name: 'Calender', link: 'calender', logo: < FaRegCalendarAlt /> },
        { name: 'admin', link: 'admin', logo: < FaUserLock /> },
        { name: 'new', link: 'new', logo: < FaRegGem /> },
    ]
    return (
        <div ref={adminNavRef}
         className={ `${visible  ? 'left-0' : '-left-72'}  md:left-0  transform transition-all bg-gray-200 w-72 fixed z-40 lg:overflow-scroll  h-screen `}>
                
                 <button onClick={()=>setVisible(!visible)} className='bg-red-900 absolute md:hidden w-3 h-14 rounded-r-3xl border-2 -right-2 top-0'></button>
            <div 
            onClick={()=>setVisible(false)}
            className=" py-4 ">
                {nablist.map(({ name, link, logo }) => (
                    <NavLink key={link} to={link} className={({ isActive }) => isActive ? 'border-red-800 border-l-4 block p-4 transform transition-all bg-gray-400  text-gray-300' : ' text-gray-700 p-4 block'} > <div className='flex items-center justify-start gap-x-2'>
                        <span>{logo}</span>
                        <span>{name}</span>
                    </div> </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Navber