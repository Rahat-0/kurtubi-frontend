import React from "react";
import {FcNext, FcPrevious} from 'react-icons/fc'
import { useSelector } from "react-redux";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import bg1 from '../../assets/image/g1.jpg'
import bg3 from '../../assets/image/g3.jpg'
import bg4 from '../../assets/image/g4.jpg'
import bg5 from '../../assets/image/g5.jpg'
import bg6 from '../../assets/image/g6.jpg'

const GallerySlider = () => {

  const {language} = useSelector((state)=> state.translate.language)
  

  const EN_imageData = [
    
    {
      image : bg1,
      title : "the occasion of Great Independence Day.",
      paragraph : 'this is description of this image the occasion of Great Independence Day.',
      btn : 'See More'
    },
    {
      image : bg3,
      title : "Essay competition and discussion meeting .",
      paragraph : 'this is description of this image Essay competition and discussion meeting.',
      btn : 'See More'
    },
    {
      image : bg4,
      title : "Great Independence Day",
      paragraph : 'this is description of this image Great Independence Day',
      btn : 'See More'
    },
    {
      image : bg5,
      title : "discussion meeting on the occasion ",
      paragraph : 'this is description of this image discussion meeting on the occasion ',
      btn : 'See More'
    },
    {
      image : bg6,
      title : "Essay competition and discussion meeting on the occasion of Great Independence Day",
      paragraph : 'this is description of this image Essay competition and discussion meeting on the occasion of Great Independence Day',
      btn : 'See More'
    }
  ]

  const BN_imageData = [ 
    {
      image : bg1,
      title : "the বাংলা occasion of Great Independence Day.",
      paragraph : 'this বাংলা is description of this image the occasion of Great Independence Day.',
      btn : 'See More'
    },
    {
      image : bg3,
      title : "Essay বাংলা  competition and discussion meeting .",
      paragraph : 'this বাংলা is description of this image Essay competition and discussion meeting.',
      btn : 'See More'
    },
    {
      image : bg4,
      title : "Great  বাংলা Independence Day",
      paragraph : 'this  বাংলা is description of this image Great Independence Day',
      btn : 'See More'
    },
    {
      image : bg5,
      title : "discussion বাংলা  meeting on the occasion ",
      paragraph : 'this is  বাংলা description of this image discussion meeting on the occasion ',
      btn : 'See More'
    },
    {
      image : bg6,
      title : "Essay বাংলা  competition and discussion meeting on the occasion of Great Independence Day",
      paragraph : 'this  বাংলা is description of this image Essay competition and discussion meeting on the occasion of Great Independence Day',
      btn : 'See More'
    }
  ]

  const obj = {
    EN : EN_imageData,

    BN : BN_imageData
  }

  const type = obj[language] ? language : "EN"


  return (

    <Zoom scale={1.4} pauseOnHover={false} infinite={true} canSwipe = {true} 
      nextArrow={<FcNext className=" hover:bg-white hover:opacity-20 w-10 h-full " />} 
      prevArrow={<FcPrevious className=" hover:bg-white hover:opacity-20 w-10 h-full " />}>
      {obj[type].map(({image, title, paragraph, btn}, index) => (
        <div key={index} className="each-slide-effect ">
          <div style={{ height: "30rem" }} className="relative" >
            <div style={{ height: "30rem" }}   className="w-full h-full absolute bg-purple-900 z-10 opacity-40"></div>
              <img style={{ height: "30rem" }} className="w-full h-full absolute object-cover" draggable="false" src={image} alt="'''" />
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center md:text-left md:left-32 md:w-6/12 md:top-14 md:transform-none  text-gray-200 z-20" >
              <h3 className=" m-1 lg:text-5xl md:text-4xl text-3xl">{title}</h3>
              <p className="m-1">{paragraph} </p>
            </div>
          </div>
        </div>
      ))}

    </Zoom>


  );
};

export default GallerySlider;
