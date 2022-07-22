import React from 'react'
import GallerySlider from '../../components/Slider/GallerySlider'
import HomeCard from './HomeCard'
import HomeKurtubi from './HomeKurtubi'
import HomeOffer from './HomeOffer'
function Home() {

  return (
    <div>
      <GallerySlider />
      <HomeCard />
      <HomeOffer />
      <HomeKurtubi />
    </div>
  )
}

export default Home