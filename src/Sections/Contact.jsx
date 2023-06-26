import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center items-center w-full xsm:h-[80vh] lg:h-[100vh] bg-homeBlackBg ' >
      <div className="xsm:w-[90%] xsm:h-[80%] bg-FormColor rounded-[30px] shadow-FormShadow flex flex-col justify-around items-center xsm:pt-2 xsm:pb-2 border-2 border-green-900">
        <div className="w-[100%]  border-2 ">
          <p className="text-center text-white xsm:text-[2rem] lg:text-[3rem] font-[700] md:text-[2.5rem]" >Contact Us</p>
        </div>
        <div className="lg:w-[70%] md:w-[70%] xsm:w-[100%] xsm:h-[65%] xsm:flex  xsm:flex-col xsm:justify-between xsm:items-center border-2 border-red-600">

          <div className="flex items-center justify-around xsm:flex-col xsm:h-[20%] xsm:w-[100%]  xsm:justify-between border-2 border-green-500 lg:flex-row " >

            <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%] lg:w-[48%]  h-[4.7rem]" />
            <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%] lg:w-[48%] h-[4.7rem] " />
          </div>


          <div className="flex items-center justify-around  xsm:mt-0 xsm:flex-col xsm:h-[20%] xsm:w-[100%] xsm:justify-between border-2 border-green-500 lg:flex-row"   >
            <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%]  lg:w-[48%]  h-[4.7rem]" />
            <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%]  lg:w-[48%] h-[4.7rem] " />
          </div>

          <div className="flex items-center justify-around  xsm:mt-0 xsm:flex-col lg:h-[50%] xsm:h-[40%] xsm:w-[100%] xsm:justify-around border-2 border-green-500">

            <div className="xsm:w-[100%] lg:h-[100%]">
              <textarea name="" id="" cols="30" className='xsm:w-[100%] lg:h-[90%] rounded-[18.012px] bg-waitListInput '  ></textarea>
            </div>
            <button className="  bg-bgBtn rounded-[23.5px] xsm:w-[40%] lg:w-[15%] xsm:mt-0 md:h-[4rem] xsm:h-[4.4rem] lg:h-[4.6rem] md:text-[2rem] xsm:text-[1.5rem] text-center text-white lg:text-[2rem]" >Submit</button>

          </div>

        </div>



      </div>
    </div>
  )
}

export default Contact
