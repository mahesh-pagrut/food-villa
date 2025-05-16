import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('explore-menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order. Eat. Enjoy. Repeat!</h2>
        <p>
          Choose from a delicious menu of expertly crafted dishes, made with the freshest ingredients to satisfy your cravings.
        </p>
        <button onClick={scrollToMenu}>
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
