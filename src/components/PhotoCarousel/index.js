import clothing1 from '../../assets/images/clothing1.jpeg';
import clothing2 from '../../assets/images/clothing2.jpeg';
import candid from '../../assets/images/candid.jpeg';
import patches from '../../assets/images/patches.jpeg';
import React from 'react';
import Flickity from 'react-flickity-component'
import './index.scss'
import checks from '../../assets/images/checkPattern.png';

const PhotoCarousel = () =>
{

    const flickityOptions = {
        initialIndex: 1,
        wrapAround: true,
        autoPlay: 3000,
        fade: true,
    }


    return (
        
        <>
            {/* <div className='checkBorder'>
                <img alt='checkard pattern' className='checks1' src={checks} />
                <img alt='checkard pattern' className='check1' src={checks} />
                <img alt='checkard pattern' className='check1' src={checks} />
                <img alt='checkard pattern' className='check1' src={checks} />
            </div> */}
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static>
                <img className='photo2' src={clothing1} alt='clothing 2' />
                <img className='photo1' src={candid} alt='clothing' />
                <img className='photo3' src={clothing2} alt='candid of amber' />
                <img className='photo4' src={patches} alt='painting by amber' />
            </Flickity>
            {/* <div className='checkBorder'>
                <img alt='checkard pattern' className='checks2' src={checks} />
                <img alt='checkard pattern' className='check2' src={checks} />
                <img alt='checkard pattern' className='check2' src={checks} />
                <img alt='checkard pattern' className='check2' src={checks} />
            </div> */}
        </>
    )
}

export default PhotoCarousel