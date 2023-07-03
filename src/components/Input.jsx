import React from 'react'

const Input = ({ type, placeholder, pattern }) => {
    return (
        <input type={type} placeholder={placeholder} pattern={pattern} className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%] lg:w-[48%]  h-[5rem] text-inputText" />
    )
}

export default Input
