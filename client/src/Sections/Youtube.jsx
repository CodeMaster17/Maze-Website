
import Heading from '../components/Heading'

const Youtube = () => {
    return (
        <div className='w-full lg:h-[90vh] md:h-[50vh] h-[40vh]  flex flex-col mt-24 justify-center items-center '>
            <Heading text={"Revolutionizing the sports industry"} />
            {/* <br /> */}
            {/* <br /> */}
            <div className='w-4/5 h-[90%]  min-w-[34rem] min-h-[21rem]  rounded-[1rem]  flex justify-center items-center md:min-w-[62rem] md:min-h-[39.5rem] lg:min-w-[107.2rem] ' >
                <div className='w-4/5 lg:h-4/5 md:h-4/5 h-[70%]  min-w-[31.5rem]   md:min-w-[55.4rem] lg:w-[70%]'>
                    {/* <iframe className='w-full h-full cover ' src="https://www.youtube-nocookie.com/embed/kilXmoqMh6I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                    <iframe className='w-full h-full cover ' src="https://www.youtube-nocookie.com/embed/fv_OkLd_V88" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Youtube
