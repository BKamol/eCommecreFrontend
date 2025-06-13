import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

function NavbarSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const style = searchParams.get('style') || 'All';
  const kind = searchParams.get('kind') || 'All';

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    navigate(`/category?style=${style}&kind=${kind}&q=${encodeURIComponent(searchQuery) || "All"}`);
    setSearchQuery("");
  };

  return (
    <div className="hidden lg:flex items-center gap-2 bg-[#f0f0f0] w-80 xl:w-100 rounded-[25px] py-2 px-4 opacity-60">
      <Search color="#000000" size={20} />
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="focus:outline-none w-full bg-transparent"
        />
      </form>
    </div>
  );
}

export default NavbarSearch;