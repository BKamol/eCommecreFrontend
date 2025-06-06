import React from 'react'
import { Search } from 'lucide-react'

function NavbarSearch() {
  return (
    <div className="hidden lg:flex items-center gap-2 bg-[#f0f0f0] w-80 xl:w-100 rounded-[25px] py-2 px-4 opacity-60">
        <Search color="#000000" size={20} />
        <form action="/category">
          <input type="text" placeholder="Search for products" className='focus:outline-none'></input>
        </form>
    </div>
  )
}

export default NavbarSearch