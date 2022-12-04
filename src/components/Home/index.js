import './index.scss'
import MadeInLove from '../../assets/images/madeInLove.png'
import PhotoCarousel from '../PhotoCarousel';

const Home = () =>
{

  return (
    <>
      <div className='home-page container'>
        <div className='photo-carousel'>
          <PhotoCarousel />
        </div>
        <div className='text-zone'>
          <div className='alt-text'>
            <img className='handwriting' alt='handwriting' src={MadeInLove}/>
            {/* <a className='link-text' href='https://www.instagram.com/heartspace.goods/?hl=en'> @heartspace.goods</a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home