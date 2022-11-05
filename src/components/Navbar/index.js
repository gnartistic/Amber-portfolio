import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import Sunflower from '../../assets/images/sunflower.png'

const Navbar = () =>
{
    return (
        <>
            <div className='navbar-container'>
                <div className='logo-container'>
                <img src={Sunflower} alt='sunflower logo' />
                <h1> <span className="lilac">Amber </span><br /> Frautschi
                </h1>
            </div>
                <nav>
                    <NavLink exact='true' activeclassname='active' to='/'>Home</NavLink>

                    <NavLink exact='true' activeclassname='active' to='/about'>About</NavLink>

                    <NavLink exact='true' activeclassname='active' to='/contact'>Contact</NavLink>

                    <NavLink exact='true' activeclassname='active' to='/art'>Art</NavLink>
                </nav>
            </div>
        </>
    )
}

export default Navbar