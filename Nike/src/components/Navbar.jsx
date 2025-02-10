// src/components/Navbar.jsx
import React from 'react';
import { Search, Heart, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Tiny Navbar */}
      <div className="tiny-navbar">
        <div className="logos">
          <img src="/images/jordan-logo.png" alt="Jordan Logo" />
          <img src="/images/converse-logo.png" alt="Converse Logo" />
        </div>
        <div className="links">
          <span>Find a Store</span> | <span>Help</span> | <span>Join Now</span> | <span>Sign In</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="logo">
          <img src="/images/nike-logo.png" alt="Nike Logo" />
        </div>
        <div className="nav-links">
          <span>New & Featured</span>
          <span>Mens</span>
          <span>Womens</span>
          <span>Kids</span>
        </div>
        <div className="icons">
          <div className='search-bar'>
          <Search size={24} color="#000000" />
          <input type="text" placeholder="Search" />
          </div> 
          <Heart size={24} color="#000000" />
          <ShoppingBag size={24} color="#000000" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
