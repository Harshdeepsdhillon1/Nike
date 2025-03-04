import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, AlignJustify, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "../css/navbar.css";

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
              <AlignJustify size={28} color="#0e0e0e" />
            </button>
          )}
        </div>
      </div>

      {/* Expanded Navbar - Visible when hovering */}
<AnimatePresence>
  {!isMobile && isExpanded && (
    <motion.div
      className="expanded-navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -30, opacity: 0 }}
      transition={{ type: "tween", duration: 0.5, ease: "anticipate" }} // Smooth and controlled
      onMouseEnter={handleMouseEnter} // Keep it open if hovering
      onMouseLeave={handleMouseLeave} // Close when leaving both
    >
      <div className="expanded-content">
        <div className="column">
          <h3>Featured</h3>
          <span>Shop All New Arrivals</span>
          <span>Best Sellers</span>
        </div>
        <div className="column">
          <h3>Shop Icons</h3>
          <span>Air Force 1</span>
          <span>Air Jordan 1</span>
          <span>Air Max</span>
          <span>Dunk</span>
          <span>Blazer</span>
          <span>Pegasus</span>
        </div>
        <div className="column">
          <h3>Jordan</h3>
          <span>Shop All Jordan</span>
          <span>Latest Drops</span>
          <span>Streetwear</span>
          <span>Jordan Basketball</span>
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
</AnimatePresence>


      {/* Mobile Menu */}
        <AnimatePresence>
          {isMobile && menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ x: "100%" }} // Start off-screen (Right side)
              animate={{ x: 0 }} // Slide in to position
              exit={{ x: "100%" }} // Slide out when closing
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button className="close-menu" onClick={() => setMenuOpen(false)}>
                <X size={28} color="#0e0e0e"/>
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
        </AnimatePresence>
          {/* Overlay Background */}
      {(menuOpen && (isMobile || isExpanded)) && (
      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={() => {
          setMenuOpen(false);
          setIsExpanded(false);
        }}
      />
      )}
    </div>
  );
};

export default Navbar;
