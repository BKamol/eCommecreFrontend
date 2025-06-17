import React from 'react'

function HorizontalLine({applyPadding=true, mt=0, mb=5}) {
  return (
    <div className={applyPadding? `px-10 lg:px-16 mb-${mb} mt-${mt}` : `mb-${mb} mt-${mt}`}>
      <div className='h-[1px] w-full bg-[#f0f0f0]'></div>
      </div>
  )
}

export default HorizontalLine