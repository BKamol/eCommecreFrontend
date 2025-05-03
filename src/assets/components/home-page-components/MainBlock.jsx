import React from 'react'
import MainBlockImage from './MainBlockImage'
import MainBlockText from './MainBlockText'
import MainBlockLogo from './MainBlockLogo'

function MainBlock() {
  return (
    <div>
        <div className='flex flex-col lg:flex-row bg-[#f0f0f0]'>
            <MainBlockText />
            <MainBlockImage/>
        </div>
        <MainBlockLogo />
    </div>
  )
}

export default MainBlock