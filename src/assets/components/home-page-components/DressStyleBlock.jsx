import React from 'react'

function DressStyleBlock() {
  return (
    <div className='px-10 lg:px-16'>
        <div className='bg-[#f0f0f0] rounded-[25px] py-14 px-10 lg:px-16 flex flex-col gap-4'>
            <p className='header-text text-center text-4xl lg:text-5xl pb-4'>BROWSE BY DRESS STYLE</p>
            <div className='flex flex-col lg:flex-row gap-4 w-full'>
              <div className="lg:w-[40%] w-full h-[250px] px-8 py-5 bg-[url('src/assets/images/CasualImage.svg')] bg-cover bg-center bg-no-repeat rounded-[25px]">
                <p className='text-4xl'>Casual</p>
              </div>
              <div className="lg:w-[60%] w-full h-[250px] px-8 py-5 bg-[url('src/assets/images/FormalImage.svg')] bg-cover bg-center bg-no-repeat rounded-[25px]">
                <p className='text-4xl'>Formal</p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 w-full'>
            <div className="lg:w-[60%] w-full h-[250px]  px-8 py-5 bg-[url('src/assets/images/PartyImage.svg')] bg-cover bg-center bg-no-repeat rounded-[25px]">
                <p className='text-4xl'>Party</p>
              </div>
              <div className="lg:w-[40%] w-full h-[250px] px-8 py-5 bg-[url('src/assets/images/GymImage.svg')] bg-cover bg-center bg-no-repeat rounded-[25px]">
                <p className='text-4xl'>Gym</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DressStyleBlock