import React, { useState } from 'react';
import { age } from '../Data/data';
import { Listbox } from '@headlessui/react'
const CustomDropdown = ({ fanType, handleChange }) => {
    const [selecteditem, setSelecteditem] = useState(age[0])

    return (
        <Listbox value={fanType} onChange={setSelecteditem} as="div" className=" bg-waitListInput rounded-[23.5px] xsm:w-full  lg:w-[48%]  h-[4.7rem]  min-h-[3.6rem] max-h-[4.7rem]">
            {/* <Listbox.Label>Assignee:</Listbox.Label> */}
            <Listbox.Button className=" bg-waitListInput  text-inputText rounded-[23.5px] w-full    h-full text-left pl-10 flex justify-between items-center pr-10">
                <p className='inline-block'>
                    {selecteditem.name}
                </p>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </span>
            </Listbox.Button>

            <Listbox.Options className="relative z-30 bg-white rounded-[10px] p-3 cursor-pointer ">
                {age.map((item) => (
                    <Listbox.Option
                        key={item.id}
                        value={item}
                        disabled={item.unavailable}
                        className="w-full hover:bg-slate-400"
                    >
                        {item.name}

                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    );
};

export default CustomDropdown;
