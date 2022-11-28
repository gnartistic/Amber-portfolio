import './index.scss'
// import { useState, useEffect } from 'react';
// import AnimatedLetters from '../AnimatedLetters'
import PhotoCarousel from '../PhotoCarousel';

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
        </div>
      </div>
    </>
  )
}

export default Home