import { useState } from 'react';
import { Listbox } from '@headlessui/react'
import Button from '../components/Button';
import { BlueGradientCircle } from '../components/GradientCircle';


const people = [
    { id: 1, name: '18-25', unavailable: false },
    { id: 2, name: '26-30', unavailable: false },
    { id: 3, name: '20-37', unavailable: false },
    { id: 4, name: '37-50', unavailable: true },
    { id: 5, name: '50+', unavailable: false },
]

const DropDown = () => {

    const [selectedPerson, setSelectedPerson] = useState(people[0])
    return (
        <>

            <Listbox value={selectedPerson} onChange={setSelectedPerson} as="div" className=" bg-waitListInput rounded-[23.5px] xsm:w-[100%]  lg:w-[45%]  h-[4.7rem]  ">
                {/* <Listbox.Label>Assignee:</Listbox.Label> */}
                <Listbox.Button className=" bg-waitListInput  text-inputText rounded-[23.5px] w-[100%]   h-[100%] text-left pl-10 flex justify-between items-center pr-10">
                    <p className='inline-block'>
                        {selectedPerson.name}
                    </p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </span>
                </Listbox.Button>

                <Listbox.Options className="relative z-30 bg-white rounded-[10px] p-3  ">
                    {people.map((person) => (
                        <Listbox.Option
                            key={person.id}
                            value={person}
                            disabled={person.unavailable}
                        >
                            {person.name}

                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </>
    )
}





const Waitlist = () => {

    return (
        <div className='w-[100%]  lg:h-[90vh] md:h-[70vh] xsm:h-[70vh]  bg-homeBlackBg flex flex-col items-center justify-center relative ' >
            <p className="text-white text-center xsm:text-[2.5rem] lg:text-[3rem] font-[700] md:text-[3rem]" >Revolutionizing the sports industry</p>
            <div className="lg:w-[80%] 2xl:w-[70%] 2xl:h-[60%] xsm:w-[90%] h-[80%] flex flex-col xsm:justify-center  lg:justify-around items-center  bg-FormColor rounded-[30px] shadow-FormShadow mt-8 " >
                <div className="w-[100%] ">
                    <p className="text-center text-white xsm:text-[2rem] lg:text-[3rem] font-[700] md:text-[2.5rem]" >Join the waitlist</p>
                </div>
                <div className="lg:w-[70%] xsm:w-[90%] md:w-[80%]">
                    <p className="text-center text-white xsm:text-[1.5rem]  lg:text-[1.8rem] leading-[2.5rem] " >{"Be the first to experience our exciting talent launch! Join our waitlist for exclusive early access and stay ahead of the game. Don't miss this opportunity!"}</p>
                </div>
                <div className="lg:w-[50%] md:w-[50%] xsm:w-[80%] xsm:h-[60%] xsm:flex lg:h-[45%] xsm:flex-col xsm:justify-between xsm:items-center  ">
                    <div className="flex lg:flex-row  items-center justify-between xsm:flex-col xsm:h-[45%] xsm:w-[100%]  xsm:justify-around lg:h-[40%] " >
                        <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%] lg:w-[45%]  h-[4.7rem] text-inputText" />
                        <input type="email" placeholder="Email" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%] lg:w-[45%] h-[4.7rem] text-inputText" />
                    </div>
                    <div className="flex lg:flex-row  items-center justify-between lg:mt-8 xsm:mt-0 xsm:flex-col xsm:h-[45%] xsm:w-[100%] xsm:justify-around lg:h-[40%] "  >
                        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%]  lg:w-[45%]  h-[4.7rem] text-inputText" />
                        <DropDown />
                    </div>
                    <Button text="Join Now" />
                </div>
            </div>
            {/* circle */}
          
            {/* <BlueGradientCircle  /> */}
        </div >
    )
}

export default Waitlist
