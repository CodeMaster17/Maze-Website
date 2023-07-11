import React from 'react'

const Youtube = () => {
    return (
        <div className='w-full lg:h-[90vh] md:h-[50vh] h-[40vh]  flex flex-col mt-24 justify-center items-center '>
            <p className="text-white text-center xsm:text-[2rem] lg:text-[3rem] font-[700] mt-2 md:text-[3rem]" >Revolutionizing the sports industry</p>
            <div className='w-[80%] h-[90%] bg-FormColor min-w-[34rem] min-h-[21rem]  m-auto mt-5 rounded-[1rem] shadow-FormShadow flex justify-center items-center md:min-w-[62rem] md:min-h-[39.5rem] lg:min-w-[107.2rem] ' >
                <div className='w-[80%] lg:h-[80%] md:h-[80%] h-[70%]  min-w-[31.5rem]   md:min-w-[55.4rem] lg:w-[70%]'>
                    <iframe className='w-full h-full cover ' src="https://www.youtube-nocookie.com/embed/kilXmoqMh6I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Youtube
