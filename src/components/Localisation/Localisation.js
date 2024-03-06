import React from 'react'
import './Localisation.css'

const Localisation = () => {
    return (
        <div className='container  loca'>
            <h1 className='text-4xl font-bold text-center mb-10 leading-snug'>
                Localisation
            </h1>
            <br />
            <div className='row'>
                <div className='col-6 infos'>
                    <h2>
                        bibliothèque Ntic Syba
                    </h2>
                    <p>
                        <i class='bx bxs-calendar bx-flashing'></i> 7j/7j <br /> <span>8:00 am - 12:00 pm</span>
                    </p>
                    <br />
                    <p>
                        <i class='bx bx-current-location bx-flashing' ></i> H2XP+F7H, Av. Al Adarissa, Marrakech <br /> <span>Event adress</span>
                    </p>
                    <br />
                    <p>
                        <i class='bx bx-phone-call bx-flashing' ></i>  05244-04169 <br /> <span>Phone Nummer</span>
                    </p>
                </div>
                <div className='col-6 map'>
                    <iframe className='map-exa' width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=istia%20Ntic%20Syba+(%20biblioth%C3%A8que%20Ntic%20Syba)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>
                </div>
            </div>
        </div>
    )
}

export default Localisation