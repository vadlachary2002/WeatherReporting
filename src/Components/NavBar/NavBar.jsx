import React from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
  return (
    <div className="nav">
      <ul>
        <li> <NavLink to='/'> Search </NavLink></li>
        <li> <NavLink to='/home'>   Home </NavLink> </li>
        <li> <NavLink to='/about'>  About </NavLink></li>
        <li> <NavLink to='/contact'> Contact </NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar;