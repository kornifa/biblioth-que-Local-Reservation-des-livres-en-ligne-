import React from 'react'
import './Avantage.css'


const Avantage = () => {
    return (
        <div className="container bootstrap snippets bootdeys">
            <h2 className='h2_avantage text-4xl font-bold leading-snug'>
                Nos avantages 
            </h2>
            <div className="row">
                <div className="col-md-4 col-sm-6 content-card card_principale">
                    <div className="card-big-shadow">
                        <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                            <div className="content">
                                <i class="uil uil-books"></i>
                                <h4 className="title"><a href="#">Blue Card</a></h4>
                                <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6 content-card">
                    <div className="card-big-shadow">
                        <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
                            <div className="content">
                                <i class='bx bxs-book-reader'></i>
                                <h4 className="title"><a href="#">Green Card</a></h4>
                                <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6 content-card">
                    <div className="card-big-shadow">
                        <div className="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                            <div className="content">
                                <i class='bx bxs-alarm'></i>
                                <h4 className="title"><a href="#">24h/24h - 7j/7j</a></h4>
                                <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Avantage