import React from 'react'
import './Page_validation.css'
import { Link } from 'react-router-dom'

const Page_validation = () => {
    return (
        <>
            <div className='Go_Home'>
                <Link to='/'>
                    <i class='bx bx-arrow-back arrow_Home'></i>
                    <span>
                        Go Home
                    </span>
                </Link>
            </div>
            <div className='mt-40 container px-4 lg:px24 mb-5 validation'>

                <h1 className='text-5xl font-bold text-center mb-10 leading-snug'>
                    Merci pour votre confiance
                </h1>

                <i class='bx bxs-donate-heart bx-burst' ></i>
                <p className='a'>
                    Verifier votre email On a Envouyer Un message  de confirmation Pour vous permettre De finaliser Votre Reservation.
                    Nous vous remercions pour la confiance que vous avez mise en nous

                </p>
                <p className='b'>
                    Votre commande a bien été prise en compte. tu peut  maintenant viens chez nous avec ton email pour la confirmation
                </p>
            </div>
        </>

    )
}

export default Page_validation