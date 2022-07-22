import React from 'react'
import Card from '../../components/layouts/Card'

function HomeCard() {
  return (
    <div>
        <div className=' flex flex-col md:flex-row md:justify-evenly md:items-stretch justify-center items-center'>
        <Card 
        color='bg-gray-800'
        title = 'Lorem ipsum dolor.'
        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat, fuga doloribus blanditiis cupiditate dolores. Ea error fuga dicta beatae?'
        button='See more'
        href='##'
        />
        
        <Card 
        color='bg-purple-800 '
        title = 'Lorem ipsum dolor sit'
        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat, fuga doloribus blanditiis cupiditate dolores. Ea error fuga dicta beatae?'
        button='See more'
        href='##'
        />
        
        <Card 
        color='bg-gray-800'
        title = ' sit amet .'
        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat, fuga doloribus blanditiis cupiditate dolores. Ea error fuga dicta beatae?'
        button='See more'
        href='##'
        />
        
        <Card 
        color='bg-purple-800'
        title = 'Lorem consectetur .'
        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat, fuga doloribus blanditiis cupiditate dolores. Ea error fuga dicta beatae?'
        button='See more'
        href='##'
        />
        
        </div>
        
    </div>
  )
}

export default HomeCard