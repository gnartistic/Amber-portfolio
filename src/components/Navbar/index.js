import React, { useState, useEffect } from "react"
import Menu from "./Menu";
import './index.scss'
import { NavLink } from 'react-router-dom';
import Sunflower from '../../assets/images/logoAmber.png'
import AnimatedLetters from "../AnimatedLetters";

const Navbar = () =>
{
    const [ letterClass, setLetterClass ] = useState( 'text-animate' );

    useEffect( () =>
    {
        setTimeout( () =>
        {
            return setLetterClass( 'text-animate-hover' )
        }, 3000 )
    }, [] );

    return (
        <>
            <div>
                <Menu right pageWrapId={"pageWrap"} outerContainerId={"Navbar"} />
                <div className='navbar-container'>
                    <div className='logo-container'>
                        <NavLink exact='true' to='/'>
                            <img src={Sunflower} alt='sunflower logo' />
                            <h1> <span className="lilac"><AnimatedLetters
                                letterClass={letterClass}
                                strArray={[ 'H', 'e', 'a', 'r', 't','S', 'p','a','c','e' ]}
                                idx={15} /></span>
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={[ 'G', 'o', 'o', 'd', 's' ]}
                                    idx={15} />
                            </h1>
                        </NavLink>
                    </div>
                    <div className="navbar-links">
                        <NavLink exact='true' to='/'>Home</NavLink>
                        <NavLink exact='true' to='/about'>About</NavLink>
                        <NavLink exact='true' to='/work'>Work</NavLink>
                        <NavLink exact='true' to='/contact'>Contact</NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar