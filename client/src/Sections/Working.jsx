import img3 from "../../public/home/cards/hands-in-purse.png"
import img1 from "../../public/home/cards/money-in-hand.png"
import img2 from "../../public/home/cards/stars-on-hand.png"
const FeatureCards = ({ img_URL, HeadText, Description }) => {
    return (
        <>
            <div className="lg:w-[30%] xsm:w-[80%] md:w-[44%] md:h-[30%] xsm:h-[30%] lg:h-[80%] xl:h-[90%] pb-5 rounded-[20px] flex flex-col justify-around items-center bg-cardsBg min-h-[28.27rem] max-w-[33.6rem] xsm:mt-10 lg:mt-0 " >
                <div className="w-[90%] h-[90%] flex flex-col justify-between items-center " >

                    <img src={img_URL} alt="" className="w-[18.4rem] h-[13.8rem]   " />
                    <p className="lg:text-[2.5rem] xsm:text-[2.019rem] md:text-[2.5rem] text-white font-[700]" > {HeadText} </p>
                    <p className="w-[100%] h-[30%] md:w-[90%] xsm:text-[1.45rem] md:text-[1.8rem] text-center leading-8 font-light text-white lg:text-[1.4rem]" > {Description} </p>
                </div>
            </div>
        </>
    )
}

const Working = () => {
    return (
        <div className="w-full lg:h-[100vh] 2xl:h-[80vh]   flex flex-col justify-center items-center   bg-homeBlackBg  relative overflow-hidden xsm:mt-24 workingCircleBg"  >
            <p className="text-white text-[3rem] font-[700] " >{"How it Works?"}</p>
            <div className='lg:w-[80%] 2xl:w-[60%] xsm:w-[90%]  lg:h-[65%] xsm:h-[90%]  lg:flex lg:flex-row justify-between items-center xsm:flex xsm:flex-col' >
                <FeatureCards img_URL={img1} HeadText={"Invest in athletes"} Description={"Invest in athletes on maze and own a share of their future earnings."} />
                <FeatureCards img_URL={img3} HeadText={"Get Royalty Share"} Description={"Invest in athletes on maze and own a share of their future earnings."} />
                <FeatureCards img_URL={img2} HeadText={"Get Exclusive perks"} Description={"We put athletes and ans together in the same team. Get a chance for to connect them for a provide chat, get personlised gifts and other perks."} />
            </div>

        </div>
    )
}

export default Working
