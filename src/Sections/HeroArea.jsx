import React from 'react'
import HomePhoto from "/public/home screen/vectors/football.svg"
import HomePhoto1 from "/public/home screen/vectors/boxing.svg"
import HomePhoto2 from "/public/home screen/vectors/hockey.svg"
import Triangle from "/public/home screen/triangle.svg"
import TriangleDown from "/public/home screen/triangle_down.svg"
import arrow from "/public/home screen/vectors/btn_arrow.svg"

const HeroArea = () => {
    return (
        <div className='w-[100%] lg:h-screen xsm:h-[80vh]   bg-homeBlackBg flex lg:flex-row xsm:flex-col items-center justify-center border-2 md:h-[110vh] border-blue-400'>
            <div className='lg:w-[40%] xsm:w-[90%] xsm:h-[30%]  lg:h-[100%]  border-2 border-red-500 ' >
                <div className='w-[100%] h-[100%]  flex-col lg:items-start xsm:items-center  xsm:justify-center flex border-2 border-blue-500 relative ' >

                    <p className='md:text-[7rem] md:font-[700] xsm:text-center lg:text-left  xsm:text-[4rem] text-textWhite md:leading-[8rem] xsm:leading-[4rem] xsm:mt-10  lg:leading-[8.5rem] font-[700]   ' >
                        Now Invest in
                        <br />
                        your Favorite
                        <br />
                        <span className='text-textOrange'>Athlete.</span>
                    </p>
                    <button className="mt-10 learn-more xsm:w-[65%] md:w-[35%] lg:w-[50%]">
                        <span className="circle xsm:w-[4rem] xsm:h-[4rem] " aria-hidden="true">
                            <span className="icon arrow">
                                <img src={arrow} alt="" />
                            </span>
                        </span>
                        <span className="button-text ">Get Started Now</span>
                        <button className="leftLearnMore xsm:w-[4rem] xsm:h-[4rem]"></button>
                    </button>
                </div>
            </div>

            <div className='lg:w-[40%] xsm:w-[90%] h-[100%] md:h-[60%] lg:h-[100%] border-2 border-red-500 flex justify-center items-center relative' >
                <div className='lg:h-[60%] xsm:h-[40%] md:h-[70%] md:w-[40%] bg-purpleBg flex justify-center items-center rounded-[20px] shadow-playerCard' >
                    <img src={HomePhoto} alt="" className='lg:h-[80%] xsm:h-[40%] ' />
                </div>

                {/* boxing */}
                <div className='absolute top-[5%] right-[10%] xsm:h-[35%] xsm:w-[25%] md:right-[14%] bg-purpleBg flex justify-center items-center rounded-[20px] shadow-playerCard ' >
                    <img src={HomePhoto1} alt="" className='  xsm:h-[70%] ' />
                    <img src={TriangleDown} alt="" className='absolute top-[-10%] right-[-1%] md:top-[-5%] ' />
                </div>

                {/* hockey */}
                <div className='absolute bottom-[5%] left-[5%] md:left-[10%] xsm:h-[35%] xsm:w-[30%] md:w-[25%] bg-purpleBg flex justify-center items-center rounded-[20px] shadow-playerCard '  >
                    <img src={HomePhoto2} alt="" className=' xsm:h-[80%]' />
                    <img src={Triangle} alt="" className='absolute top-[-10%] right-[-12%]' />
                </div>

                {/* number */}
                <div className='bg-bgGrey  absolute z-40  rounded-[100px] top-[18%] left-[18%] md:left-[25%] w-[90px] text-center ' >
                    <p className='text-[2.5rem] text-textGreen '> 110% </p></div>
                <div className='bg-bgGrey  absolute z-40  rounded-[100px] bottom-[22%] md:right-[25%] right-[20%] w-[80px] text-center ' >
                    <p className='text-[2rem] text-textGreen '> 80% </p></div>
            </div>
            {/* 
            <div className='w-[795px] h-[795px] rounded-full bg-circleLinearGradient absolute left-[-50%] top-[-25%] ' >
            </div> */}

            {/* <div className='w-[795px] h-[795px] rounded-full bg-circleBlueLinearGradient absolute right-[-50%] top-[20%] ' >
            </div> */}
        </div>
    )
}

export default HeroArea
