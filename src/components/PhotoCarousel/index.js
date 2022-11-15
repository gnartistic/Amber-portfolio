import clothing1 from '../../assets/images/clothing1.jpeg';
import clothing2 from '../../assets/images/clothing2.jpeg';
import candid from '../../assets/images/candid.jpeg';
import painting from '../../assets/images/painting.jpeg';
import React from 'react';
import Flickity from 'react-flickity-component'
import './index.scss'

const PhotoCarousel = () =>
{

    const flickityOptions = {
        initialIndex: 1,
        wrapAround: true,
        autoPlay: 4500,
        fade: true
    }

    return (
        <>
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
                <img className='photo4' src={painting} alt='painting by amber' />
            </Flickity>
        </>
    )
}

export default PhotoCarousel