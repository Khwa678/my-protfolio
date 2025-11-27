import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
  const active = "text-indigo-600 dark:text-indigo-400 font-semibold";
  const inactive = "text-gray-700 dark:text-gray-300 hover:text-indigo-600";

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">KS</div>
          <div>
            <div className="font-bold">Khwahish Seth</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Web Developer • Data Enthusiast</div>
          </div>
        </NavLink>

        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive})=> isActive ? active : inactive}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? active : inactive}>About</NavLink>
          <NavLink to="/projects" className={({isActive})=> isActive ? active : inactive}>Projects</NavLink>
          <NavLink to="/experience" className={({isActive})=> isActive ? active : inactive}>Experience</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? active : inactive}>Contact</NavLink>
          <NavLink to="/resume" className={({isActive})=> isActive ? active : inactive}>Resume</NavLink>
        </nav>
      </div>
    </header>
  );
}
