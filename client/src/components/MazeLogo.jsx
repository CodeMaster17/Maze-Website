import React from 'react'
import Logo from "/Logo/logo.svg"
const MazeLogo = () => {
    return (
        <div className="flex items-center w-[80%] justify-start   " >
            <img src={Logo} alt="" className="xsm:w-[2rem] xsm:h-[3.3rem] 2xsm:w-[1.7rem] 2xsm:h-[2.9rem]  " />
            <p className="logo not-italic font-medium xsm:text-[3.55295rem] 2xsm:text-[3rem] leading-[5.3rem] " >maze</p>
        </div>
    )
}

export default MazeLogo
