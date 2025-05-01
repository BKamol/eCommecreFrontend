import React from 'react'
import { Link } from 'react-router-dom'
import SocialMediaLinks from './SocialMediaLinks'
import PaymentMethodsList from './PaymentMethodsList'

function FooterLinks() {
  return (
    <div className='flex flex-col gap-4'>
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-10">
            <div className='flex flex-col gap-3'>
                <Link to="/" className="header-text text-3xl md:text-4xl" >
                    SHOP.CO
                </Link>
                <p className='opacity-60'>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                <SocialMediaLinks />
            </div>
            <div className='flex flex-row gap-20 md:gap-10 pb-4'>
                <div className='flex flex-col gap-4 min-w-[140px]'>
                    <p className="font-medium tracking-[0.2rem]">COMPANY</p>
                    <p className='opacity-60 text-sm'>About</p>
                    <p className='opacity-60 text-sm'>Features</p>
                    <p className='opacity-60 text-sm'>Works</p>
                    <p className='opacity-60 text-sm'>Career</p>
                </div>
                <div className='flex flex-col gap-4 min-w-[140px]'>
                    <p className="font-medium tracking-[0.2rem]">HELP</p>
                    <p className='opacity-60 text-sm'>Customer Support</p>
                    <p className='opacity-60 text-sm'>Delivery Details</p>
                    <p className='opacity-60 text-sm'>Terms & Conditions</p>
                    <p className='opacity-60 text-sm'>Privacy Policy</p>
                </div>
            </div>
            <div className='flex flex-row gap-20 md:gap-10 pb-4'>
                <div className='flex flex-col gap-4 min-w-[140px]'>
                    <p className="font-medium tracking-[0.2rem]">FAQ</p>
                    <p className='opacity-60 text-sm'>Account</p>
                    <p className='opacity-60 text-sm'>Manage Deliveries</p>
                    <p className='opacity-60 text-sm'>Orders</p>
                    <p className='opacity-60 text-sm'>Payment</p>
                </div>
                <div className='flex flex-col gap-4 min-w-[140px]'>
                    <p className="font-medium tracking-[0.2rem]">RESOURCES</p>
                    <p className='opacity-60 text-sm'>Free eBook</p>
                    <p className='opacity-60 text-sm'>Development toturial</p>
                    <p className='opacity-60 text-sm'>How to - Blog</p>
                    <p className='opacity-60 text-sm'>Youtube Playlist</p>
                </div>
            </div>
        </div>
        <div className="custom-hr"></div>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between opacity-60 pb-15'>
            <p className='flex items-center'>Shop.co © 2000-2023, All Rights Reserved</p>
            <PaymentMethodsList />
        </div>
        

    </div>
  )
}

export default FooterLinks