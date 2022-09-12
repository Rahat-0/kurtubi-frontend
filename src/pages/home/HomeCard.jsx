import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/layouts/Card'
import content from './content.home.json'

function HomeCard() {
  const {language} = useSelector((state)=> state.translate.language)
  const type = content[language] ? language : "EN"
  return (
    <div>
        <div  className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <Card 
        color='bg-gray-800'
        title = {content[type].HCtitle1}
        paragraph={content[type].HCparagraph1}
        button='See more'
        href='##'
        />
        
        <Card 
        color='bg-purple-800 '
        title = {content[type].HCtitle2}
        paragraph={content[type].HCparagraph2}
        button='See more'
        href='##'
        />
        
        <Card 
        color='bg-gray-800'
        title = {content[type].HCtitle3}
        paragraph= {content[type].HCparagraph3}
        button='See more'
        href='##'
        />
        
        <Card 
        color='bg-purple-800'
        title = {content[type].HCtitle4}
        paragraph={content[type].HCparagraph4}
        button='See more'
        href='##'
        />
        
        </div>
        
    </div>
  )
}

export default HomeCard