import React from 'react';

const Navbar = ({totalCounters}) => {
    return ( 
<nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="/">
      NavBar <span className="badge badge-pill badge-sm">{totalCounters}</span>
      </a>
  </nav>
     );
}
 
export default Navbar;