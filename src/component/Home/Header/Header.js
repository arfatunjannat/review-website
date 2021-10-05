import React from 'react';
import './Header.css'
import {
    NavLink
  } from "react-router-dom"

const Header = () => {
    return (
        <div className=" bg-secondary p-5 mb-5">
            <h1>Tina Tithi Unique Instruction Center</h1>
            <br />
            <NavLink className ="ms-3 " to="/home">Home</NavLink> 
            <NavLink className ="ms-3" to="/about">About</NavLink>
            <NavLink className ="ms-3" to="/OurService">Ourservice</NavLink>
            
            <NavLink className ="ms-3" to="/contact">Contact</NavLink>
            
            
            </div>
        
    );
};

export default Header;