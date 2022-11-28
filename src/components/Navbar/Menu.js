import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";

 // eslint-disable-next-line 
export default props => {
    return (
        <>
            <Menu right className='mobileMenu' pageWrapId={"pageWrap"} outerContainerId={"Navbar"}>
                <li className="menu-item">
                    <NavLink exact='true' activeclassname='active' size='large' to='/'>Home</NavLink>
                </li>

                <li className="menu-item">
                    <NavLink exact='true' activeclassname='active' to='/about'>About</NavLink>
                </li>

                <li className="menu-item">
                    <NavLink exact='true' activeclassname='active' to='/contact'>Contact</NavLink>
                </li>

                <li className="menu-item">
                    <NavLink exact='true' activeclassname='active' to='/work'>Work</NavLink>
                </li>
                <div>
                    {/* <img src={} alt={}/> */}
                </div>
            </Menu>
        </>
    );
};