import React from 'react'
import {Link} from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
const CountCard = ({link, image, count, title }) => {
  const countNum = parseInt(count)
    const {number} = useSpring({
        from : {number : 0},
        to : countNum,
        delay : 200,
        config : {duration : 2000}
    })
  return (
    <Link
      to={link}
      className="flex justify-start items-center space-x-4 md:space-x-3 py-5 hover:border-transparent my-1 rounded-tl-3xl transition rounded-br-3xl border-2 hover:shadow-2xl hover:bg-indigo-100"
    >
      <div className="w-12 h-auto m-2">
        {image}
      </div>
      <div>
       {count && <p className="text-3xl font-bold text-gray-600">
          <animated.div className='inline'>
            {number.to((num)=> num.toFixed())}
          </animated.div>
          +
        </p>}
        <p className="text-gray-600 m-1">{title} </p>
      </div>
    </Link>
  )
}

export default CountCard