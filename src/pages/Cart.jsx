import React from 'react'
import HorizontalLine from '../assets/components/HorizontalLine'
import Breadcrumb from '../assets/components/Breadcrumb'
import ShoppingCart from '../assets/components/cart-page-components/ShoppingCart'

const Cart = () => {
  return (
    <div>
      <HorizontalLine />
      <Breadcrumb items={[{label: 'Home', href: '/'}, 
                          {label: 'Cart', href:'/cart'}]} />
      <p className='header-text text-4xl py-4 px-10 lg:px-16'>YOUR CART</p>
      <ShoppingCart />
    </div>
  )
}

export default Cart