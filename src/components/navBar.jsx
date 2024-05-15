import React from 'react';

const NavBar = props => {
    return (
      <nav className="navbar navbar-light bg-light">
        
        <a className="navbar-brand h1 font-weight-bold" href=".">
          Navbar
          <span className="badge badge-pill badge-primary">
            {props.totalCounters}
          </span>
        </a>
      </nav>
    );
}
 
export default NavBar;