import React from 'react'




const Button = ({ text }) => {
    return (
        <button className=" lg:mt-8 bg-bgBtn rounded-[23.5px] xsm:w-[50%] lg:w-[20%] xsm:mt-0 md:h-[4rem] xsm:h-[3.5rem] lg:h-[4.7rem] md:text-[2rem] xsm:text-[1rem] text-center text-white lg:text-[1.4rem]" >{text}</button>
    )
}

export default Button
