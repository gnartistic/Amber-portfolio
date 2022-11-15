import React, {useState, useEffect} from "react"
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
            <div className="page" id='pageWrap'>
                <Menu right pageWrapId={"pageWrap"} outerContainerId={"Navbar"} />
                <div className='navbar-container'>
                    <div className='logo-container'>
                        <NavLink exact='true' to='/'>
                            <img src={Sunflower} alt='sunflower logo' />
                            <h1> <span className="lilac"><AnimatedLetters
                                letterClass={letterClass}
                                strArray={[ 'A','m','b','e','r' ]}
                                idx={15} /></span><br />
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={[ 'F', 'r', 'a', 'u', 't', 's', 'c', 'h', 'i' ]}
                                    idx={15}/>
                            </h1>
                        </NavLink>
                    </div>
                </div>
            
                {/* {open && <div className="menu" onClick={toggleOpen} >
                    <Menu />
                </div> } */}
                
                </div>
        </>
    )
}

export default Navbar