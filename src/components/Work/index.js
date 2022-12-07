import './index.scss';
import { NavLink } from 'react-router-dom';
import patches from '../../assets/images/patches2.jpg'
import painting2 from '../../assets/images/painting2.jpg'
import shorts from '../../assets/images/shorts.jpeg'
import shirts from '../../assets/images/shirts.jpg'
import Loader from 'react-loaders';


const Work = () =>
{
  return (
    <>
      <div className='art-page container'>
        <div className='categories'>
          <NavLink exact='true' to='/patches' className='category-container cat4'>
            <img alt='patches' src={patches} className='patches' />
            <h2>Patches</h2>
          </NavLink>
          <NavLink exact='true' to='/paintings' className='category-container-alt cat1'>
            <h2>Paintings</h2>
            <img alt='painting' src={painting2} className='paintings' />
          </NavLink>
          <NavLink exact='true' to='/shirts' className='category-container cat2'>
            <img alt='shirts' src={shirts} className='shirts' />
            <h2>Shirts</h2>
          </NavLink>
          <NavLink exact='true' to='/shorts' className='category-container-alt cat3'>
            <h2>Shorts</h2>
            <img alt='shorts' src={shorts} className='shorts' />
          </NavLink>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Work