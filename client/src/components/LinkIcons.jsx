import React from 'react'

const LinkIcons = ({url, imgSrc}) => {
  return (
      <a href={url}>
          <img src={imgSrc} alt="" className='xsm:w-[1.8rem] xsm:h-[1.8rem] md:w-[3.1rem] md:h-[3.1rem]' />
      </a>
  )
}

export default LinkIcons
