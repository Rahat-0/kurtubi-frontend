import React from 'react'
import { useSpring, animated } from 'react-spring'
import videoLogo from '../../assets/image/video.png'
import videoBG from '../../assets/image/videoBackgroud.jpg'

const HomeKurtubi = () => {
    const { number } = useSpring({
        from: { number: 0 },
        to: 1200,
        delay: 300,
        config: { duration: 2000 }
    })
    return (
        <div>
            <div style={{ backgroundImage: "url('https://c1.wallpaperflare.com/preview/440/943/611/darkness-study-pen.jpg')" }} className=" bg-fixed bg-cover bg-center bg-no-repeat object-cover">
                <div style={{ background: "rgba(7, 7, 7, 0.7)" }} className=" p-3 py-16 lg:py-36 sm:p-10 lg:px-40 text-white">
                    <div className="lg:flex lg:space-x-16 lg:items-center  md:justify-center">
                        <div data-aos="fade-up" className="relative md:w-full md:h-full md:object-cover">
                            <img className=" h-96 object-cover " alt='' src={videoBG} />
                            <a href="##">
                                <img className=' rounded-full object-cover w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={videoLogo} alt="" />
                            </a>

                        </div>
                        <div data-aos="fade-down" className="md:w-full md:h-full">
                            <h2 className=" text-3xl font-bold my-7">Kurtubi Madrasah</h2>
                            <p className="text-lg text-justify">Being established in 1999, Kurtubi Dakhil Madrasah has become a prominent private Madrasah in Bangladesh. Our entire campus is full of life and positive energy, fostering education and innovation for more than 5000 students. Here, students are encouraged to ask questions and think, debate and collaborate with teachers to take ownership of their learning. have to maintain proper Islamic Soriah in campus as well as dormitory</p>
                        </div>
                    </div>


                    <div className=" text-center lg:flex lg:justify-evenly">
                        <div data-aos="zoom-in" className="m-14">
                            <div className="font-bold text-5xl py-4">
                                <animated.div >
                                    {number.to((value) => value.toFixed())}
                                </animated.div>
                            </div>
                            <p className="text-lg">Students</p>
                        </div>
                        <div data-aos="zoom-in" className="m-14">
                            <div className="font-bold text-5xl py-4">
                                <animated.div >
                                    {number.to((value) => value.toFixed())}
                                </animated.div>
                            </div>
                            <p className="text-lg">Teachers</p>
                        </div>
                        <div data-aos="zoom-in" className="m-14">
                            <div className="font-bold text-5xl py-4">
                                <animated.div >
                                    {number.to((value) => value.toFixed())}
                                </animated.div>
                            </div>
                            <p className="text-lg">Staff</p>
                        </div>

                    </div>

                    <div className="text-center">
                        <button className="text-lg bg-blue-900 rounded border hover:border-yellow-300  p-2 hover:bg-transparent">visit our
                            campus</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeKurtubi