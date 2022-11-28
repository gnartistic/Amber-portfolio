import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss';

const Contact = () =>
{
    const [ errorMessage, setErrorMessage ] = useState();

    const form = useRef();

    useEffect( () =>
    {
        setTimeout( () =>
        {
            return setLetterClass( 'text-animate-hover' )
        }, 3000 )
    }, [] );

    const [ sentMessage, setSentMessage ] = useState( '' );

    const sendEmail = () =>
    {
        emailjs
            .sendForm( 'patchouliprincess', 'template_je9rupk', form.current, 'I35ppu-qON_keQ2lT' )
            .then(
                () =>
                {
                    setErrorMessage( '' );
                    setSentMessage( 'Sent!' );
                    window.location.reload( false )
                },
                () =>
                {
                    setErrorMessage( 'Failed to send the message, please try again.' )
                }
            )
    }

        const handleSubmit = ( e ) =>
    {
        e.preventDefault()

        sendEmail();
    }

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
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={[ 'C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e' ]} idx={15} />
                    </h1>
                    <div className='form-container'>
                        <p className='text'>
                            I am interested in freelance opportunities - especially unique projects. However, if you have any other requests or questions, don't hesitate to contact me using the form below!
                        </p>
                        <div className='contact-form'>
                            <form ref={form} onSubmit={handleSubmit}>
                                <ul>
                                    <li className='half'>
                                        <input type="text" name="name" placeholder="Name" required />
                                    </li>
                                    <li className='half'>
                                        <input type="email" name="email" placeholder="Email" required />
                                    </li>
                                    <li>
                                        <input placeholder='Subject' type="text" name="subject" required />
                                    </li>
                                    <li>
                                        <textarea placeholder='Message' name='message' maxLength={150}
                                            required></textarea>
                                    </li>
                                    <li className='buttonContainer'>

                                        <input type='submit' className='flat-button' value='SEND' />
                                    </li>
                                </ul>
                                {sentMessage && (
                                    <p className="validation-text2">{sentMessage}</p>
                                )}
                                {errorMessage && (
                                    <p className='validation-text'>{errorMessage}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact