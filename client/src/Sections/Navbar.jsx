import { useState } from "react"
import { Button } from "../utils/Components"

import { Link } from "react-router-dom"
import NavIcon from "../../public/home/vectors/NavIcon.svg"
import Close from "../../public/home/icons/close.svg"
import SideBar from "../components/SideBar"
import MazeLogo from "../components/MazeLogo"
const Navbar = () => {

    const [showNavIcon, setShowNavIcon] = useState(false);
    const ButtonHandler = () => {
        console.log("clicked")
        setShowNavIcon(true)
    }


    return (
        <div className='w-full xsm:h-[10vh]   lg:h-[15vh] bg-homeBlackBg flex items-center  justify-center relative  ' >
            <div className="lg:w-[80%] 2xsm:w-[90%] mt-2 h-[100%] flex justify-between items-center ">
                <Link to="/">

                    <MazeLogo />
                </Link>

                {/* navicon */}
                {/* <button className="flex items-center justify-center border-4 border-yellow-400 2xsm:w-12 2xsm:h-12 xsm:w-15 xsm:h-15 2xsm:block lg:hidden" onClick={ButtonHandler} >
                    <img src={NavIcon} alt="NavIcon" className="w-full h-full" />
                </button> */}
                {showNavIcon ? (<SideBar onClick={() => setShowNavIcon(!showNavIcon)} />) : (
                    <>

                    </>
                )}
                <div className="flex 2xl:w-[40%] lg:w-[50%] md:w-[40%] justify-between items-center    2xsm:hidden lg:block " >
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
