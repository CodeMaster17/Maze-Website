import React from 'react'
import HomePhoto from "/public/home screen/homePhoto.png"
import HomePhoto1 from "/public/home screen/homePhoto1.png"
import HomePhoto2 from "/public/home screen/homePhoto2.png"
import Triangle from "/public/home screen/triangle.svg"
import TriangleDown from "/public/home screen/triangle_down.svg"

const HeroArea = () => {
    return (
        <div className='w-[100%] lg:h-screen xsm:h-[80vh]   bg-homeBlackBg flex lg:flex-row xsm:flex-col items-center justify-center border-2 border-blue-400'>
            <div className='lg:w-[40%] xsm:w-[90%] xsm:h-[30%]  lg:h-[100%]  border-2 border-red-500 ' >
                <div className='w-[100%] h-[100%]  items-center justify-center flex   ' >

                    <p className='md:text-[7rem] md:font-[700] xsm:text-center lg:text-left xsm:text-[4rem] text-textWhite md:leading-[8rem] xsm:leading-[4rem] xsm:mt-10  lg:leading-[8.5rem] font-[700]   ' >
                        Now! Invest in
                        <br />
                        your Favorite
                        <br />
                        <span className='text-textOrange'>Athlete.</span>
                    </p>
                </div>
            </div>
            <div className='lg:w-[40%] xsm:w-[90%] h-[100%]  border-2 border-red-500 flex justify-center items-center relative' >
                <img src={HomePhoto} alt="" className='lg:h-[60%] xsm:h-[40%] ' />
                <img src={HomePhoto1} alt="" className='absolute top-[5%] left-[10%] xsm:h-[20%] ' />
                <img src={HomePhoto2} alt="" className='absolute bottom-[5%] right-[5%] xsm:h-[20%]' />
                <img src={Triangle} alt="" className='absolute top-[4%] left-[27%]' />
                <div className='bg-bgGrey  absolute z-40  rounded-[100px] top-[18%] right-[25%] w-[90px] text-center ' >
                    <p className='text-[3rem] text-textGreen '> 10% </p></div>
                <div className='bg-bgGrey  absolute z-40  rounded-[100px] bottom-[18%] left-[15%] w-[136px] text-center ' >
                    <p className='text-[3rem] text-textGreen '> 39% </p></div>
                <img src={TriangleDown} alt="" className='absolute top-[53%] right-[8%]' />
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
