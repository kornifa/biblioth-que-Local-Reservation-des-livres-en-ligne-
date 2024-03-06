import React from 'react'
import './Pub.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import book from '../../Assets/awardbooks.png'

const Pub = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return (
        <section>
            <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
                <div className='flex flex-col md:flex-row justify-between items-center gab-12'>

                    <div className="md:w-1/2">
                        <h2 className='text-4xl font-bold mb-6 leading-snug'>
                            2024  National Book Awards for Fiction Shorlist
                            <span className='Time'>
                                {formattedTime}
                            </span>

                        </h2>
                        <Link to='/Reservation'>
                            <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                                Explore More
                            </button>
                        </Link>
                    </div>
                    <div className=''>
                        <img src={book} alt="" className='w-96' />
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Pub;

