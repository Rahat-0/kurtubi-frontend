import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-900">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-red-500 px-2 text-sm rounded transform rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5 ">
                <Link to='/'
                    className="relative transform inline-block text-sm font-medium text-red-700 group active:text-orange-500 focus:outline-none focus:ring" >
                    
                    <span className='absolute w-full h-full top-0 left-0 border-red-800 border-2 animate-pulse transform transition-all hover:translate-x-1 hover:translate-y-1  z-10'></span>
                    <span className="relative block px-8 py-3 bg-gray-900  border border-current">
                        <button className='text-red-800 hover:text-white' >Go Home</button>
                    </span>
                </Link>
                
            </button>
        </div>
    )
}

export default ErrorPage