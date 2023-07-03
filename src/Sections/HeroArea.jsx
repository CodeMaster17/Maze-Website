
import HomePhoto from "../../public/home/vectors/football.svg"
import HomePhoto1 from "../../public/home/vectors/boxing.svg"
import HomePhoto2 from "../../public/home/vectors/hockey.svg"
import Triangle from "../../public/home/triangle.svg"
import TriangleDown from "../../public/home/triangle_down.svg"
import arrow from "../../public/home/vectors/btn_arrow.svg"
import { BlueGradientCircle, PurpleGradientCircle } from '../components/GradientCircle'

const HeroArea = () => {
    const ButtonHandler = () => {
        console.log("clicked")
        // setShowNavIcon(true)
    }

    console.log(ButtonHandler)


    return (
        <>

            <div className='w-[100vw] bg-homeBlackBg lg:h-screen xl:h-[80vh] 2xsm:h-[90vh]  xsm:h-[80vh] flex lg:flex-row flex-col items-center justify-center relative md:h-[110vh] overflow-hidden'>
                <div className='lg:w-[40%]  w-[90%] xsm:h-[30%]  lg:h-[80%]  ' >
                    <div className='w-[100%] h-[100%]  flex-col lg:items-start 2xsm:items-center  2xsm:justify-center flex relative ' >

                        <p className='md:text-[7rem] lg:text-[7rem] md:font-[700] 2xsm:text-center lg:text-left 2xsm:text-[3rem]  xsm:text-[4rem] text-textWhite md:leading-[8rem] xsm:leading-[4rem] xsm:mt-10  lg:leading-[8.5rem] font-[700] lg:mt-[-25%]' >
                            Now Invest in
                            <br />
                            your Favorite
                            <br />
                            <span className='text-primaryOrange'>Athlete.</span>
                        </p>
                        <button className="mt-10 learn-more 2xsm:w-[65%] md:w-[35%] lg:w-[50%]">
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

                <div className='lg:w-[40%]   w-[90%] h-[100%] md:h-[60%] lg:h-[100%] flex_row_center relative' >

                    {/* Football */}
                    <div className='heroArea_Cards lg:h-[70%] w-[50%] h-[60%] md:h-[70%] md:w-[40%] z-10' >
                        <img src={HomePhoto} alt="Football Image" className='lg:h-[80%] xsm:h-[100%] ' />
                    </div>

                    {/* boxing */}
                    <div className='heroArea_Cards  top-[5%] right-[10%] xsm:h-[35%] xsm:w-[25%] z-20 md:right-[14%]  ' >
                        <img src={HomePhoto1} alt="" className='  xsm:h-[70%] ' />
                        <img src={TriangleDown} alt="" className='absolute top-[-10%] right-[-1%] md:top-[-5%] ' />
                    </div>
                    y
                    {/* hockey */}
                    <div className='heroArea_Cards  bottom-[5%] left-[5%] md:left-[10%] z-20 xsm:h-[35%] xsm:w-[30%] md:w-[25%] '  >
                        <img src={HomePhoto2} alt="" className=' h-[80%]' />
                        <img src={Triangle} alt="" className='absolute top-[-10%] right-[-12%]' />
                    </div>



                    {/* number */}
                    <div className=' heroArea_Numbers  top-[18%] left-[18%] md:left-[25%] w-[90px] ' >
                        <p className='text-[2.5rem] text-textGreen '> 110% </p></div>
                    <div className=' heroArea_Numbers bottom-[22%] md:right-[25%] right-[20%] w-[80px]  ' >
                        <p className='text-[2rem] text-textGreen '> 80% </p></div>
                </div>
                {/* circles */}

            </div>
            {/* <PurpleGradientCircle /> */}
        </>
    )
}

export default HeroArea
