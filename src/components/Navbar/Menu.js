import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom';

const Menu = ({ open, setOpen }) =>
{
    return (
        <>
            <ul className='mobileMenu'>
                <li>
                    <NavLink exact='true' activeclassname='active' size='large' to='/'>Home</NavLink>
                </li>

                <li>
                    <NavLink exact='true' activeclassname='active' to='/about'>About</NavLink>
                </li>

                <li>
                    <NavLink exact='true' activeclassname='active' to='/contact'>Contact</NavLink>
                </li>

                <li>
                    <NavLink exact='true' activeclassname='active' to='/art'>Art</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Menu