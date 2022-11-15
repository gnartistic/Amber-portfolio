import './index.scss'
// import { useState, useEffect } from 'react';
// import AnimatedLetters from '../AnimatedLetters'
import PhotoCarousel from '../PhotoCarousel';
import MadeInLove from '../../assets/images/madeInLove.png';

const Home = () =>
{
  // const [ letterClass, setLetterClass ] = useState( 'text-animate' );

  // useEffect( () =>
  // {
  //   setTimeout( () =>
  //   {
  //     return setLetterClass( 'text-animate-hover' )
  //   }, 3000 )
  // }, [] );

  return (
    <>
      <div className='home-page container'>
        <div className='photo-carousel'>
          <PhotoCarousel />
        </div>
        <div className='text-zone'>
          <h3 className='brand-statement'>"
            <img className='handwriting' src={MadeInLove} alt="Amber's handwiritng, says 'made in love'" />
            "</h3>
        </div>
      </div>
    </>
  )
}

export default Home