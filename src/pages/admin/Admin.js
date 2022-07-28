import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Navber'

const Admin = () => {
    return (
        <div>
            <Navber />
            <div className="md:ml-72 bg-gray-40 p-3">
                <Outlet />
            </div> 
        </div>
    )
}

export default Admin