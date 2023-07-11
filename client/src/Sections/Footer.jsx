
import Logo from "../../public/Logo/logo.svg"
import instagram_img_URL from "../../public/home/icons/instagram.svg"
import linkedIn__Img__URL from "../../public/home/icons/linkedIn.svg"
import facebook_img_URL from "../../public/home/icons/facebook.svg"
import location_URL from "../../public/home/icons/location.svg"
import { Link } from "react-router-dom"
import { address, facebook_URL, footerText, instagram_URL, linkedIn_URL } from "../Data/data"
import LinkIcons from "../components/LinkIcons"
import MazeLogo from "../components/MazeLogo"

const Footer = () => {
    return (
        <div className='w-full lg:h-[50vh] 2xl:h-[30vh] xsm:h-[50vh] md:h-[50vh] flex justify-center items-center bg-homeBlackBg mb-5 xsm:max-h-[40rem] lg:mt-48'  >
            <div className="xsm:w-[90%] xsm:h-[80%] lg:w-[80%] ">
                <div className='w-full xsm:h-[100%]  flex lg:flex-row xsm:flex-col justify-between'>

                    <div className='w-full xsm:h-[50%]  lg:w-[40%] ' >
                        <MazeLogo />
                        <p className='text-white xsm:text-[1.5rem] md:text-[2rem] md:leading-[3.1rem] font-300 xsm:leading-[2.2rem] lg:text-[1.6rem] lg:leading-[3.2rem]' >{footerText}</p>
                        <div className='flex xsm:w-[30%] justify-between items-center mt-5'  >
                            <LinkIcons url={instagram_URL} imgSrc={instagram_img_URL} />
                            <LinkIcons url={facebook_URL} imgSrc={facebook_img_URL} />
                            <LinkIcons url={linkedIn_URL} imgSrc={linkedIn__Img__URL} />
                        </div>
                    </div>
                    <div className='flex lg:w-[50%] lg:h-[60%] xsm:h-[40%] justify-between w-full ' >

                        <div className='xsm:w-[40%] flex flex-col justify-between xsm:border-l-[1px] xsm:pl-5 border-l-[1px] border-borderLine ' >
                            <Link to={linkedIn_URL} className='text-white xsm:text-[1.8rem] md:text-[2.1rem] lg:text-[2rem]'>About Us</Link>
                            <Link to={linkedIn_URL} className='text-white xsm:text-[1.8rem] md:text-[2.1rem] lg:text-[2rem]'>Contact Us</Link>
                            <Link to="/development" className='text-white xsm:text-[1.8rem] md:text-[2.1rem] lg:text-[2rem]'>Career</Link>
                        </div>
                        <div className='xsm:w-[50%] lg:w-[60%] xsm:border-l-[1px] xsm:pl-5 flex justify-between border-l-[1px] items-start border-borderLine ' >
                            <img src={location_URL} alt="" className='xsm:w-[1.4rem] xsm:h-[2rem] md:w-[2.4rem] md:h-[2.4rem]' />
                            <p className='xsm:text-[1.2rem] lg:text-[2rem] xsm:leading-[1.9rem] md:text-[2.1rem] md:leading-[2.4rem] text-white xsm:pl-5'>{address}</p>
                        </div>
                    </div>
                </div>
                <p className='text-white md:text-[1.6rem] xsm:text-[1.4rem] xsm:mt-5 lg:mt-0'>copyright © 2023 by Yaro Technology Pvt Ltd</p>
            </div>
        </div>
    )
}

export default Footer
