import { useState } from 'react';
import { Listbox } from '@headlessui/react'
import Button from '../components/Button';
import { BlueGradientCircle } from '../components/GradientCircle';
import Input from '../components/Input';
import { age } from '../Data/data';



const DropDown = () => {

    const [selecteditem, setSelecteditem] = useState(age[0])
    return (
        <>

            <Listbox value={selecteditem} onChange={setSelecteditem} as="div" className=" bg-waitListInput rounded-[23.5px] xsm:w-full  lg:w-[48%]  h-[4.7rem]  min-h-[3.6rem] max-h-[4.7rem] ">
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

                <Listbox.Options className="relative z-30 bg-white rounded-[10px] p-3  ">
                    {age.map((item) => (
                        <Listbox.Option
                            key={item.id}
                            value={item}
                            disabled={item.unavailable}
                        >
                            {item.name}

                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </>
    )
}





const Waitlist = () => {

    return (
        <div className='w-full  lg:h-[90vh] md:h-[70vh] xsm:h-[70vh]  bg-homeBlackBg flex flex-col items-center justify-center relative min-h-[60rem] lg:mt-48 xsm:mt-24' >
            <p className="text-white text-center xsm:text-[2rem] lg:text-[3rem] font-[700] md:text-[3rem]" >Revolutionizing the sports industry</p>
            <div className="lg:w-4/5 2xl:w-[70%] 2xl:h-3/5 xsm:w-[90%] h-4/5 flex flex-col xsm:justify-center lg:justify-center gap-10 items-center  bg-FormColor rounded-[30px] shadow-FormShadow mt-8 border-2 border-blue-300" >
                <div className='w-full h-[90%] border-2  flex flex-col xsm:justify-center lg:justify-center gap-10 items-center' >

                    <p className="text-center text-white xsm:text-[2rem] lg:text-[3rem] font-[700] md:text-[2.5rem]" >Join the waitlist</p>

                    <div className="lg:w-[70%] xsm:w-[90%] md:w-4/5 border-2 ">
                        <p className="text-center text-white xsm:text-[1.5rem]  lg:text-[1.8rem] leading-[2.5rem] " >{"Be the first to experience our exciting talent launch! Join our waitlist for exclusive early access and stay ahead of the game. Don't miss this opportunity!"}</p>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 xsm:w-4/5 xsm:h-3/5 xsm:flex lg:h-[15%] xsm:flex-col xsm:justify-between xsm:items-center  ">
                        <div className="flex lg:flex-row  items-center justify-between xsm:flex-col xsm:h-[45%] xsm:w-full  xsm:justify-around lg:h-1/2 " >
                            <Input type="text" placeholder="Name" />
                            <Input type="email" placeholder="Email" />
                        </div>
                        <div className="flex lg:flex-row  items-center justify-between lg:mt-8 xsm:mt-0 xsm:flex-col xsm:h-[45%] xsm:w-full xsm:justify-around lg:h-1/2 lg:mb-5  "  >
                            <Input type="tel" placeholder="Phone No." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                            <DropDown />
                        </div>
                        <Button text="Join Now" />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='border-2 border-red-400 top-[30%] left-1/5 absolute '>
                        <path opacity="0.9" d="M16 8C16.0018 8.23452 15.9305 8.46379 15.7961 8.65592C15.6616 8.84805 15.4707 8.99351 15.2497 9.07208L10.7169 10.7209L9.06931 15.2544C8.9881 15.4732 8.84188 15.662 8.6503 15.7953C8.45871 15.9286 8.23093 16 7.99756 16C7.76419 16 7.53642 15.9286 7.34483 15.7953C7.15324 15.662 7.00702 15.4732 6.92581 15.2544L5.27746 10.7159L0.745384 9.07208C0.526601 8.99084 0.337913 8.84458 0.204667 8.65293C0.0714205 8.46129 0 8.23344 0 8C0 7.76656 0.0714205 7.53871 0.204667 7.34707C0.337913 7.15542 0.526601 7.00916 0.745384 6.92792L5.28246 5.27907L6.92581 0.745611C7.00702 0.526762 7.15324 0.338016 7.34483 0.204729C7.53642 0.0714422 7.76419 0 7.99756 0C8.23093 0 8.45871 0.0714422 8.6503 0.204729C8.84188 0.338016 8.9881 0.526762 9.06931 0.745611L10.7177 5.28407L15.2497 6.92792C15.4707 7.00649 15.6616 7.15195 15.7961 7.34408C15.9305 7.53622 16.0018 7.76548 16 8Z" fill="#1436AE" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='border-2 border-red-400 bottom-[30%] right-1/5 absolute '>
                        <path opacity="0.6" d="M16 8C16.0018 8.23452 15.9305 8.46379 15.7961 8.65592C15.6616 8.84805 15.4707 8.99351 15.2497 9.07208L10.7169 10.7209L9.06931 15.2544C8.9881 15.4732 8.84188 15.662 8.6503 15.7953C8.45871 15.9286 8.23093 16 7.99756 16C7.76419 16 7.53642 15.9286 7.34483 15.7953C7.15324 15.662 7.00702 15.4732 6.92581 15.2544L5.27746 10.7159L0.745384 9.07208C0.526601 8.99084 0.337913 8.84458 0.204667 8.65293C0.0714205 8.46129 0 8.23344 0 8C0 7.76656 0.0714205 7.53871 0.204667 7.34707C0.337913 7.15542 0.526601 7.00916 0.745384 6.92792L5.28246 5.27907L6.92581 0.745611C7.00702 0.526762 7.15324 0.338016 7.34483 0.204729C7.53642 0.0714422 7.76419 0 7.99756 0C8.23093 0 8.45871 0.0714422 8.6503 0.204729C8.84188 0.338016 8.9881 0.526762 9.06931 0.745611L10.7177 5.28407L15.2497 6.92792C15.4707 7.00649 15.6616 7.15195 15.7961 7.34408C15.9305 7.53622 16.0018 7.76548 16 8Z" fill="#7928BC" />
                    </svg>
                </div>
            </div>
            {/* circle */}

            {/* <BlueGradientCircle  /> */}
        </div >
    )
}

export default Waitlist
