import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react';

const Work = () =>
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
      <div className='art-page container'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[ 'W', 'o', 'r', 'k' ]}
            ind={15} />
        </h1>
      </div>
    </>
  )
}

export default Work