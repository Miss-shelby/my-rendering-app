import React from 'react'
import NavLinks from '../nav-search/page';
import NavSearch from '../nav-links/page';

const NavBar = () => {
    console.log("nav bar rendered");
    
  return (
    <div>
        <NavLinks/>
        <NavSearch/>
    </div>
  )
}

export default NavBar