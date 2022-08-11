import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from '../../components/layouts/Footer'
import GallerySlider from '../../components/Slider/GallerySlider'
import HomeCard from './HomeCard'
import HomeKurtubi from './HomeKurtubi'
import HomeOffer from './HomeOffer'
import { Login } from '../../components/Login';
function Home() {
  AOS.init({
    once : true,
  })
  return (
    <div>
      {/* <Login /> */}
      <GallerySlider />
      <HomeCard />
      <HomeOffer />
      <HomeKurtubi />

      <Footer />
    </div>
  )
}

export default Home