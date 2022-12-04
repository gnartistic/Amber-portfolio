import './index.scss';
import Amber1 from '../../assets/images/Amber1.jpg';
import Amber2 from '../../assets/images/Amber2.jpg'

const About = () =>
{
  return (
    <>
      <div className='about-page container'>
        <div className='page-contents'>
          <div className='text-zone1'>
            <img src={Amber1} alt='Amber at a popup shop with friends' />
            <p className='text1'>
            <h2 className='entry'>Salutations!</h2>I'm Amber, AKA <a className='insta-link' href="https://www.instagram.com/patchouli777princess/">patchouliprincess</a> 💕
              <br />
              I'm a local Texan that loves to upcycle thrifted clothing, embroider, and design.
              <br/>
              I believe that anything can be made into a piece of art!
            </p>
          </div>
          <div className='text-zone2'>
            <p className='text2'>
              My goal is to take things that have been used and discarded and make them beautiful again.
              <br/><br/>I spread love through my channeled creativity, and my inspiration comes from life itself and the urge to make the NOW a better experience while still honoring the trauma of the past.
            </p>
            <img src={Amber2} alt='Amber in her natural habitat' />
          </div>
        </div>
      </div>
    </>
  )
}

export default About