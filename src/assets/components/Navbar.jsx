import React from 'react'
import { Menu, Search, ShoppingCart, CircleUserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import NavbarLinks from './NavbarLinks'
import NavbarSearch from './NavbarSearch'

function Navbar() {
  return (
    <div className='flex flex-row items-center gap-4 py-4 px-10 lg:px-16'>
        <Menu color="#000000" className='sm:hidden'/>
        <Link to="/" className="header-text text-3xl md:text-4xl" >SHOP.CO</Link>
        <div className="flex-1 flex items-center justify-center gap-8 xl:gap-16">
          <NavbarLinks />
          <NavbarSearch />
        </div>
        <div className="flex flex-row gap-4">
            <Link to='category'>
              <Search size={20} color="#000000" className="lg:hidden" />
            </Link>
            <Link to="cart">
              <ShoppingCart size={20} color="#000000" />
            </Link>
            <Link to="/profile">
              <CircleUserRound size={20} color="#000000" />
            </Link>
        </div>
    </div>
  )
}

export default Navbar