import React from 'react'
import { useState } from 'react';
import { SlidersVertical } from 'lucide-react'

function SettingsBlock({ settingsHandler }) {

  return (
    <div className='flex flex-row g-2 px-10 lg:px-16 py-4 justify-between items-center'>
        <p className='text-3xl font-bold'>Casual</p>
        <p className='text-sm opacity-60'>Showing 1-10 of 100 Products</p>
        <button onClick={ settingsHandler } className="flex items-center justify-center bg-[#f0f0f0] rounded-full w-8 h-8 cursor-pointer">
        <SlidersVertical size={18} />
        </button>
    </div>
  )
}

export default SettingsBlock