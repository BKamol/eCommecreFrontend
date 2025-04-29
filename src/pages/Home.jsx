import React from 'react'
import MainBlock from '../assets/components/MainBlock'
import NewArrivalsBlock from '../assets/components/NewArrivalsBlock'
import HorizontalLine from '../assets/components/HorizontalLine'
import TopSellingBlock from '../assets/components/TopSellingBlock'
import DressStyleBlock from '../assets/components/DressStyleBlock'

const Home = () => {
  return (
    <div>
      <MainBlock />
      <NewArrivalsBlock />
      <HorizontalLine />
      <TopSellingBlock />
      <DressStyleBlock />
    </div>
  )
}

export default Home