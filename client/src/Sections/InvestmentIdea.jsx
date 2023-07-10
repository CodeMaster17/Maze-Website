import React from 'react'
import PlayerCard from '../components/PlayerCard'
const InvestmentIdea = () => {
    return (
        <div className="flex items-center justify-center w-full mt-10 bg-homeBlackBg lg:mt-48 xsm:mt-24">
            <div className="lg:w-[80%] md:w-[70%] xsm:w-[90%] h-[100%] lg:flex lg:flex-row  xsm:flex-col justify-center items-center text-center border-2 ">
                <div className='lg:w-[40%] xsm:w-[100%] lg:h-[80%] xsm:h-[70%] border-b-[1px] pb-5 lg:border-b-0 lg:border-r-[1px] border-primaryOrange  flex flex-col justify-around xsm:justify-between items-center lg:pr-10 ' >
                    <div className="lg:w-[100%] xsm:w-[90%] h-[70%]  flex justify-around items-center mt-10" >
                        <PlayerCard />
                    </div>
                    <p className='text-white md:text-[2.5rem] lg:text-[2.1rem] md:leading-[4rem] text-center xsm:text-[1.8rem] xsm:leading-[2.8rem] md:font-[500] mt-20' >This is like investing in next <span className='font-semibold' >Dhoni <br /> or Kohli.. Sounds great ?</span> </p>
                </div>
                <div className="lg:w-[70%] md:w-[100%]   w-[100%] md:h-[25%] xsm:h-[30%]  lg:h-[100%] md:pl-0 lg:pl-10 font-[600] leading-[5rem] flex justify-center items-center mt-10" >
                    <p className='lg:text-[3rem] xsm:text-[1.6rem] md:text-[2.2rem] xsm:text-center lg:text-left xsm:font-[100] xsm:leading-[2.4rem] text-white text-left md:leading-[3.5rem] lg:w-[90%]' >Help the next big name of the Indian cricket team in their journey of greatness financially and emotionally.</p>
                </div>
            </div>

        </div>
    )
}

export default InvestmentIdea
