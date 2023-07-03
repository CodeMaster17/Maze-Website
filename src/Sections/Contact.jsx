import React from 'react'
import Button from '../components/Button'
import { PurpleGradientCircle } from '../components/GradientCircle'
import Input from '../components/Input'

const Contact = () => {
  return (
    <div className='flex justify-center items-center w-full xsm:h-[80vh] md:h-[100vh] lg:h-[100vh] xl:h-[70vh] bg-homeBlackBg relative' >
      <div className="xsm:w-[90%] xl:w-[70%] lg:w-[80%] xsm:h-[80%] bg-FormColor rounded-[30px] shadow-FormShadow flex flex-col justify-around items-center xsm:pt-2 xsm:pb-2 ">


        <div className="w-[100%] ">
          <p className="text-center text-white xsm:text-[2rem] lg:text-[3rem] font-[700] md:text-[2.5rem]" >Contact Us</p>
        </div>
        <div className="lg:w-[70%] md:w-[70%] xsm:w-[90%] xsm:h-[90%]  xsm:flex  xsm:flex-col xsm:justify-between xsm:items-center   md:h-[80%]  ">
          <div className="inputStyle xsm:flex-col xsm:h-[25%] xsm:w-[100%]  xsm:justify-between lg:flex-row md:h-[23%] " >
            <Input type="text" placeholder="Name" pattern="" />
            <Input type="tel" placeholder="Phone No." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
          </div>


          <div className="inputStyle  xsm:mt-0 xsm:flex-col xsm:h-[25%] xsm:w-[100%] xsm:justify-between  lg:flex-row md:h-[23%]"   >
            <Input type="email" placeholder="Email" pattern="" />
            <Input type="text" placeholder="Fan Athlete" pattern="" />
          </div>

          <div className="inputStyle md:justify-between  xsm:mt-0 xsm:flex-col lg:h-[50%] xsm:h-[40%] xsm:w-[100%] xsm:justify-around  md:h-[40%]  ">
            <div className="xsm:w-[100%] xsm:h-[70%]  lg:h-[100%] md:h-[80%] ">
              <textarea name="" id="" autoComplete='true' cols="30" placeholder='Your Message' className='xsm:w-[100%] p-5 lg:h-[90%] md:h-[100%] xsm:h-[100%] rounded-[18.012px] bg-waitListInput  text-inputText '  ></textarea>
            </div>
            {/* <button className="   lg:mt-8 bg-bgBtn rounded-[23.5px] xsm:w-[50%] lg:w-[20%] xsm:mt-0 md:h-[4rem] xsm:h-[3.5rem] lg:h-[4.7rem] md:text-[2rem] xsm:text-[1rem] text-center text-white lg:text-[1.4rem" >Submit</button> */}
            <Button text="Submit" />
          </div>

        </div>
      </div>
      {/* <div className='w-[795px] h-[795px] rounded-full bg-circleBlueLinearGradient absolute left-[-40%] top-[-15%] opacity-[0.4] ' >
      </div> */}
      {/* <PurpleGradientCircle /> */}
    </div>
  )
}

export default Contact
