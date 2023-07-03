
import Logo from "../../public/Logo/logo.svg"
import instagram_URL from "../../public/home/icons/instagram.svg"
import linkedIn__URL from "../../public/home/icons/linkedIn.svg"
import facebook_URL from "../../public/home/icons/facebook.svg"
import location_URL from "../../public/home/icons/location.svg"


const Footer = () => {
    return (
        <div className='w-full lg:h-[50vh] 2xl:h-[30vh] xsm:h-[50vh] md:h-[50vh] flex justify-center items-center bg-homeBlackBg mb-5' >
            <div className="xsm:w-[90%] xsm:h-[80%] lg:w-[80%] ">
                <div className='w-full xsm:h-[100%]  flex lg:flex-row xsm:flex-col justify-between'>

                    <div className='w-full xsm:h-[50%]  lg:w-[40%] ' >
                        <div className="flex items-center w-[40%] justify-start  " >
                            <img src={Logo} alt="" className="w-[2rem] h-[3.3rem] " />
                            <p className="logo not-italic font-medium text-[3.55295rem] leading-[5.3rem]  " >maze</p>
                        </div>
                        <p className='text-white xsm:text-[1.5rem] md:text-[2rem] md:leading-[3.1rem] font-300 xsm:leading-[2.2rem] lg:text-[1.6rem] lg:leading-[3.2rem]' >Maze is a sports tech company that allows fans to invest in the talents they believe and own a part of their future success.</p>
                        <div className='flex xsm:w-[30%] justify-between items-center mt-5'  >
                            <img src={instagram_URL} alt="" className='xsm:w-[1.8rem] xsm:h-[1.8rem] md:w-[3.1rem] md:h-[3.1rem]' />
                            <img src={facebook_URL} alt="" className='xsm:w-[2.3rem] xsm:h-[2.3rem] md:w-[3.1rem] md:h-[3.1rem] ' />
                            <img src={linkedIn__URL} alt="" className='xsm:w-[1.8rem] xsm:h-[1.8rem] md:h-[3.1rem] md:w-[3.1rem]' />
                        </div>
                    </div>
                    <div className='flex lg:w-[50%] lg:h-[60%] xsm:h-[40%] justify-between w-full ' >

                        <div className='xsm:w-[40%] flex flex-col justify-between xsm:border-l-[1px] xsm:pl-5 border-l-[1px] border-borderLine ' >
                            <a href="" className='text-white xsm:text-[1.8rem] md:text-[2.1rem] lg:text-[2rem]'>About Us</a>
                            <a href="" className='text-white xsm:text-[1.8rem] md:text-[2.1rem] lg:text-[2rem]'>Contact Us</a>
                            <a href="" className='text-white xsm:text-[1.8rem] md:text-[2.1rem] lg:text-[2rem]'>Career</a>
                        </div>
                        <div className='xsm:w-[50%] lg:w-[60%] xsm:border-l-[1px] xsm:pl-5 flex justify-between border-l-[1px] items-start border-borderLine ' >
                            <img src={location_URL} alt="" className='xsm:w-[1.4rem] xsm:h-[2rem] md:w-[2.4rem] md:h-[2.4rem]' />
                            <p className='xsm:text-[1.2rem] lg:text-[2rem] xsm:leading-[1.9rem] md:text-[2.1rem] md:leading-[2.4rem] text-white xsm:pl-5'>C-71, First Floor, Sector 63, Noida 201301</p>
                        </div>
                    </div>
                </div>
                <p className='text-white md:text-[1.6rem] xsm:text-[1.4rem] xsm:mt-5 lg:mt-0'>copyright © 2023 by Yaro Technology Pvt Ltd</p>
            </div>
        </div>
    )
}

export default Footer
