import React from 'react'
import shashwat_img from "../../public/home/players/shashwat.png"
const TalentCard = () => {
    return (
        <div className="w-full h-full rounded-[20px] flex flex-col justify-around items-center bg-cardsBg hover:scale-[1.01] " >
            <div className="w-[90%] h-[90%] flex flex-col justify-center items-center border-2  rounded-[1.5rem] border-primaryOrange" >

                <div className='w-[90%] h-[90%] flex flex-col justify-center items-center gap-2 ' >

                    <img src={shashwat_img} alt="" className="w-[90%] h-[80%]    " />
                    <p className="lg:text-[2.5rem] xsm:text-[2.019rem] md:text-[2.5rem] text-white font-[700]" > Shashwat </p>
                    <p className="w-[100%] h-[30%] md:w-[90%] xsm:text-[1.45rem] md:text-[1.8rem] text-center leading-8 font-light text-white lg:text-[1.4rem]" > Indian badminton player </p>
                </div>
            </div>
        </div>
    )
}

export default TalentCard
