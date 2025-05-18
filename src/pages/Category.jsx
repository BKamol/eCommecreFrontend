import React from 'react'
import { useState } from 'react'
import HorizontalLine from '../assets/components/HorizontalLine'
import Breadcrumb from '../assets/components/Breadcrumb'
import FilterableGrid from '../assets/components/category-page-components/FilterableGrid'

const Category = () => {

  return (
    <div>
      <HorizontalLine />
      <Breadcrumb items={[{label: 'Home', href: '/'}, 
                          {label: 'Category', href:'/category'}]} />
      <FilterableGrid />
    </div>
  )
}

export default Category