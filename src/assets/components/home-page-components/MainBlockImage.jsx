import React from 'react'

function MainBlockImage() {
    return (
      <div className="bg-[url('src/assets/images/TwoPeopleSmall.svg')] bg-cover bg-center bg-no-repeat w-full h-[660px]">
        <img className='pl-[80%] py-5 scale-80' src="src\assets\images\BigStar.svg" alt="BigStar"/>
        <img className='pl-10 scale-80' src="src\assets\images\SmallStar.svg" alt="SmallStar"/>
      </div>
    )
}

export default MainBlockImage