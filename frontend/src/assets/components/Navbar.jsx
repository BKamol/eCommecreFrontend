import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';
import NavbarSearch from './NavbarSearch';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <div className="flex items-center justify-between py-4 px-6 lg:px-16 bg-white z-20 relative">
        {/* Menu & Logo */}
        <div className="flex items-center gap-4">
          <button className="sm:hidden cursor-pointer" onClick={() => setIsMenuOpen(true)}>
            <Menu color="#000000" />
          </button>
          <Link to="/" className="header-text text-3xl md:text-4xl">
            SHOP.CO
          </Link>
        </div>

        {/* Desktop links & search */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-16 flex-1 justify-center">
          <NavbarLinks />
          <NavbarSearch 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery} />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden cursor-pointer" onClick={() => setIsMobileSearchOpen(true)}>
            <Search size={20} color="#000000" />
          </button>
          <Link to="/cart">
            <ShoppingCart size={20} color="#000000" />
          </Link>
          <Link to="/profile">
            <CircleUserRound size={20} color="#000000" />
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-sm bg-white/50 z-30"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Side Menu */}
          <div className="fixed top-0 left-0 w-64 h-full bg-white z-40 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="flex items-center justify-between p-4 border-b border-[#f0f0f0]">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-4 p-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/category" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>
              <Link to="/cart" onClick={() => setIsMenuOpen(false)}>Cart</Link>
            </div>
          </div>
        </>
      )}

      {/* Mobile Search Overlay */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/50 flex items-start px-4 py-4 shadow-md">
          <div className="flex items-center gap-2 bg-[#f0f0f0] w-full rounded-[25px] py-2 px-4">
            <Search size={20} color="#000000" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const style = "All";
                const kind = "All";
                navigate(`/category?style=${style}&kind=${kind}&q=${encodeURIComponent(searchQuery || 'All')}`);
                setIsMobileSearchOpen(false);
              }}
              className="w-full"
            >
              <input
                type="text"
                placeholder="Search for products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="focus:outline-none w-full bg-transparent"
                autoFocus
              />
            </form>
            <button onClick={() => setIsMobileSearchOpen(false)}>
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;