import "./App.css";
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div class="h-20 bg-hartmanblue-400">
      <div class="w-full">
        <span class="float-left">This is the portfolio repo</span>
        <span class="float-right">
          <NavLink to="/about" href="/about" class="font-sans text-lg text-white"></NavLink>
          <NavLink to="/resume" href="/resume" class="font-sans text-lg text-white"></NavLink>
        </span>
      </div>
    </div>
  )
}

export default NavBar