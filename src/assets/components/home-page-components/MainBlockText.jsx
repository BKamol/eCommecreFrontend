import React from 'react'
import ShopNow from './ShopNow'
import Stats from './Stats'
import MainBlockImage from './MainBlockImage'

function MainBlockText() {
    return (
    <div className="flex flex-col gap-4 lg:gap-10 px-10 lg:px-16 py-10 md:py-12 w-full lg:w-[50%] bg-[#f0f0f0]">
        <p className='header-text text-5xl lg:text-6xl'>FIND CLOTHES THAT MATCHES YOU STYLE</p>
        <p className='opacity-60'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <ShopNow />
        <Stats />
    </div>
    )
}

export default MainBlockText