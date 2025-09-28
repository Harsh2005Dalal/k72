import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font2] pt-5 text-center'>
      <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center'>The spark for</div>
      <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center'>all 
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-3"><Video/></div>
        things</div>
      <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center'>creative</div>
    </div>
  )
}

export default HomeHeroText
