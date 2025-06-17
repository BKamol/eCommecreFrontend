import React from 'react'

function Stats() {
    return (
        <div className='flex flex-row flex-wrap gap-4 py-4 md:py-8 items-center justify-center sm:justify-between sm:gap-2'>
            <div className='flex flex-col px-2 sm:px-0'>
                <p className='header-text text-3xl'>200+</p>
                <p className='opacity-60'>International Brands</p>
            </div>
            <div className='vertical-line'></div>
            <div className='flex flex-col px-2 sm:px-0'>
                <p className='header-text text-3xl'>2,000+</p>
                <p className='opacity-60'>High-Quality Products</p>
            </div>
            <div className='vertical-line hidden sm:block'></div>
            <div className='flex flex-col px-2 sm:px-0'>
                <p className='header-text text-3xl'>30,000+</p>
                <p className='opacity-60'>Happy Customers</p>
            </div>
        </div>
    )
}

export default Stats