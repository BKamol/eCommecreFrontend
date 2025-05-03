import React from 'react'
import MainBlock from '../assets/components/home-page-components/MainBlock'
import NewArrivalsBlock from '../assets/components/home-page-components/NewArrivalsBlock'
import HorizontalLine from '../assets/components/HorizontalLine'
import TopSellingBlock from '../assets/components/home-page-components/TopSellingBlock'
import DressStyleBlock from '../assets/components/home-page-components/DressStyleBlock'
import HappyCustomersBlock from '../assets/components/home-page-components/HappyCustomersBlock'

const Home = () => {
  return (
    <div>
      <MainBlock />
      <NewArrivalsBlock />
      <HorizontalLine />
      <TopSellingBlock />
      <DressStyleBlock />
      <HappyCustomersBlock />
    </div>
  )
}

export default Home