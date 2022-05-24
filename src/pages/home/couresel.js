import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const HomePageCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel
            activeIndex={index}
            onSelect={handleSelect} fade
            pause={false}
            >

                <Carousel.Item>
                    <img className='main-image col-12' src={require("../../images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg")} alt="Welcome" />
                    <Carousel.Caption className='main-image-caption'>
                        <h1 className='col-12'>A Computer Science Enthusiast and Software Developer</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='main-image col-12' src={require("../../images/fall-in-new-york-city-l.jpg")} alt="Welcome" />
                    <Carousel.Caption className='main-image-caption'>
                        <h1 className='col-12'>I Build the App, You Worry About Your Other Businesses.</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='main-image col-12' src={require("../../images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg")} alt="Welcome" />
                    <Carousel.Caption className='main-image-caption'>
                        <h1 className='col-12'>Contact Me for Robust and High Quality Software Systems</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HomePageCarousel;