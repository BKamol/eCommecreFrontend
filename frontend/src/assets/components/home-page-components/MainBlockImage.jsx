import React from 'react'

function MainBlockImage() {
    return (
      <div className="bg-[url('/images/TwoPeopleSmall.svg')] md:bg-[url('/images/TwoPeople.svg')] bg-cover bg-center md:bg-right lg:bg-[center_right] bg-no-repeat w-full lg:w-[50%] h-[660px]">
        <img className='pl-[80%] py-5 scale-80' src="\images\BigStar.svg" alt="BigStar"/>
        <img className='pl-10 scale-80' src="\images\SmallStar.svg" alt="SmallStar"/>
      </div>
    )
}

export default MainBlockImage