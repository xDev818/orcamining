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
                        <li className="nav-link" >
                          <Link href="/" >
                            Home
                          </Link>
                        </li>
                        <li className="nav-link">
                        <input type="checkbox" name="" id="toggleaboutus">
                        </input>
                            <a href="#">About Us<i className="fa fa-caret-down"></i></a>
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
                                      <Link href="/pages/core-values">
                                        Core Values
                                      </Link>
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/orgchart">
                                       Organizational Chart
                                      </Link>
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/articles">
                                      Articles of Incorporation and By-Laws
                                      </Link>
                                    </li>
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link" >
                            <a href="#">Services<i className="fa fa-caret-down"></i></a>
                            <div className="dropdown">
                                <ul>
                                    <li className="dropdown-link">
                                      <Link href="/pages/services/mineral">
                                        Mineral Supply
                                      </Link>
                                        
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/services/waste">
                                        Waste Management 
                                      </Link>
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/services/construction">
                                        Construction
                                      </Link>
                                    </li>
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link" >
                            <a href="#">Corporate Governance<i className="fa fa-caret-down"></i></a>
                            <div className="dropdown">
                                <ul>
                                    <li className="dropdown-link">
                                      <Link href="/pages/businessethics">
                                       Business Ethics
                                      </Link>
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/policies">
                                       Policies
                                      </Link>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Partners<i className="fa fa-caret-down"></i></a>
                                        <div className="dropdown second">
                                            <ul>
                                                <li className="dropdown-link">
                                                <Link href="/pages/partners/zeco">
                                                  Zeco Industries
                                                </Link>
                                                </li>
                                                <div className="arrow"></div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-link">
                                      <Link href="/pages/risk">
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
