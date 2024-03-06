import React from 'react'
import FavBook from "../../Assets/resume-du-flou-bibliotheque-defocalisee-dans-bibliotheque.jpg"
import './BestBooks.css'
import { Link } from 'react-router-dom'
const BestBooks = () => {
    return (
        <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gab-12 BestBooks'>
            <div className='md: w-1/2'>
                <img src={FavBook} alt="" className='rounded md:w-10/12' />
            </div>
            <div className='md:w-1/2 space-y-6'>
                <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>
                    Find in Our Biblieotheque Your Favourit <span className='text-blue-700'>Book !</span>
                </h2>
                <p className='mb-10 text-lg md:w-5/6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque quod esse atque, cum fugiat doloribus dolorum molestias quaerat harum blanditiis,
                    consequatur sed consectetur voluptatem nemo possimus necessitatibus qui nisi repellendus?
                </p>
                <div className='flex flex-col sm:flex-row justify-between gab-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>
                            800+
                        </h3>
                        <p className='text-base'>
                            Book Listing
                        </p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>
                            550+
                        </h3>
                        <p className='text-base'>
                            Client pro tag
                        </p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>
                            1200 m
                        </h3>
                        <p className='text-base'>
                            espace
                        </p>
                    </div>
                </div>
                <Link to='/About'>
                    <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                        Explore More
                    </button>
                </Link>

            </div>

        </div>
    )
}

export default BestBooks