import { Button } from "../utils/Components"
import Logo from "/public/Logo/logo.svg"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className='w-[100vw] xsm:h-[10vh]   lg:h-[15vh] bg-homeBlackBg flex items-center  border-2 border-green-500 justify-center  ' >
            <div className="flex items-center w-[40%] justify-start border-2 border-red-500  " >
                <img src={Logo} alt="" className="w-[2rem] h-[3.3rem] " />
                <p className="logo not-italic font-medium text-[3.55295rem] leading-[5.3rem] " >maze</p>
            </div>
            <div className="flex xl:w-[40%] md:w-[40%] justify-between items-center xsm:hidden   pl-[5%] " >
                <Link to="/" className="text-textWhite text-[2rem]">Home</Link>
                <Link to="/contact" className="text-textWhite text-[2rem]">Contact</Link>
                <Link to="/join" ><button className="bg-bgBtn rounded-btn text-textWhite w-[154px] h-[4.7rem] text-[2rem]" > Join Now</button></Link>
            </div>
        </div>
    )
}

export default Navbar
