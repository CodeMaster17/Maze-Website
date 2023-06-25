import React from 'react'



const PlayerCard = () => {
    return (
        <>
            <div className='w-[15.2rem] h-[16.9rem] shadow-playerCard  rounded-playerCard customStyleVirat ' >

            </div>
            <div className='w-[15.2rem] h-[16.9rem] shadow-playerCard  rounded-playerCard customStyleDhoni ' >

            </div>
        </>
    )
}



const InvestmentIdea = () => {
    return (
        <div className="w-full h-[60vh] flex justify-center items-center bg-homeBlackBg border-2 border-white">
            <div className="w-[80%] h-[100%] flex justify-center items-center text-center ">
                <div className='w-[40%] h-[80%]  border-r-[1px] border-red-500 flex flex-col justify-around items-center pr-10 ' >
                    <div className="w-[100%] h-[80%]  flex justify-around items-center" >
                        <PlayerCard />
                    </div>
                    <p className='text-white text-[2.5rem] leading-[4rem] text-center' >This is like investing in next <span className='font-semibold' >Dhoni <br /> or Kohli.. Sounds great ?</span> </p>
                </div>
                <div className="w-[60%] h-[100%] pl-10 font-[600] leading-[5rem] flex justify-center items-center" >
                    <p className='text-[3.5rem] text-white text-left' >Help the next big name of the Indian cricket team in their journey of greatness financially and emotionally.</p>
                </div>
            </div>

        </div>
    )
}

export default InvestmentIdea
