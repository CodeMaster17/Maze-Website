import React from 'react'
import { visionText } from '../Data/data'

const VisionText = () => {
    return (
        <div className="w-full xsm:h-[15vh] lg:h-[20vh] flex_row_center bg-homeBlackBg mt-10">
            <div className='lg:w-4/5 xsm:w-[90%] md:w-4/5 h-full flex_row_center text-center  ' >
                <p className='lg:text-[3rem] xsm:text-[1.9rem] md:text-[3rem] font-[300] md:leading-[4.8rem] xsm:leading-[2.8rem] text-textWhite ' >{visionText} </p>

            </div>
        </div>
    )
}

export default VisionText
