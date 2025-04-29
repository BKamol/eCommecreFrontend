import React from 'react'
import StyleCard from './StyleCard'

function DressStyleBlock() {
  return (
    <div className='px-10 lg:px-16'>
        <div className='bg-[#f0f0f0] rounded-[25px] py-14 px-10 lg:px-16 flex flex-col gap-4'>
            <p className='header-text text-center text-4xl lg:text-5xl pb-4'>BROWSE BY DRESS STYLE</p>
            <StyleCard image_url={'src/assets/images/CasualImage.svg'} title={'Casual'} />
            <StyleCard image_url={'src/assets/images/FormalImage.svg'} title={'Formal'} />
            <StyleCard image_url={'src/assets/images/PartyImage.svg'} title={'Party'} />
            <StyleCard image_url={'src/assets/images/GymImage.svg'} title={'Gym'} />
        </div>
    </div>
  )
}

export default DressStyleBlock