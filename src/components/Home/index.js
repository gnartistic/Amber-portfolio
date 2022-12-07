import './index.scss'
import PhotoCarousel from '../PhotoCarousel';
import Loader from 'react-loaders';

const Home = () =>
{

  return (
    <>
      <div className='home-page container'>
        <div className='photo-carousel'>
          <PhotoCarousel />
        </div>
      </div>
            <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Home