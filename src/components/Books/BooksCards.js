// Import React
import React from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import './Books.css';

function generateStarRating(rating) {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];
    // Ajouter les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <svg key={`full-star-${i}`} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        );
    }
    // Ajouter la demi-étoile si nécessaire
    if (hasHalfStar) {
        stars.push(
            <svg key="half-star" className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M9.696,3.324c-0.259-0.059-0.529,0.088-0.675,0.313L6.139,8.047L1.667,9.833c-0.294,0.068-0.507,0.33-0.507,0.635
        c0,0.164,0.063,0.32,0.177,0.437l4.083,3.983l-0.969,5.647c-0.056,0.329,0.187,0.625,0.506,0.727
        c0.09,0.03,0.184,0.045,0.277,0.045c0.235,0,0.463-0.109,0.61-0.295l4.294-5.355l4.229,5.337
        c0.151,0.189,0.378,0.295,0.612,0.295c0.093,0,0.186-0.016,0.277-0.045c0.319-0.102,0.562-0.398,0.506-0.727l-0.969-5.647
        l4.083-3.983c0.114-0.117,0.177-0.273,0.177-0.437c0-0.305-0.213-0.567-0.507-0.635L15.861,8.36L13.972,3.637
        C13.826,3.413,13.556,3.257,13.297,3.316C13.038,3.376,12.865,3.629,12.918,3.886L13.567,7.5H9.304L9.696,3.324z"/>
            </svg>
        );
    }
    // Ajouter les étoiles vides restantes
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <svg key={`empty-star-${i}`} className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        );
    }
    return stars;
}

const BooksCards = ({ headline, books }) => {
    const [modalInfo, setModalInfo] = useState(null);
    
    const toggleModal = (book) => {
        setModalInfo(book);
    };
    return (
        <div className='my-16'>
            <h2 className='title_books text-4xl font-bold leading-snug'>
                {headline}
            </h2>
            <div >
                <Swiper
                    modules={[Autoplay, EffectCoverflow]}
                    effect={'coverflow'}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 2500 }}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper w-full h-full"
                >
                    {books.map(book =>
                        <SwiperSlide key={book.id}>
                            <div className="max-w-sm bg-white rounded-lg cards m-4">
                                <img className=" rounded-t-lg img_cards" src={book.image_url} alt="product image" />
                                <div className="px-3 pb-3">

                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">{book.title}</h5>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">

                                            {generateStarRating(book.rating)}
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{book.rating}</span>
                                        </div>
                                    </div>
                                    <div className="info_cards">
                                        <span className='services__button' onClick={() => toggleModal(book)}>
                                            View More <i className="uil uil-arrow-right services__button-icon"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            {modalInfo && (
                <div className="services__modal">
                    <div className="services__modal-content">
                            <img src={modalInfo.image_url} alt="" className='testimonial__img' />
                            <span className="close" onClick={() => setModalInfo(null)}><i className="uil uil-times services__modal-close"></i></span>
                        <h3 className='services__modal-title'><i className="uil uil-check-circle services__modal-icon"></i>{modalInfo.title}</h3>
                        <div className='infos_livres'>
                            <p><i className="uil uil-check-circle services__modal-icon"></i><span>Author:</span> {modalInfo.authors}</p>
                            <p><i className="uil uil-check-circle services__modal-icon"></i><span>num pages:</span> {modalInfo.num_pages} pages</p>
                        </div>
                        <p className='services__modal-description'><i className="uil uil-check-circle services__modal-icon"></i> <span>Description:</span> {modalInfo.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BooksCards;

