'use client'
import React, { useState } from "react";

import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import Navbar from '../navitem/NavBar'

import './style.css'

import OrcaLogoHeader from "../../app/src/assets/images/OrcaLogoHeader.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import 'font-awesome/css/font-awesome.min.css';

export default function Header() {

  //const [isOpen, setIsOpen] = useState(false);
  //const toggle = () => setIsOpen(!isOpen);
 
  const [dropdown, setDropdown] = useState(false);
  const [show,ShowDropDown] = useState(false);

  return (


    <header>
     
        <div className="container">
        
              <div className="logo-container">
                  <Link href="/"  >
                    <Image className="logo" src={OrcaLogoHeader} alt=''/>
                  </Link>
              </div>
              <input type="checkbox" name="" id="check">
              </input>
              <div className= "nav-btn" >
                <div className="nav-links" >
                    <ul >
                        <li className="nav-link" onMouseEnter={() => setDropdown(false)}>
                          <Link href="/" >
                            Home
                          </Link>
                        </li>
                        <li className="nav-link" onMouseEnter={() => setDropdown(false)}>
                            <a href="#">About Us<i className="fa fa-caret-down" ></i></a>
                            <div className= {dropdown ? "dropdown clicked" : "dropdown"} onClick={() => setDropdown(!dropdown)} >
                                <ul>
                                    <li className= "dropdown-link" >
                                      <Link  href="/pages/companyprofile"
                                      onClick={() => setDropdown(false)}
                                      >
                                        Company Profile
                                      </Link>
                                        
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/vision"
                                       onClick={() => setDropdown(false)}
                                      >
                                        Mission and Vision
                                      </Link>
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/core-values"
                                      onClick={() => setDropdown(false)}
                                      >
                                        Core Values
                                      </Link>
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/orgchart"
                                      onClick={() => setDropdown(false)}>
                                       Organizational Chart
                                      </Link>
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/articles"
                                      onClick={() => setDropdown(false)}
                                      >
                                      Articles of Incorporation and By-Laws
                                      </Link>
                                    </li>
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-link" onMouseEnter={() => setDropdown(false)}>
                            <a href="#">Services<i className="fa fa-caret-down"></i></a>
                            <div className= {dropdown ? "dropdown clicked" : "dropdown"} onClick={() => setDropdown(!dropdown)}>
                                <ul>
                                    <li className="dropdown-link">
                                      <Link href="/pages/services/mineral"
                                      onClick={() => setDropdown(false)}
                                      >
                                        Mineral Supply
                                      </Link>
                                        
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/services/waste"
                                      onClick={() => setDropdown(false)}
                                      >
                                        Waste Management 
                                      </Link>
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/services/construction"
                                      onClick={() => setDropdown(false)}
                                      >
                                        Construction
                                      </Link>
                                    </li>
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link" onMouseEnter={() => setDropdown(false)}>
                            <a href="#">Corporate Governance<i className="fa fa-caret-down"></i></a>
                            <div className= {dropdown ? "dropdown clicked" : "dropdown"} onClick={() => setDropdown(!dropdown)}>
                                <ul>
                                    <li className="dropdown-link">
                                      <Link href="/pages/businessethics"
                                      onClick={() => setDropdown(false)}
                                      >
                                       Business Ethics
                                      </Link>
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/policies"
                                      onClick={() => setDropdown(false)}
                                      >
                                       Policies
                                      </Link>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Partners<i className="fa fa-caret-down"></i></a>
                                        <div className="dropdown second">
                                            <ul>
                                                <li className="dropdown-link">
                                                <Link href="/pages/partners/zeco"
                                                onClick={() => setDropdown(false)}
                                                >
                                                  Zeco Industries
                                                </Link>
                                                </li>
                                                <div className="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/risk"
                                      onClick={() => setDropdown(false)}
                                      >
                                       Risk Management
                                      </Link>
                                    </li>
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
              </div>

            <div className="hamburger-menu-container">
                <div className="hamburger-menu">
                    <div></div>
                </div>
            </div>
        
        </div>


    </header>
    
  )
}
