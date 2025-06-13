import React from 'react'
import { useState } from 'react';
import { SlidersVertical, ChevronDown } from 'lucide-react'

function SettingsBlock({ settingsHandler, style="All" }) {

  return (
    <div className='flex flex-row g-2 py-4 justify-between items-center'>
        <p className='text-3xl font-bold'>{ style }</p>
        <div className="flex flex-row gap-4 items-center">
          <p className='text-sm opacity-60'>Showing 1-10 of 100 Products</p>
          <div className='hidden lg:flex flex-row gap-1'>
          <p className='text-sm opacity-60'>Sort by: </p>
          <p className='text-sm font-bold flex items-center'> Most Popular</p> <ChevronDown size={20} />
          </div>
           
        </div>
        <button onClick={ settingsHandler } className="flex items-center justify-center bg-[#f0f0f0] rounded-full w-8 h-8 cursor-pointer md:hidden">
        <SlidersVertical size={18} />
        </button>
    </div>
  )
}

export default SettingsBlock