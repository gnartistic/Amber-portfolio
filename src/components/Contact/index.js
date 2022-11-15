import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Contact = () =>
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
      <div className='contact-page container'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[ 'C', 'o', 'n', 't', 'a', 'c', 't' ]}
          idx={15} />
        </h1>
      </div>
    </>
  )
}

export default Contact