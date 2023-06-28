import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center items-center w-full xsm:h-[80vh] md:h-[100vh] lg:h-[100vh] bg-homeBlackBg ' >
      <div className="xsm:w-[90%] lg:w-[80%] xsm:h-[80%] bg-FormColor rounded-[30px] shadow-FormShadow flex flex-col justify-around items-center xsm:pt-2 xsm:pb-2 ">


        <div className="w-[100%] ">
          <p className="text-center text-white xsm:text-[2rem] lg:text-[3rem] font-[700] md:text-[2.5rem]" >Contact Us</p>
        </div>



        <div className="lg:w-[70%] md:w-[70%] xsm:w-[100%] xsm:h-[65%]  xsm:flex  xsm:flex-col xsm:justify-between xsm:items-center   md:h-[80%] ">

          <div className="flex items-center justify-around xsm:flex-col xsm:h-[20%] xsm:w-[100%]  xsm:justify-between lg:flex-row md:h-[23%] " >

            <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%] lg:w-[48%]  h-[5rem]" />
            <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%] lg:w-[48%] h-[5rem] " />
          </div>


          <div className="flex items-center justify-around  xsm:mt-0 xsm:flex-col xsm:h-[20%] xsm:w-[100%] xsm:justify-between  lg:flex-row md:h-[23%] "   >
            <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%]  lg:w-[48%]  h-[5rem]" />
            <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%]  lg:w-[48%] h-[5rem] " />
          </div>

          <div className="flex items-center justify-around md:justify-between  xsm:mt-0 xsm:flex-col lg:h-[50%] xsm:h-[40%] xsm:w-[100%] xsm:justify-around  md:h-[40%] ">

            <div className="xsm:w-[100%] lg:h-[100%] md:h-[100%]">
              <textarea name="" id="" autoComplete='true' cols="30" className='xsm:w-[100%]  lg:h-[90%] md:h-[80%] rounded-[18.012px] bg-waitListInput '  ></textarea>
            </div>


            <button className="  bg-bgBtn rounded-[23.5px] xsm:w-[40%] lg:w-[15%] xsm:mt-0 md:h-[6rem] xsm:h-[4.4rem] lg:h-[4.6rem] md:text-[2.4rem]  xsm:text-[1.5rem] text-center text-white lg:text-[2rem]" >Submit</button>

          </div>

        </div>



      </div>
    </div>
  )
}

export default Contact
