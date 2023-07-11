
import HomePhoto from "../../public/home/vectors/football.svg"
import HomePhoto1 from "../../public/home/vectors/boxing.svg"
import HomePhoto2 from "../../public/home/vectors/hockey.svg"
import Triangle from "../../public/home/triangle.svg"
import TriangleDown from "../../public/home/triangle_down.svg"
import arrow from "../../public/home/vectors/btn_arrow.svg"
import { Link, useNavigate } from "react-router-dom"

const HeroArea = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/forms")
    }

    return (
        <>
            <div className='w-full  bg-homeBlackBg lg:h-screen    xl:h-[80vh] 2xsm:h-[90vh]  xsm:h-[90vh] flex lg:flex-row flex-col items-center justify-center relative md:h-[110vh] overflow-hidden'>
                <div className='lg:w-[40%]  w-[90%] xsm:h-[40%]  lg:h-[80%]  ' >
                    <div className=' gradientBg w-[100%] h-[100%]  flex-col lg:items-start 2xsm:items-center  2xsm:justify-center flex relative ' >

                        <p className='md:text-[7rem] lg:text-[7rem] md:font-[700] 2xsm:text-center lg:text-left 2xsm:text-[3rem]  xsm:text-[4rem] text-textWhite md:leading-[8rem] xsm:leading-[4rem] xsm:mt-10  lg:leading-[8.5rem] font-[700] lg:mt-[-4%]' >
                            Now invest in
                            <br />
                            your favorite
                            <br />
                            <span className='text-primaryOrange'>athlete.</span>
                        </p>

                        <button onClick={handleClick} className="button mt-10 learn-more 2xsm:w-[65%] md:w-[35%] lg:w-[50%] xsm:ml-5">
                            <span className="circle 2xsm:w-[3rem] 2xsm:h-[3rem] xsm:w-[4rem] xsm:h-[4rem] " aria-hidden="true">
                                <span className="icon arrow">
                                    <img src={arrow} alt="" />
                                </span>
                            </span>
                            <span className="button-text 2xsm:ml-5 xsm:ml-0">Get Started Now</span>
                            <button className="leftLearnMore 2xsm:w-[3rem] 2xsm:h-[3rem] xsm:w-[4rem] xsm:h-[4rem]"></button>
                        </button>

                    </div>
                </div>

                <div className='lg:w-[40%]   w-[90%] h-[100%] md:h-[60%] lg:h-[100%]  blueGradientBg flex_row_center relative  xsm:mt-5' >

                    {/* Football */}
                    <div className='heroArea_Cards lg:h-[70%] w-[50%] h-[60%] md:h-[70%] md:w-[40%] z-10 aspect-9/16 min-h-[29.6rem] min-w-[19.9rem] hover:scale-[1.01]' >
                        <img src={HomePhoto} alt="Football Image" className='lg:h-[80%] xsm:h-[100%] aspect-9/16' />
                    </div>

                    {/* boxing */}
                    <div className='heroArea_Cards  top-[5%] right-[10%] xsm:h-[35%] xsm:w-[25%] z-20 md:right-[14%] hover:scale-[1.01] ' >
                        <img src={HomePhoto1} alt="" className='  xsm:h-[70%] ' />
                        <img src={TriangleDown} alt="" className='absolute top-[-10%] right-[-1%] md:top-[-5%] aspect-9/16' />
                    </div>
                    y
                    {/* hockey */}
                    <div className='heroArea_Cards  bottom-[5%] left-[5%] md:left-[10%] z-20 xsm:h-[35%] xsm:w-[30%] md:w-[25%] hover:scale-[1.01]'  >
                        <img src={HomePhoto2} alt="" className=' h-[80%] aspect-9/16' />
                        <img src={Triangle} alt="" className='absolute top-[-10%] right-[-12%]' />
                    </div>



                    {/* number */}
                    <div className=' heroArea_Numbers  top-[18%] left-[18%] md:left-[25%] w-[90px] ' >
                        <p className='text-[2.5rem] text-textGreen '> 110% </p></div>
                    <div className=' heroArea_Numbers bottom-[22%] md:right-[25%] right-[20%] w-[80px]  ' >
                        <p className='text-[2rem] text-textGreen '> 80% </p></div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#1436AE" className=" left-[20%] absolute top-[10%] xsm:left-[10%]">
                    <path opacity="0.8" d="M16 8C16.0018 8.23452 15.9305 8.46379 15.7961 8.65592C15.6616 8.84805 15.4707 8.99351 15.2497 9.07208L10.7169 10.7209L9.06931 15.2544C8.9881 15.4732 8.84188 15.662 8.6503 15.7953C8.45871 15.9286 8.23093 16 7.99756 16C7.76419 16 7.53642 15.9286 7.34483 15.7953C7.15324 15.662 7.00702 15.4732 6.92581 15.2544L5.27746 10.7159L0.745384 9.07208C0.526601 8.99084 0.337913 8.84458 0.204667 8.65293C0.0714205 8.46129 0 8.23344 0 8C0 7.76656 0.0714205 7.53871 0.204667 7.34707C0.337913 7.15542 0.526601 7.00916 0.745384 6.92792L5.28246 5.27907L6.92581 0.745611C7.00702 0.526762 7.15324 0.338016 7.34483 0.204729C7.53642 0.0714422 7.76419 0 7.99756 0C8.23093 0 8.45871 0.0714422 8.6503 0.204729C8.84188 0.338016 8.9881 0.526762 9.06931 0.745611L10.7177 5.28407L15.2497 6.92792C15.4707 7.00649 15.6616 7.15195 15.7961 7.34408C15.9305 7.53622 16.0018 7.76548 16 8Z" fill="#1436AE" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=" left-[40%] absolute top-[60%] xsm:top-[70%]">
                    <path opacity="0.9" d="M16 8C16.0018 8.23452 15.9305 8.46379 15.7961 8.65592C15.6616 8.84805 15.4707 8.99351 15.2497 9.07208L10.7169 10.7209L9.06931 15.2544C8.9881 15.4732 8.84188 15.662 8.6503 15.7953C8.45871 15.9286 8.23093 16 7.99756 16C7.76419 16 7.53642 15.9286 7.34483 15.7953C7.15324 15.662 7.00702 15.4732 6.92581 15.2544L5.27746 10.7159L0.745384 9.07208C0.526601 8.99084 0.337913 8.84458 0.204667 8.65293C0.0714205 8.46129 0 8.23344 0 8C0 7.76656 0.0714205 7.53871 0.204667 7.34707C0.337913 7.15542 0.526601 7.00916 0.745384 6.92792L5.28246 5.27907L6.92581 0.745611C7.00702 0.526762 7.15324 0.338016 7.34483 0.204729C7.53642 0.0714422 7.76419 0 7.99756 0C8.23093 0 8.45871 0.0714422 8.6503 0.204729C8.84188 0.338016 8.9881 0.526762 9.06931 0.745611L10.7177 5.28407L15.2497 6.92792C15.4707 7.00649 15.6616 7.15195 15.7961 7.34408C15.9305 7.53622 16.0018 7.76548 16 8Z" fill="#7928BC" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=" right-[30%] absolute xsm:top-[30%]">
                    <path opacity="0.8" d="M16 8C16.0018 8.23452 15.9305 8.46379 15.7961 8.65592C15.6616 8.84805 15.4707 8.99351 15.2497 9.07208L10.7169 10.7209L9.06931 15.2544C8.9881 15.4732 8.84188 15.662 8.6503 15.7953C8.45871 15.9286 8.23093 16 7.99756 16C7.76419 16 7.53642 15.9286 7.34483 15.7953C7.15324 15.662 7.00702 15.4732 6.92581 15.2544L5.27746 10.7159L0.745384 9.07208C0.526601 8.99084 0.337913 8.84458 0.204667 8.65293C0.0714205 8.46129 0 8.23344 0 8C0 7.76656 0.0714205 7.53871 0.204667 7.34707C0.337913 7.15542 0.526601 7.00916 0.745384 6.92792L5.28246 5.27907L6.92581 0.745611C7.00702 0.526762 7.15324 0.338016 7.34483 0.204729C7.53642 0.0714422 7.76419 0 7.99756 0C8.23093 0 8.45871 0.0714422 8.6503 0.204729C8.84188 0.338016 8.9881 0.526762 9.06931 0.745611L10.7177 5.28407L15.2497 6.92792C15.4707 7.00649 15.6616 7.15195 15.7961 7.34408C15.9305 7.53622 16.0018 7.76548 16 8Z" fill="#7928BC" />
                </svg>
            </div>
            {/* circles */}
            {/* <PurpleGradientCircle /> */}
        </>
    )
}

export default HeroArea
