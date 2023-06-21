import React from 'react'
import HomePhoto from "/public/home screen/homePhoto.png"
import HomePhoto1 from "/public/home screen/homePhoto1.png"
import HomePhoto2 from "/public/home screen/homePhoto2.png"
import Triangle from "/public/home screen/triangle.svg"
import TriangleDown from "/public/home screen/triangle_down.svg"
const Home = () => {
    return (
        <>
            <div className='w-[100%] h-screen   bg-homeBlackBg flex items-center justify-center border-2 border-blue-400'>
                <div className='w-[40%] h-[100%]  border-2 border-red-500 ' >
                    <div className='w-[100%] h-[100%] items-center justify-center flex ' >

                        <p className='text-[7rem] text-textWhite leading-[8.5rem] font-[700]  ' >
                            Now! Invest in
                            <br />
                            your Favorite
                            <br />
                            <span className='text-textOrange'>Athlete.</span>
                        </p>
                    </div>
                </div>
                <div className='w-[40%] h-[100%]  border-2 border-red-500 flex justify-center items-center relative' >
                    <img src={HomePhoto} alt="" className='h-[60%]' />
                    <img src={HomePhoto1} alt="" className='absolute top-[5%] left-[10%] ' />
                    <img src={HomePhoto2} alt="" className='absolute bottom-[5%] right-[5%] ' />
                    <img src={Triangle} alt="" className='absolute top-[4%] left-[27%]' />
                    <div className='bg-bgGrey  absolute z-40  rounded-[100px] top-[18%] right-[25%] w-[90px] text-center ' >
                        <p className='text-[3rem] text-textGreen '> 10% </p></div>
                    <div className='bg-bgGrey  absolute z-40  rounded-[100px] bottom-[18%] left-[15%] w-[136px] text-center ' >
                        <p className='text-[3rem] text-textGreen '> 39% </p></div>
                    <img src={TriangleDown} alt="" className='absolute top-[53%] right-[8%]' />
                </div>

                <div className='w-[795px] h-[795px] rounded-full bg-circleLinearGradient absolute left-[-50%] top-[-25%] ' >
                </div>

                <div className='w-[795px] h-[795px] rounded-full bg-circleBlueLinearGradient absolute right-[-50%] top-[20%] ' >
                </div>
            </div>
            <div className="w-full h-[20vh] flex justify-center items-center bg-homeBlackBg ">
                <div className='w-[80%] h-[100%] flex justify-center items-center text-center  ' >
                    <p className='text-[3rem] font-[300] leading-[4.8rem] text-textWhite ' >Build your portfolio of <span className='text-textOrange' > athlete </span>   you believe in,<span className='text-textOrange'  >invest </span>  in their training and own <br /> a part of their
                        <span className='text-textOrange' > future earnings. </span> </p>

                </div>
            </div>
        </>
    )
}

export default Home
