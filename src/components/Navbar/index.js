import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from "./Menu";
import './index.scss'
import { NavLink } from 'react-router-dom';
import Sunflower from '../../assets/images/sunflower.png'

const Navbar = () =>
{
    const [ open, setOpen ] = useState( false );

    const toggleOpen = () =>
    {
        setOpen( true );
        if( open === true ) {
            setOpen( false );
        }
    }

    return (
        <>
            <div className="page">
                <div className='navbar-container'>
                    <div className='logo-container'>
                        <NavLink exact='true' to='/'>
                            <img src={Sunflower} alt='sunflower logo' />
                            <h1> <span className="lilac">Amber </span><br /> Frautschi
                            </h1>
                        </NavLink>
                    </div>
                    <nav className='desktopNav'>
                        <NavLink exact='true' activeclassname='active' to='/'>Home</NavLink>

                        <NavLink exact='true' activeclassname='active' to='/about'>About</NavLink>

                        <NavLink exact='true' activeclassname='active' to='/contact'>Contact</NavLink>

                        <NavLink exact='true' activeclassname='active' to='/art'>Art</NavLink>
                    </nav>
                    <nav className='mobileNav'>
                        <button onClick={toggleOpen}><FontAwesomeIcon icon={faBars} size="lg" color="#573886" />
                        </button>
                    </nav>
                </div>
            
                {open && <div className="menu" onClick={toggleOpen} >
                    <Menu />
                </div> }
                
                </div>
        </>
    )
}

export default Navbar