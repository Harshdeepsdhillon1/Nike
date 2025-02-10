import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, AlignJustify, X } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  let closeTimeout = null;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout); // Prevent closing if user moves to expanded navbar
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsExpanded(false);
    }, 150); // Small delay to prevent flickering
  };

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
      <div 
        className="main-navbar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="logo">
          <img src="/images/nike-logo.png" alt="Nike Logo" />
        </div>
        {!isMobile && (
          <div className="nav-links">
            <span>New & Featured</span>
            <span>Mens</span>
            <span>Womens</span>
            <span>Kids</span>
          </div>
        )}

        <div className="icons">
          {!isMobile && (
            <div className="search-bar">
              <Search size={24} color="#000000" />
              <input type="text" placeholder="Search" />
            </div>
          )}
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

      {/* Expanded Navbar - Visible when hovering */}
      {!isMobile && isExpanded && (
        <motion.div 
          className="expanded-navbar"
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={handleMouseEnter}  // Keep it open if hovering
          onMouseLeave={handleMouseLeave} // Close when leaving both
        >
          <div className="expanded-content">
                <div className="column">
                <h3>Featured</h3>
                <span>Shop All New Arrivals</span>
                <span>Best Sellers</span>
                <span>SNKRS Launch Calendar</span>
            </div>
            <div className="column">
                <h3>Shop Icons</h3>
                <span>Air Force 1</span>
                <span>Air Jordan 1</span>
                <span>Air Max</span>
                <span>Dunk</span>
                <span>Blazer</span>
                <span>Pegasus</span>
                <span>Mercurial</span>
            </div>
            <div className="column">
                <h3>Jordan</h3>
                <span>Shop All Jordan</span>
                <span>Latest Drops</span>
                <span>Streetwear</span>
                <span>Jordan Basketball</span>
                <span>Jordan Golf</span>
                <span>Jordan x PSG</span>
            </div>
            <div className="column">
                <h3>Discover Sport</h3>
                <span>Football</span>
                <span>Running</span>
                <span>Basketball</span>
                <span>Fitness</span>
                <span>Golf</span>
                <span>Tennis</span>
                <span>Yoga</span>
                <span>Dance</span>
                <span>Skateboarding</span>
            </div>

        </div>
        </motion.div>
      )}

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <button className="close-menu" onClick={() => setMenuOpen(false)}>
            <X size={28} color="#000000" />
          </button>
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
