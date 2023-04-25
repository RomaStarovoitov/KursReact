import React from 'react'
import CarouselBoot from 'react-bootstrap/Carousel';

const Carousel = () => {
  return (
    <div class="d-flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <CarouselBoot >
            <CarouselBoot.Item interval={2000}>
                <img height={250}
                src="./img/carousel/ForCarousel1.jpg"
                alt="ForCarousel 1"
                />
            </CarouselBoot.Item>
            
            <CarouselBoot.Item interval={1000}>
                <img height={250}
                src="./img/carousel/ForCarousel2.jpg"
                alt="Carousel 2"
                />
            </CarouselBoot.Item>
            
            <CarouselBoot.Item interval={1000}>
                <img height={250}
                src="./img/carousel/ForCarousel3.jpg"
                alt="Carousel 3"
                />
            </CarouselBoot.Item>
        </CarouselBoot> 
    </div>
  )
}

export default Carousel