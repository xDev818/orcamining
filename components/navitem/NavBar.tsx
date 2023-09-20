'use client'
import React, { useState } from "react";
//import { Link } from "react-router-dom";
import Link from 'next/link'
//import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItem";
import Button from "./Button";
import Dropdown from "./Dropdown";
import DropdownAbout from "./DropdownAbout";
import DropdownProduct from "./DropdownProduct";
 
function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownabout, setDropdownabout] = useState(false);
  const [dropdownproduct, setDropdownproduct] = useState(false);

  return (
    <>
      <nav className="navbar">
       
        <ul className="nav-items">
          
          {navItems.map((item) => {
             
           if (item.title === "Services") {
          
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link href={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            } else if(item.title === "About") {
             

              return (
                  
                <li
                
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdownabout(true)}
                  onMouseLeave={() => setDropdownabout(false)}
                >
                  
                  <Link href={item.path}>{item.title}</Link>
                  {dropdownabout && <DropdownAbout />}
                </li>
               
              );
              
            } else if(item.title === "Corporate Governance") {
                return (
                    
                  <li
                  
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdownproduct(true)}
                    onMouseLeave={() => setDropdownproduct(false)}
                  >
                    
                    <Link href={item.path}>{item.title}</Link>
                    {dropdownproduct && <DropdownProduct />}
                  </li>
                
                );
            }
            
            return (
              <li key={item.id} className={item.cName}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
       
      </nav>
    </>
  );
}

export default Navbar;
