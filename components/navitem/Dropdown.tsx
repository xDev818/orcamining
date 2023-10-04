import React, { useState } from "react";
import { serviceDropdown } from "./NavItem";
//import { Link } from "react-router-dom";
import Link from 'next/link'
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const [test, setTest] = useState()

  return (
    <>

      <ul
        className={dropdown ?  "services-submenu clicked" : "services-submenu"}
        onClick={() => {
          setDropdown(!dropdown)
        }}
      >
        {
            serviceDropdown.map((item) => {
              {console.log(item.cName)}
              return (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className={item.cName}
                    onClick={() => setDropdown(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })
          
       }
      
      </ul>
    </>
  );
}

export default Dropdown;
