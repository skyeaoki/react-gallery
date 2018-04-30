import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link to='/sunset'>Sunset</Link></li>
        <li><Link to='/hawaii'>Hawaii</Link></li>
        <li><Link to='/tulips'>Tulips</Link></li>
      </ul>
    </nav>
  );
};

export default MainNav;
