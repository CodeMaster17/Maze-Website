import React from 'react'
import TalentCard from '../components/TalentCard'


const AnnouncingPlayers = () => {
    return (
        <div className="lg:w-[45%] xsm:w-[47%] md:w-[40%] h-full   rounded-[20px] flex flex-col justify-around items-center bg-cardsBg  border-2  " >
            <div className="w-[90%] h-[90%] flex flex-col justify-center items-center border-2 border-primaryOrange " >
                <div className='w-[90%] h-[90%] flex flex-col justify-center items-center gap-2 ' >
                    <img src="../../public/home/players/questionMark.svg" alt="" className="w-[80%] h-[80%] xsm:w-[30%]   " />
                    <p className="lg:text-[2.5rem] xsm:text-[1.4rem] md:text-[2.5rem] text-white font-[700]" > Announcing soon </p>
                    <p className="w-[100%] h-[30%] md:w-[90%] xsm:text-[1rem] md:text-[1.8rem] text-center leading-8 font-light text-white lg:text-[1.4rem]" > Indian cricket player </p>
                </div>
            </div>
        </div>
    )
}

const OurTalents = () => {
    return (
        <div className='w-full lg:h-[80vh] xsm:h-[90vh] flex flex-col justify-center items-center border-2 border-red-600 mt-24 '>
            <p className="text-white text-center xsm:text-[2rem] lg:text-[3rem] font-[700] mt-2 md:text-[3rem]" >Our super Talents</p>
            <div className='lg:w-[80%]  w-[90%] h-[80%] md:h-[85%] flex lg:flex justify-between border-2 border-red-500 items-center xsm:flex-col lg:flex-row ' >
                <div className='lg:w-[30%] xsm:w-[80%] md:w-[44%] md:h-[50%] xsm:h-[50%] lg:h-[80%] xl:h-[90%]  lg:flex lg:flex-row justify-between items-center xsm:flex xsm:flex-col border-2 border-green-800' >
                    <TalentCard />
                </div>
                <div className='lg:w-[65%] w-[100%] 2xl:w-[60%]  lg:h-[90%] xsm:h-[40%] md:h-[45%] lg:flex lg:flex-row justify-between items-center xsm:flex xsm:flex-row border-2'>
                    <AnnouncingPlayers />
                    <AnnouncingPlayers />
                </div>
            </div>

        </div>
    )
}

export default OurTalents
