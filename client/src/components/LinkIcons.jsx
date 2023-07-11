import React from 'react'

const LinkIcons = ({ url, imgSrc }) => {
  return (
    <a href={url}>
      <img src={imgSrc} alt="" className='xsm:w-[2.7rem] xsm:h-[2.7rem] md:w-[3.1rem] md:h-[3.1rem]' />
    </a>
  )
}

export default LinkIcons
