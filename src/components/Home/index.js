import './index.scss'
import PhotoCarousel from '../PhotoCarousel';
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import checks from '../../assets/images/checkPattern.png';

const Home = () =>
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
      <div className='home-page container'>
        <div className='brand-statement'>
          <h1><AnimatedLetters
            letterClass={letterClass}
            strArray={[ 'M', 'a', 'd', 'e', '', 'I', 'n', '', 'L', 'o', 'v', 'e' ]}
            idx={15} />
          </h1>
        </div>
        <div className='checkBorder'>
          <img alt='checkard pattern' className='checks1' src={checks}/>
          <img alt='checkard pattern' className='checks' src={checks}/>
          <img alt='checkard pattern' className='checks' src={checks}/>
          <img alt='checkard pattern' className='checks' src={checks}/>
        </div>
        <div className='photo-carousel'>
          <PhotoCarousel />
        </div>
        <div className='checkBorder'>
          <img alt='checkard pattern' className='checks2' src={checks}/>
          <img alt='checkard pattern' className='checks' src={checks}/>
          <img alt='checkard pattern' className='checks' src={checks}/>
          <img alt='checkard pattern' className='checks' src={checks}/>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Home