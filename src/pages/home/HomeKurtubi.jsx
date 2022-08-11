import React from 'react'
import {useSpring, animated} from 'react-spring'
import videoLogo from '../../assets/image/video.png'

const HomeKurtubi = () => {
    const { number }= useSpring({
        from : {number : 0},
        to : 1200,
        delay : 300,
        config : {duration : 2000}
    })
  return (
    <div>
         <div style={{backgroundImage: "url('https://c1.wallpaperflare.com/preview/440/943/611/darkness-study-pen.jpg')"}} className=" bg-fixed bg-cover bg-center bg-no-repeat object-cover">
        <div style={{background: "rgba(7, 7, 7, 0.7)"}} className=" p-3 py-16 lg:py-36 sm:p-10 lg:px-40 text-white">
            <div className="lg:flex lg:space-x-16 lg:items-center  md:justify-center">
                <div data-aos="fade-up" className="relative md:w-full md:h-full md:object-cover">
                    <img className=" h-96 object-cover " alt='' src="https://www.ucalgary.ca/ancillary/sites/default/files/styles/ucws_hero_cta_desktop/public/2019-05/Family%20Housing%20Yard.jpg?h=4e7082d3&itok=2Yo20HHz" />
                    <a href="##">
                    <img className=' rounded-full object-cover w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={videoLogo} alt="" />
                         </a>
                    
                </div>
                <div data-aos="fade-down" className="md:w-full md:h-full">
                    <h2 className=" text-4xl font-bold my-7">Kurtubi Madrasah</h2>
                    <p className=" text-xl text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                        numquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae tempore
                        doloribus aliquam deleniti maxime voluptatem fugiat dolorem temporibus illo? Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Ad, exercitationem! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Rem repudiandae, suscipit repellendus pariatur illum nostrum vero
                        non velit laborum ut dignissimos natus porro, maiores atque tempora impedit harum nemo unde.</p>
                </div>
            </div>


            <div   className=" text-center lg:flex lg:justify-evenly">
                <div data-aos="zoom-in" className="m-14">
                    <p className="font-bold text-5xl py-4">
                        <animated.div >
                            {number.to((value)=> value.toFixed())}
                        </animated.div>
                    </p>
                    <p className="text-xl">Students</p>
                </div>
                <div data-aos="zoom-in" className="m-14">
                    <p className="font-bold text-5xl py-4">
                        <animated.div >
                            {number.to((value)=> value.toFixed())}
                        </animated.div>
                    </p>
                    <p className="text-xl">Teachers</p>
                </div>
                <div data-aos="zoom-in" className="m-14">
                    <p className="font-bold text-5xl py-4">
                        <animated.div >
                            {number.to((value)=> value.toFixed())}
                        </animated.div>
                    </p>
                    <p className="text-xl">Staff</p>
                </div>

            </div>

            <div className="text-center">
                <button className="text-xl bg-blue-900 rounded border hover:border-yellow-300  p-2 hover:bg-transparent">visit our
                    campus</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomeKurtubi