import React from "react";
import {Link} from 'react-router-dom'
import Logo from '../../Assets/galogo2.png'

import './NavBar.css'
// const searchIcon = <i className="fas fa-search"></i>

const NavBar = ({ user, handleLogout }) => {
  let nav = user ? 
    <>
      <nav className="nav-bar">
        <div className="logo-link">
          <Link to="/posts"><img alt="" src={Logo}></img></Link>
        </div>
        <div className="nav-search">
          <textarea className="search" placeholder="Search..."></textarea>
        </div>
        <div className="links">
          <ul className="right">
            <li>
              <Link className="nav-links" to={`/user/${user._id}`}>Welcome, {user.name}</Link>
            </li>
            <li>
              <Link className="nav-links" to="/login" onClick={handleLogout}>Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
    :
    <>
      <nav className="nav-bar">
      <div className="logo-link">
          <Link to="/posts"><img alt="" src={Logo}></img></Link>
        </div>
        <div className="links">
          <ul className="right">
            <li>
              <Link className="nav-links" to="/login">Log In</Link>
            </li>
            <li>
              <Link className="nav-links" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>

  return (
    nav
  );
};

export default NavBar;