import React from 'react'



const Button = ({ text }) => {
    return (
        <button className="inline-flex mt-2 pt-[0.8431rem] pb-[0.8431rem] pl-[2.7593rem] pr-[2.7593rem] gap-[0.7665rem] items-start rounded-[1.8012rem] bg-bgBtn md:pt-[1.1rem] md:pb-[1.1rem] md:pl-[3.6rem] md:pr-[3.6rem] md:gap-[1rem] rounded--[2.35rem] lg:pt-[1.1rem] lg:pb-[1.3rem] lg:pl-[3.6rem] lg:pr-[3.6rem] text-textWhite text-[1.2rem] font-400 text-center " >{text}</button>
    )
}

export default Button
