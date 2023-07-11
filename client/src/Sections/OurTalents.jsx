import React from 'react'
import TalentCard from '../components/TalentCard'
import Heading from '../components/Heading'


const AnnouncingPlayers = () => {
    return (
        <div className="lg:w-[45%] xsm:w-[47%] md:w-[40%] h-full rounded-[20px] flex flex-col justify-around items-center bg-cardsBg    hover:scale-[1.01]" >
            <div className="w-[90%] h-[90%] flex flex-col justify-center items-center border-2 rounded-[1.5rem] border-primaryOrange " >
                <div className='w-[90%] h-[90%] flex flex-col justify-center items-center gap-2 ' >
                    <img src="../../public/home/players/questionMark.svg" alt="" className="lg:w-[60%] h-[80%] xsm:w-[30%]   " />
                    <p className="lg:text-[2.5rem] xsm:text-[1.4rem] md:text-[2.5rem] text-white font-[700]" > Announcing soon </p>
                    <p className="w-[100%] h-[30%] md:w-[90%] xsm:text-[1rem] md:text-[1.8rem] text-center leading-8 font-light text-white lg:text-[1.4rem]" > Indian cricket player </p>
                </div>
            </div>
        </div>
    )
}

const OurTalents = () => {
    return (
        <div className='w-full lg:h-[80vh] xsm:h-[90vh] flex flex-col justify-center items-center  600 mt-24 '>
            <Heading text={"Our Super Talents"} />
            <div className='lg:w-[80%]  w-[90%] h-[80%] md:h-[85%] flex lg:flex justify-between  items-center xsm:flex-col lg:flex-row ' >
                <div className='lg:w-[30%] xsm:w-[80%] md:w-[44%] md:h-[50%] xsm:h-[50%] lg:h-[80%] xl:h-[90%]  lg:flex lg:flex-row justify-between items-center xsm:flex xsm:flex-col ' >
                    <TalentCard />
                </div>
                <div className='lg:w-[65%] w-[100%] 2xl:w-[60%]  lg:h-[90%] xsm:h-[40%] md:h-[45%] lg:flex lg:flex-row justify-between items-center xsm:flex xsm:flex-row -2'>
                    <AnnouncingPlayers />
                    <AnnouncingPlayers />
                </div>
            </div>

        </div>
    )
}

export default OurTalents
