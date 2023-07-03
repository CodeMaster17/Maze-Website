import { useState } from "react"
import { Button } from "../utils/Components"
import Logo from "/Logo/logo.svg"
import { Link } from "react-router-dom"
import NavIcon from "../../public/home/vectors/NavIcon.svg"
import Close from "../../public/home/icons/close.svg"
const Navbar = () => {

    const [showNavIcon, setShowNavIcon] = useState(false);
    const ButtonHandler = () => {
        console.log("clicked")
        setShowNavIcon(true)
    }


    return (
        <div className='w-full xsm:h-[10vh]   lg:h-[15vh] bg-homeBlackBg flex items-center  justify-center  ' >
            <div className="lg:w-[80%] xsm:w-[90%] h-[100%] flex justify-between items-center relative">

                <div className="flex items-center w-[80%] justify-start   " >
                    <img src={Logo} alt="" className="w-[2rem] h-[3.3rem] " />
                    <p className="logo not-italic font-medium text-[3.55295rem] leading-[5.3rem] " >maze</p>
                </div>


                <button className="flex items-center justify-center border-4 border-yellow-400 w-15 h-15 xsm:block lg:hidden" onClick={ButtonHandler} >
                    <img src={NavIcon} alt="NavIcon" className="w-full h-full" />
                </button>
                {showNavIcon ? (<div className="w-[50%] h-[20rem] bg-waitListInput absolute z-40 right-0 top-10 flex justify-center items-center rounded-[10px]">
                    <div className="w-[90%] h-[90%]  ">
                        <div className="flex items-end justify-end w-full ">
                            <button onClick={() => setShowNavIcon(false)} >
                                <img src={Close} alt="Close button" className="w-10 h-10" />
                            </button>

                        </div>
                        <div className="w-[100%] h-[80%] ">
                            <ul className="flex flex-col justify-between w-full h-full" >

                                <Link to="/" className="text-textWhite text-[2rem]">Home</Link>
                                <Link to="/" className="text-textWhite text-[2rem]">Contact</Link>
                                <Link to="/" ><button className=" text-textWhite  text-[2rem]" > Join Now</button></Link>
                            </ul>
                        </div>
                    </div>
                </div>) : (
                    <></>
                )}


                <div className="flex 2xl:w-[40%] lg:w-[50%] md:w-[40%] justify-between items-center    xsm:hidden lg:block " >
                    <div className="w-[100%] h-[100%] flex justify-between items-center ">
                        <Link to="/" className="text-textWhite text-[2rem]">Home</Link>
                        <Link to="/" className="text-textWhite text-[2rem]">Contact</Link>
                        <Link to="/" ><Button text={"Join Now"} /> </Link>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Navbar
