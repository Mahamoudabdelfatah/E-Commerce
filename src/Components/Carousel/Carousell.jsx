import { Carousel } from "@material-tailwind/react";
import React from 'react'

const Carousell = () => {
    return (
        <div className="shadow-xl rounded-2xl overflow-hidden">
            <Carousel
                autoplay
                loop
                prevArrow={() => <></>}
                nextArrow={() => <></>}
                className="h-[45vh] md:h-[55vh] rounded-2xl"
            >
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1"
                    loading="lazy"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e"
                    loading="lazy"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00"
                    loading="lazy"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </div>
    )
}

export default Carousell
