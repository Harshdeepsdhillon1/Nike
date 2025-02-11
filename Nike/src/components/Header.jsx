import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-img-container">
        <img
          src="images/nike-header-1.png" // Replace with your image URL
          alt="Header Background"
          className="header-img"
        />
      </div>
      <h1 className="header-title">Nike Airforce 1 Limited Edition</h1>
      <a href="#explore" className="explore-button">Explore More</a>
    </header>
  );
};

export default Header;
