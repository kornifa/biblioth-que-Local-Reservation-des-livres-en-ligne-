
// email.js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_q8w3qfw", "template_qbty18p", form.current, 'okW3EVRy7A1DYt3yi')
    e.target.reset();
  };
  return (
    <section id='contact'className='mt-40 contact' >
      <h2 className='section__title text-4xl font-bold text-center mb-10 leading-snug'>
        Conatct
      </h2>
      <div className="contact__container container  grid">


        <div className="conatct__content">
          <h3 className='contact__title'>Talk with Us</h3>

          <div className="contact_info">


            <div className="contact__card">
              <i className='bx bx-mail-send contact__card-icon'></i>

              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>youneskornifa@gmail.com</span>
              <a href="https://www.youness.kornifa.04@gmail.com" target="_blank" className='contact__button'>
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>



            <div className="contact__card">
              <i className='bx bxl-whatsapp contact__card-icon'></i>

              <h3 className='contact__card-title'>Whatsapp or Telephone</h3>
              <span className='contact__card-data'>+212 693-50-78-02</span>
              <a href="https://wa.me/+212693507802" target="_blank" className='contact__button'>
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>




            <div className="contact__card">
              <i className='bx bxl-messenger contact__card-icon'></i>

              <h3 className='contact__card-title'>Messenger</h3>
              <span className='contact__card-data'>Younes Kornifa</span>
              <a href="https://web.facebook.com/youness.mk.543" target="_blank" className='contact__button'>
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

          </div>
        </div>


        <div className="conatct__content">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">
                Name
              </label>
              <input type="text" name='name' className='contact__form-input' placeholder='Insert Your name' />
            </div>


            <div className="contact__form-div">
              <label className="contact__form-tag">
                Email
              </label>
              <input type="email" name='email' className='contact__form-input' placeholder='Insert Your Email' />
            </div>



            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">
                Project
              </label>
              <textarea name="project" cols="30" rows="10" className='contact__form-input' placeholder='Insert Your Project'></textarea>
            </div>


            <button className='button_msg button--flex'>
              Send Message <i class='bx bx-send bx-flip-horizontal bx-tada'></i>
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact