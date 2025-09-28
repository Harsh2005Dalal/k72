import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-4 mb-4'>
        <div>
            <Link className="text-[6vw] hover:border-[#D3DF50] hover:text-[#D3FD50] border-4 rounded-full px-10 pt-4 leading-[6vw] uppercase " to='/projects'>Projects</Link>
        </div>
        <div>
            <Link className="text-[6vw] hover:border-[#D3DF50] hover:text-[#D3FD50] border-4 rounded-full px-10 pt-4 leading-[6vw] uppercase " to='agence'>Agence</Link>
        </div>
    </div>
  )
}

export default HomeBottomText
