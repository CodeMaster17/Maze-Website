import React from 'react'
import { Link } from 'react-router-dom'
import { linkedIn_URL } from '../Data/data'

const SideBar = ({ onClick }) => {
    return (
        <div className='absolute right-0 w-1/2 h-[100vh] bg-navbarBg z-50 top-0 flex justify-end' >
            <button className='left-[-5%] md:left-[-6.5%]  top-[5%] absolute ' onClick={onClick}>
                <img src="/sidebar-icon.svg" className='w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem] ' alt="close-button" />
            </button>

            <div className='w-[80%]  left-[5%] top-[10%]  mt-[20%] flex flex-col '>
                <Link to="/" className='text-[2rem] text-textWhite md:text-[3rem] font-[400] mt-2'>Home</Link>
                <Link to={linkedIn_URL} className='text-[2rem] text-textWhite md:text-[3rem] font-[400] mt-2'>Contact</Link>
                <a className='text-[2rem] text-textWhite md:text-[3rem] font-[400] mt-2'>Join Now</a>
            </div>
        </div>
    )
}

export default SideBar
