import React from 'react'
import { useState } from 'react'
import './Abouts.css'
import image from '../../Assets/abstract-blur-defocused-bookshelf-library (1).jpg'
import Data from './Data'
import Res_Client from '../Res_Client/Res_Client'

const Abouts = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const toggleTable = (id) => {
    setExpandedItems((prevExpandedItems) => {
      return {
        ...prevExpandedItems,
        [id]: !prevExpandedItems[id]
      };
    });
  };



  return (
    <section className='section_bib'>
      <Res_Client />


      <div className='row container About '>
        <div className='col  div_About'>
          <i class='bx bxs-book-heart'></i>
          <p>
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className='col div_About'>
          <i class='bx bx-support'></i>
          <p>
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className='col  div_About'>
          <i class='bx bx-folder-open'></i>
          <p>
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>







      <div className='infos_Bib row container '>
        <div className='col'>
          <div class="section-heading">
             <h2>INTIC Library Explore<br /><em> the World of Knowledge</em>.</h2>
          </div>
          <img src={image} alt="" />
        </div>

        <div className='col infos_right'>
          <div>
            <h3 className='text-3xl font-bold leading-snug'>
              About Us
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia sit, dignissimos reprehenderit
              nisi ad dolorum in ratione sequi
              praesentium possimus, officiis unde nulla alias error magnam officia sunt accusamus corporis.
            </p>
          </div>
          <div className='Question_reponse'>
            <h1 className='text-2xl font-bold leading-snug'>
              Question And Reponse : 
            </h1>
            {Data.map((value) => (
              <div className='titre' key={value.id}>
                <div className='titre_question' onClick={() => toggleTable(value.id)}>
                  <p>{value.question}</p>
                  <i className={expandedItems[value.id] ? 'bx bx-chevron-down' : 'bx bx-chevron-up'}></i>
                </div>

                {expandedItems[value.id] && (

                  <div className='sous_titre'>
                    <hr />
                    <p>{value.Reponse}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Abouts;