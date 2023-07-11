
import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import CustomDropdown from '../components/CustomDropdown'
import { Listbox } from '@headlessui/react'
import { age } from '../Data/data';
const Contact = () => {

  const [buttonState, setButtonState] = useState("Send Message")
  const [selecteditem, setSelecteditem] = useState(age[0])
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
      setButtonState(" Message Sent")
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
              <Input type="text" value={userMessage.name} onChange={handleChange} name="name" placeholder="Name" pattern="" />
              <Input type="tel" value={userMessage.contact} onChange={handleChange} name="contact" placeholder="Phone No." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            </div>


            <div className="inputStyle  xsm:mt-0 xsm:flex-col xsm:h-[25%] xsm:max-h-[9rem] xsm:w-[100%] xsm:justify-between  lg:flex-row md:h-[23%] "   >
              <Input type="email" value={userMessage.email} onChange={handleChange} name="email" placeholder="Email" pattern="" />
              {/* <Input type="text" value={userMessage.fanType} onChange={handleChange} name="fanType" placeholder="Fan Athlete" pattern="" /> */}
              {/* <CustomDropdown fanType={userMessage.fanType} onChange={handleChange} /> */}
              <Listbox value={userMessage.fanType} onChange={setSelecteditem} name="fanType" as="div" className="  rounded-[23.5px] xsm:w-[100%]  lg:w-[48%] h-[3.6rem]  min-h-[3.6rem] max-h-[4.7rem] ">
                {/* <Listbox.Label>Assignee:</Listbox.Label> */}
                <Listbox.Button onClick={handleChange} className=" bg-waitListInput  text-inputText rounded-[23.5px] w-[100%]    h-[100%] text-left pl-10 flex justify-between items-center pr-10">
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
            </div>

            <div className="inputStyle md:justify-between  xsm:mt-0 xsm:flex-col lg:h-[50%] xsm:h-[40%] xsm:w-[100%] xsm:justify-around  md:h-[40%]  ">
              <div className="xsm:w-[100%] xsm:h-[70%]  lg:h-[100%] md:h-[80%] ">
                <textarea name="message" id="" value={userMessage.message} onChange={handleChange} autoComplete='true' cols="30" placeholder='Your Message' className='xsm:w-[100%] p-5 lg:h-[90%] md:h-[100%] xsm:h-[100%] rounded-[18.012px] bg-waitListInput  text-inputText lg:min-h-[15rem] '  ></textarea>
              </div>
              <Button text={buttonState} onClick={sendEmail} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
