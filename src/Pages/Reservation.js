import React from 'react'
import Res_Client from '../components/Res_Client/Res_Client'
import Recherche_Books from '../components/Recherche_Books/Recherche_Books'

const Reservation = () => {
  return (
    <>
      <div className='parent-container'>
        <Res_Client/>
        <Recherche_Books/>
      </div>
        
    </>
  )
}

export default Reservation