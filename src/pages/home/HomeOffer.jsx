import React from 'react'
import campus from "../../assets/image/campus.jpg";
import {HiLibrary, HiOutlineFilm, HiOutlineBeaker, HiOutlineChartPie, HiOutlineCube, HiOutlineGift } from 'react-icons/hi'
const HomeOffer = () => {
  return (
    <div><div className="lg:flex">
        
    <div className="h-full mx-5 md:mx-14">
        <h2 className="font-bold py-5 my-3 text-3xl">What we offer</h2>
        <p className="text-lg"> At Daffodil International University, students get the opportunity to think, learn and grow.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2  object-cover ">
            <div data-aos="fade-up" className=" m-2 p-2 flex align-top">
                <div > <HiLibrary className='w-16 h-16 bg-gray-300 rounded-full m-2 p-2' /> </div>
                <div className=" max-w-2xl">
                    <h3 className="text-lg font-bold">Accommodation</h3>
                    <p className="t text leading-8">We are providing a secure and convenient living facility for our students. DIU dormitories are a home away from home.</p>
                </div>
             </div>

             <div data-aos="fade-up" className=" m-2 p-2 flex align-top">
                <div > <HiOutlineFilm className='w-16 h-16 bg-gray-300 rounded-full m-2 p-2' /> </div>
                <div className=" max-w-2xl">
                    <h3 className="text-lg font-bold">Transportation</h3>
                    <p className=" text leading-8"> To make the student’s life easier and safe, we are providing 50+ buses from different points of Dhaka city to </p>
                </div>
             </div>

             <div data-aos="fade-up" className="m-2 p-2 flex align-top">
                <div > <HiOutlineBeaker className='w-16 h-16 bg-gray-300 rounded-full m-2 p-2' /> </div>
                <div className=" max-w-2xl">
                    <h3 className="text-lg font-bold">Library</h3>
                    <p className=" text leading-8"> DIU library has a collection of over 50000 books, journals, research papers and enriching the resources day by day.</p>
                </div>
             </div>

             <div data-aos="fade-up" className="m-2 p-2 flex align-top">
                <div > <HiOutlineChartPie className='w-16 h-16 bg-gray-300 rounded-full m-2 p-2' /> </div>
                <div className=" max-w-2xl">
                    <h3 className="text-lg font-bold">One student one laptop</h3>
                    <p className=" text leading-8">  Under the ‘One student one laptop’ project, DIU has distributed over 25000 free laptops among the student.</p>
                </div>
             </div>

             <div data-aos="fade-up" className="m-2 p-2 flex align-top">
                <div > <HiOutlineCube className='w-16 h-16 bg-gray-300 rounded-full m-2 p-2' /> </div>
                <div className=" max-w-2xl">
                    <h3 className="text-lg font-bold">Blended Learning Platform</h3>
                    <p className=" text leading-8"> To engage students in learning after face-to-face classes, our faculty members and students collaborate in the online.</p>
                </div>
             </div>

             <div data-aos="fade-up" className="m-2 p-2 flex align-top">
                 <div > <HiOutlineGift className='w-16 h-16 bg-gray-300 rounded-full m-2 p-2' /> </div>
                <div className=" max-w-2xl">
                    <h3 className="text-lg font-bold">Sports Club & Gymnasium</h3>
                    <p className=" text leading-8"> To ensure the mental and physical well being of our students and employees, we are providing a well-equipped gymnasiu.</p>
                </div>
             </div>
        </div>
        
    </div>
    
    <div className='w-9/12' data-aos='zoom-in'>
        <img className="hidden h-full object-cover lg:block" src={campus} alt="ings" />
    </div>
</div></div>
  )
}

export default HomeOffer