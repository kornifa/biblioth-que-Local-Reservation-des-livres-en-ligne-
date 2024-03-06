import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';


import './Avis.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import { Data } from './Data';

const Avis = () => {
    return (
        <div className='my-12 px-4 lg:px-24 Avis_clients'>

            <h2 className='text-4xl font-bold text-center mb-10 leading-snug'>
                Les avis de nos clients
            </h2>
            <Swiper
                modules={[Autoplay, EffectCoverflow]}
                effect={'coverflow'}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 2500 }}
                slidesPerView={'auto'}
                breakpoints={{
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                className="mySwiper avis"
            >
                {Data.map(({ image, title, description, Etat}) => {
                    return (
                        <SwiperSlide className='shadow-2xl bg-white rounded-lg border'>
                            <div className='stars'>
                                <i class='bx bxs-star bx-burst' ></i>
                                <i class='bx bxs-star bx-burst' ></i>
                                <i class='bx bxs-star bx-burst' ></i>
                                <i class='bx bxs-star bx-burst' ></i>
                            </div>
                            <div className='Avis_div'>
                                <p className='Avis__description mb-3'>
                                    {description}
                                </p>
                                <div className='infos_client'>
                                    <img src={image} alt="" className='Avis__img' />
                                    <h3 className='testimonial__name'>
                                        {title}
                                    </h3>
                                    <p>
                                        {Etat}
                                    </p>

                                </div>

                            </div>


                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Avis