
import React, { useState } from 'react'
import Button from '../components/Button'
import { PurpleGradientCircle } from '../components/GradientCircle'
import Input from '../components/Input'

const Contact = () => {

  const [userMessage, setUserMessage] = useState({
    name: "", contact: "", email: "", fanType: "", message: ""

  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserMessage({ ...userMessage, [name]: value })
  }

  const sendEmail = async (e) => {

    e.preventDefault()
    const { name, contact, email, fanType, message } = userMessage;
    console.log("button clicked")
    const res = await fetch(`http://localhost:8004/sendMail`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"

      },
      body: JSON.stringify({
        name,
        contact,
        email,
        fanType,
        message
      })
    })
    const data = await res.json()
    console.log(data);
    if (data.status === 401 || !data) {
      console.log("error")
    }
    else {
      setUserMessage({ ...userMessage, name: "", email: "", contact: "", fanType: "", message: "" })
      console.log("email sent")
    }
  }


  return (
    <div className='flex justify-center items-center w-full  bg-homeBlackBg relative md:max-h-[70rem] xsm:mt-24 lg:mt-48 xsm:min-h-[50rem] h-[50rem] contactCircleBg ' >

      <div className="xsm:w-[90%] xl:w-[70%] lg:w-[80%]  bg-FormColor rounded-[30px] shadow-FormShadow flex flex-col justify-between xsm:gap-10 items-center xsm:pt-6 xsm:pb-2 h-full">
        <div className="w-[100%] ">
          <p className="text-center text-white xsm:text-[2rem] lg:text-[3rem] font-[700] md:text-[2.5rem]" >Contact Us</p>
        </div>
        <div className='w-full h-[90%] flex flex-col  items-center'>

          <div className="lg:w-[70%] md:w-[70%] xsm:w-[90%] xsm:h-[90%]  xsm:flex  xsm:flex-col xsm:justify-center xsm:gap-6 h-[100%]  xsm:items-center    md:h-[80%]  ">

            <div className="inputStyle xsm:flex-col xsm:h-[25%] xsm:w-[100%]  xsm:justify-between lg:flex-row md:h-[23%] xsm:max-h-[9rem] " >
              <Input type="text" onChange={handleChange} name="name" placeholder="Name" pattern="" />
              <Input type="tel" onChange={handleChange} name="contact" placeholder="Phone No." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            </div>


            <div className="inputStyle  xsm:mt-0 xsm:flex-col xsm:h-[25%] xsm:max-h-[9rem] xsm:w-[100%] xsm:justify-between  lg:flex-row md:h-[23%] "   >
              <Input type="email" onChange={handleChange} name="email" placeholder="Email" pattern="" />
              <Input type="text" onChange={handleChange} name="fanType" placeholder="Fan Athlete" pattern="" />
            </div>

            <div className="inputStyle md:justify-between  xsm:mt-0 xsm:flex-col lg:h-[50%] xsm:h-[40%] xsm:w-[100%] xsm:justify-around  md:h-[40%]  ">
              <div className="xsm:w-[100%] xsm:h-[70%]  lg:h-[100%] md:h-[80%] ">
                <textarea name="message" id="" autoComplete='true' cols="30" placeholder='Your Message' className='xsm:w-[100%] p-5 lg:h-[90%] md:h-[100%] xsm:h-[100%] rounded-[18.012px] bg-waitListInput  text-inputText lg:min-h-[15rem] '  ></textarea>
              </div>
              {/* <button className="   lg:mt-8 bg-bgBtn rounded-[23.5px] xsm:w-[50%] lg:w-[20%] xsm:mt-0 md:h-[4rem] xsm:h-[3.5rem] lg:h-[4.7rem] md:text-[2rem] xsm:text-[1rem] text-center text-white lg:text-[1.4rem" >Submit</button> */}
              <Button text="Submit" onClick={sendEmail} />
            </div>

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
