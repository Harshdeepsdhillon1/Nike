import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, AlignJustify, X } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
        {!isMobile && (
        <div className="tiny-navbar">
          <div className="logos">
            <img src="/images/jordan-logo.png" alt="Jordan Logo" />
            <img src="/images/converse-logo.png" alt="Converse Logo" />
          </div>
          <div className="links">
            <span>Find a Store</span> | <span>Help</span> | <span>Join Now</span> | <span>Sign In</span>
          </div>
        </div>
      )}
      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="logo">
          <img src="/images/nike-logo.png" alt="Nike Logo" />
        </div>
        {/* Desktop Nav Links - Hidden on Mobile */}
        {!isMobile && (
          <div className="nav-links">
            <span>New & Featured</span>
            <span>Mens</span>
            <span>Womens</span>
            <span>Kids</span>
          </div>
        )}

        <div className="icons">
          {/* Search Bar - Hidden on Mobile */}
          {!isMobile && (
            <div className="search-bar">
              <Search size={24} color="#000000" />
              <input type="text" placeholder="Search" />
            </div>
          )}
          {/* Search Icon (Only for Mobile) */}
          {isMobile && <Search size={24} color="#000000" />}
          <Heart size={24} color="#000000" />
          <ShoppingBag size={24} color="#000000" />
  
          {isMobile && (
            <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
              <AlignJustify size={28} color="#000000" />
            </button>
          )}
        </div>

      </div>
        
      {/* Mobile Menu (with Framer Motion for animation) */}
      {isMobile && menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ x: "100%" }}  // Start from off-screen
          animate={{ x: 0 }}       // Slide to its position
          exit={{ x: "100%" }}     // Exit animation when closed
          transition={{ type: "spring", stiffness: 300, damping: 25 }} // Smooth spring transition
        >
          <button className="close-menu" onClick={() => setMenuOpen(false)}>
            <X size={28} color="#000000" />
          </button>

          {/* Mobile Menu Content */}
          <div className="mobile-nav-links">
            <span>New & Featured</span>
            <span>Mens</span>
            <span>Womens</span>
            <span>Kids</span>
            <span>Find a Store</span>
            <span>Help</span>
            <span>Join Now</span>
            <span>Sign In</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
