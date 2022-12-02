// import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import patches from '../../assets/images/patches2.jpg'
import painting2 from '../../assets/images/painting2.jpg'
import shorts from '../../assets/images/shorts.jpeg'
import shirts from '../../assets/images/shirts.jpg'


const Work = () =>
{
    // const [ letterClass, setLetterClass ] = useState( 'text-animate' );

    // useEffect( () =>
    // {
    //     setTimeout( () =>
    //     {
    //         return setLetterClass( 'text-animate-hover' )
    //     }, 3000 )
    // }, [] );
  return (
    <>
      <div className='art-page container'>
        {/* <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[ 'W', 'o', 'r', 'k' ]}
            ind={15} />
        </h1> */}
        <div className='categories'>
          <NavLink exact='true' to='/patches' className='category-container'>
            <img alt='patches' src={patches} className='patches' />
            <h2>Patches</h2>
          </NavLink>
          <NavLink exact='true' to='/shorts' className='category-container-alt'>
            <h2>Shorts</h2>
            <img alt='shorts' src={shorts} className='shorts' />
            </NavLink>
          <NavLink exact='true' to='/shirts' className='category-container'>
            <img alt='shirts' src={shirts} className='shirts' />
            <h2>Shirts</h2>
          </NavLink>
          <NavLink exact='true' to='/paintings' className='category-container-alt'>
            <h2>Paintings</h2>
            <img alt='painting' src={painting2} className='paintings' />
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Work