import React from 'react'
import LatestOffers from './LatestOffers'
import FooterLinks from './FooterLinks'


function Footer() {
  return (
    <>
      <div className='bg-[linear-gradient(to_bottom,_#ffffff_50%,_#f0f0f0_50%)] pb-15'>
        <LatestOffers />
      </div>
      <div className='flex flex-col gap-6 px-10 lg:px-16 bg-[#f0f0f0]'>
      <FooterLinks  />
      </div>
    </>
    
  )
}

export default Footer