import React from 'react'



const PlayerCard = () => {
    return (
        <>
            <div className='lg:w-[15.2rem] lg:h-[16.9rem] xsm:w-[12.344rem] xsm:h-[13.72rem]  md:w-[15.2rem] md:h-[16.9rem] shadow-playerCard  rounded-playerCard customStyleVirat ' >

            </div>
            <div className='lg:w-[15.2rem] lg:h-[16.9rem] xsm:w-[12.344rem] xsm:h-[13.72rem] md:w-[15.2rem] md:h-[16.9rem]  shadow-playerCard  rounded-playerCard customStyleDhoni ' >

            </div>
        </>
    )
}



const InvestmentIdea = () => {
    return (
        <div className="w-full lg:h-[60vh] xsm:h-[40vh] flex justify-center items-center bg-homeBlackBg border-2 border-white">
            <div className="lg:w-[80%] md:w-[70%] xsm:w-[90%] h-[100%] lg:flex lg:flex-row  xsm:flex-col justify-center items-center text-center ">
                <div className='lg:w-[40%] xsm:w-[100%] lg:h-[80%] xsm:h-[70%] xsm:border-[1px]  lg:border-r-[1px] border-red-500 flex flex-col justify-around xsm:justify-between items-center lg:pr-10 ' >
                    <div className="lg:w-[100%] xsm:w-[90%] h-[70%]  flex justify-around items-center" >
                        <PlayerCard />
                    </div>
                    <p className='text-white md:text-[2.5rem] lg:text-[2.1rem] md:leading-[4rem] text-center xsm:text-[1.8rem] xsm:leading-[2.8rem] md:font-[500]' >This is like investing in next <span className='font-semibold' >Dhoni <br /> or Kohli.. Sounds great ?</span> </p>
                </div>
                <div className="lg:w-[70%] md:w-[100%] border-2  xsm:w-[100%] md:h-[25%] xsm:h-[30%]  lg:h-[100%] md:pl-0 lg:pl-10 font-[600] leading-[5rem] flex justify-center items-center" >
                    <p className='lg:text-[3rem] xsm:text-[1.6rem] md:text-[2.2rem] xsm:text-center lg:text-left xsm:font-[100] xsm:leading-[2.4rem] text-white text-left md:leading-[3.5rem] lg:w-[90%]' >Help the next big name of the Indian cricket team in their journey of greatness financially and emotionally.</p>
                </div>
            </div>

        </div>
    )
}

export default InvestmentIdea
