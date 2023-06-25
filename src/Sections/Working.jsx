import img1 from "/public/home screen/cards/money-in-hand.png"
import img2 from "/public/home screen/cards/stars-on-hand.png"
import img3 from "/public/home screen/cards/hands-in-purse.png"
const FeatureCards = ({ img_URL, HeadText, Description }) => {
    return (
        <>
            <div className="w-[30%] h-[80%] pb-5 rounded-[20px] flex flex-col justify-around items-center bg-cardsBg " >
                <div className="w-[90%] h-[90%] flex flex-col justify-between items-center " >

                    <img src={img_URL} alt="" className="w-[18.4rem] h-[13.8rem] border-2 border-red-500  " />
                    <p className="text-[2.5rem] text-white font-[700]" > {HeadText} </p>
                    <p className="w-[100%] h-[30%] text-[1.8rem] text-center leading-8 font-light text-white " > {Description} </p>
                </div>
            </div>
        </>
    )
}

const Working = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center  border-2 border-white bg-homeBlackBg  "  >
            <p className="text-white text-[3rem] font-[700] " >{"How it Works?"}</p>
            <div className='w-[80%] h-[80%]  border-2 border-red-500 flex justify-between items-center ' >
                <FeatureCards img_URL={img1} HeadText={"Invest in athletes"} Description={"Invest in athletes on maze and own a share of their future earnings."} />
                <FeatureCards img_URL={img3} HeadText={"Get Royalty Share"} Description={"Invest in athletes on maze and own a share of their future earnings."} />
                <FeatureCards img_URL={img2} HeadText={"Get Exclusive perks"} Description={"We put athletes and ans together in the same team. Get a chance for to connect them for a provide chat, get personlised gifts and other perks."} />
            </div>
        </div>
    )
}

export default Working
