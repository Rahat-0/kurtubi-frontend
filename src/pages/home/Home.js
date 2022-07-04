import React from 'react'

function Home() {
  let m = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,111,1]
  return (
    <div className='' >Home
      {m.map((item, i)=>(
        <p>{i}</p>
      ))}
    </div>
  )
}

export default Home