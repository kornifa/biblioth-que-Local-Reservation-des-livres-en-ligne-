import React from 'react'
import BannerCards from './SwiperCards/BannerCards'
import { Link } from 'react-router-dom';

import './Banner.css'

export const Banner = () => {
  return (
    <div className='my_div'>
      <div className='px-4 lg:px-24 bg-teal-100 flex items-center  container'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gab-12 py-40'>

          <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black text'>
              Welcome🖐️ <br />In  INTIC Library:<span className="text-blue-600">Explore the World of Knowledge</span>
            </h2>
            <p className='md:w-4/5 text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cum nostrum asperiores numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, distinctio.
            </p>
            <Link to="/Reservation">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black rounded transition-all ease-in duration-200 btn_search'>search a book <i class='bx bx-search-alt bx-tada' ></i></button>
            </Link>
          </div>


          <div>
            <BannerCards />
          </div>

        </div>

      </div>
    </div>

  )
}
