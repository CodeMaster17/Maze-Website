import React from 'react'

const Input = ({ type, placeholder, pattern, name, onChange }) => {
    return (
        <input type={type} onChange={onChange} placeholder={placeholder} pattern={pattern} name={name} className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%] lg:w-[48%]  min-h-[3.6rem] max-h-[4.7rem] text-inputText " />
    )
}

export default Input
