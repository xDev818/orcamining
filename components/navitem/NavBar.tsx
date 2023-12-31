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

 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import 'font-awesome/css/font-awesome.min.css';



function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownabout, setDropdownabout] = useState(false);
  const [dropdownproduct, setDropdownproduct] = useState(false);

  const [state,setState] = useState({
    clicked : false
  })
  //state = {clicked : false}

  const handleClick =() => {
    setState({...state,clicked : !state.clicked })
    console.log(state.clicked)
}
  return (
    <>
    
      <nav className="navbar">
      <div className='menu-icon' onClick={handleClick}>
          <i className=
            {
             
              state.clicked 
              ?  'fa fa-times'
              : 'fa fa-bars'
            } >
          
          </i>
          {/* 
          'fa-solid fa-xmark' 
           'fa fa-shopping-cart'
          */}
      </div>
        <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
          
          {navItems.map((item) => {
            if(item.title === "About") {
                        
              return (
                  
                <li
                  key={item.id}
                  className={item.cName } 
                  onMouseEnter={() => setDropdownabout(true)}
                  onMouseLeave={() => setDropdownabout(false)}
                > 

                  <Link href={''}>{item.title}</Link>
                  {dropdownabout  
                  ?   
                  <i className="fa fa-caret-down">
                     <DropdownAbout/> 
                  </i> 
                  
                  : <i className="fa fa-caret-right">
                  </i>  }

                </li>
              
              );
              
            } else if (item.title === "Services") {
          
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link href={item.path}>{item.title}</Link>
                  {dropdown 
                  ? 
                  <i className="fa fa-caret-down">
                   <Dropdown />
                  </i> 
               
                  : 
                  <i className="fa fa-caret-right">
                  </i> 
                  }

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
