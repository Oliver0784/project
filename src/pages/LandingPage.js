import React from 'react'
import Carousel from '../components/Carousel';



function LandingPage() {
  const images = [
    'https://wallpapercave.com/wp/wp3646110.jpg',
    'https://wallpapercave.com/wp/wp3646110.jpg',
    'https://wallpapercave.com/wp/wp3646110.jpg'
  ];

  return (
    <div>
        <Carousel images={images} />
    </div>
  )
}

export default LandingPage