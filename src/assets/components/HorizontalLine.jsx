import React from 'react'

function HorizontalLine({applyPadding=true, mt=0, mb=5}) {
  return (
    <div className={applyPadding? 'px-10 lg:px-16' : ''}>
      <div className={`h-[1px] w-full mb-${mb} mt-${mt} bg-[#f0f0f0]`}></div>
      </div>
  )
}

export default HorizontalLine