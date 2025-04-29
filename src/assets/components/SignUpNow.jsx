import React, { useState } from 'react'
import {X} from 'lucide-react'

const SignUpNow = () => {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpenness() {
    setIsOpen(false);
  }
  let divClass = isOpen ? "bg-black text-white w-full py-1.5 px-10 lg:px-16 flex items-center justify-between" : "hidden"

  return (
    <div className={divClass}>
        <p className='flex-1 text-center text-[12px] sm:text-[14px]'>Sign up and get 20% off to your first order. <u className='font-medium cursor-pointer'>Sign Up Now</u></p>
        <button onClick={handleOpenness}>
        <X color="#ffffff" className='hidden sm:block cursor-pointer' />
        </button>
    </div>
  )
}

export default SignUpNow