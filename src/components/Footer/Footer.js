import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import './Footer.css'

const Footer = () => {
    return (
        <MDBFooter className='text-center text-lg-start text-muted footer_y'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer_ex'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <i class='bx bxl-facebook-circle'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i class='bx bxl-twitter'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i class='bx bxl-google'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i class='bx bxl-instagram-alt'></i>
                    </a>

                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                BIOFNTIC
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Angular
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    React
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Vue
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Laravel
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <i className='bx bxs-home me-3'></i>
                                New York, NY 10012, US
                            </p>
                            <p>
                                <i className='bx bxs-envelope me-3'></i>
                                info@example.com
                            </p>
                            <p>
                                <i className='bx bxs-phone me-3'></i> + 01 234 567 88
                            </p>
                            <p>
                                <i className='bx bxs-printer me-3'></i> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4 footer-xy'>
                © 2024 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    Kornifa
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer