
const Waitlist = () => {
    return (
        <div className='w-[100%] h-[100vh]   bg-homeBlackBg flex flex-col items-center justify-center border-2 border-blue-400' >
            <p className="text-white text-center text-[3rem] font-[700]" >Revolutionizing the sports industry</p>
            <div className="w-[80%] h-[80%] flex flex-col justify-around items-center text-center bg-waitListForm rounded-[30px] shadow-waitListForm mt-8 " >
                <div className="w-[100%]">
                    <p className="text-center text-white text-[3rem] font-[700] " >Join the waitlist</p>
                </div>
                <div className="w-[70%]">
                    <p className="text-center text-white text-[1.8rem] leading-[2.5rem] " >{"Be the first to experience our exciting talent launch! Join our waitlist for exclusive early access and stay ahead of the game. Don't miss this opportunity!"}</p>
                </div>
                <div className="w-[70%]">
                    <div className="flex justify-between items-center" >
                        <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] w-[48%]  h-[4.7rem]" />
                        <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] w-[48%] h-[4.7rem] " />
                    </div>
                    <div className="flex justify-between items-center mt-8"  >
                        <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] w-[48%]  h-[4.7rem]" />
                        <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] w-[48%] h-[4.7rem] " />
                    </div>
                    <button className=" mt-8 bg-bgBtn rounded-[23.5px] w-[20%] h-[4.7rem] text-[2rem] text-center text-white " >Joi Now</button>
                </div>
            </div>
        </div>
    )
}

export default Waitlist
