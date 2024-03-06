import React from 'react'
import { Banner } from '../components/Banner/Banner'
import Books from '../components/Books/Books'
import BestBooks from '../components/BestBooks/BestBooks'
import Pub from '../components/Pub/Pub'
import Avantage from '../components/Avantage_bib/Avantage'
import Localisation from '../components/Localisation/Localisation'
import Avis from '../components/Avis/Avis'


const Home = () => {
  return (
    <>
        <Banner/>
        <Avantage/>
        <Books/>
        <BestBooks/>
        <Pub/>
        <Localisation/>
        <Avis/>
    </>
  )
}

export default Home