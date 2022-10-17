import React from 'react'
import { Outlet } from 'react-router-dom'
import withAuth from '../HOC/withAuth'
import ErrorPage from '../layouts/ErrorPage'
import Navber from './Navber'

const Admin = ({ adminAuth }) => {

 if(adminAuth){
  return (
    <div>
      <Navber />
      <div className="md:ml-72 bg-gray-40 p-3">
        <Outlet />
      </div>
    </div>
  )
 }else{
  return <ErrorPage />
 }
   
  
  
}

export default withAuth(Admin) 