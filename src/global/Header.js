import { useState } from 'react';

// Import CSS
import './Header.css';
import Navigation from './Navigation';

const Header = () => {
  const [nav, setNav] = useState(true);
  return (
    <div className="header-main">
      <div
        className="menu"
        onClick={() => {
          setNav(!nav);
        }}
      >
        =
      </div>
      <div className="logo">Determined</div>
      {nav ? <Navigation /> : null}
    </div>
  );
};

export default Header;
