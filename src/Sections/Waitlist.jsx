
const Waitlist = () => {
    return (
        <div className='w-[100%] lg:h-[80vh] md:h-[70vh] xsm:h-[70vh]  bg-homeBlackBg flex flex-col items-center justify-center border-2 border-blue-400' >
            <p className="text-white text-center xsm:text-[2.5rem] lg:text-[3rem] font-[700] md:text-[3rem]" >Revolutionizing the sports industry</p>
            <div className="lg:w-[80%] xsm:w-[90%] h-[80%] flex flex-col xsm:justify-center border-2 border-red-500 lg:justify-around items-center text-center bg-FormColor rounded-[30px] shadow-FormShadow mt-8 " >
                <div className="w-[100%] ">
                    <p className="text-center text-white xsm:text-[2rem] lg:text-[3rem] font-[700] md:text-[2.5rem]" >Join the waitlist</p>
                </div>
                <div className="lg:w-[70%] xsm:w-[90%] md:w-[80%]">
                    <p className="text-center text-white xsm:text-[1.5rem]  lg:text-[1.8rem] leading-[2.5rem] " >{"Be the first to experience our exciting talent launch! Join our waitlist for exclusive early access and stay ahead of the game. Don't miss this opportunity!"}</p>
                </div>
                <div className="lg:w-[50%] md:w-[50%] xsm:w-[80%] xsm:h-[60%] xsm:flex lg:h-[45%] xsm:flex-col xsm:justify-between xsm:items-center border-2 border-purple-500 ">
                    <div className="flex lg:flex-row  items-center justify-between xsm:flex-col xsm:h-[45%] xsm:w-[100%]  xsm:justify-around lg:h-[40%] border-2 border-purple-500" >
                        <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%] lg:w-[45%]  h-[4.7rem]" />
                        <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%] lg:w-[45%] h-[4.7rem] " />
                    </div>
                    <div className="flex lg:flex-row  items-center justify-between lg:mt-8 xsm:mt-0 xsm:flex-col xsm:h-[45%] xsm:w-[100%] xsm:justify-around border-2 border-purple-500 lg:h-[40%] "  >
                        <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%]  lg:w-[45%]  h-[4.7rem]" />
                        <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%]  lg:w-[45%] h-[4.7rem] " />
                    </div>
                    <button className=" lg:mt-8 bg-bgBtn rounded-[23.5px] xsm:w-[50%] lg:w-[20%] xsm:mt-0 md:h-[4rem] xsm:h-[3.5rem] lg:h-[4.7rem] md:text-[2rem] xsm:text-[1rem] text-center text-white " >Join Now</button>
                </div>
            </div>
        </div>
    )
}

export default Waitlist
