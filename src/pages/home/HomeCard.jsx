import React from 'react'
import Card from '../../components/layouts/Card'

function HomeCard() {
  return (
    <div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
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