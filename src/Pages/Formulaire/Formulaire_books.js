import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Formulaire.css'
import { useSelector } from 'react-redux'
import emailjs from '@emailjs/browser';




const Formulaire_books = () => {
    const selectedBook = useSelector(data => data.selectedBook);
    console.log(selectedBook);

    const form = useRef();
    const navigate = useNavigate()
    
    // emailjs

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        city: "",
        state: "",
        agreeToTerms: false,
        date: "",
        formErrors: {
            firstName: "",
            lastName: "",
            username: "",
            city: "",
            state: "",
            agreeToTerms: "",
            date: ""
        }
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
            formErrors: {
                ...prevState.formErrors,
                [name]: ''
            }
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // const form = event.target;

        let valid = true;
        const errors = {
            firstName: "",
            lastName: "",
            username: "",
            city: "",
            state: "",
            zip: "",
            agreeToTerms: "",
            date: ""
        };
        const selectedDate = new Date(formData.date);
        const currentDate = new Date();

        if (selectedDate <= currentDate) {
            errors.date = "Please select a date in the future.";
            valid = false;
        }

        if (valid) {
            console.log("Form submitted successfully!");
            console.log("First name:", formData.firstName);
            console.log("Last name:", formData.lastName);
            console.log("Username:", formData.username);
            console.log("City:", formData.city);
            console.log("State:", formData.state);
            console.log("Agree to terms and conditions:", formData.agreeToTerms);
            console.log("Date:", formData.date);
        } else {
            setFormData(prevState => ({
                ...prevState,
                formErrors: errors
            }));
            form.reportValidity();
        }

        emailjs.sendForm('service_h563hka', 'template_w5lpteb', form.current, 'UqpLbFTPEC_5FdMmb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        navigate('/Page_validation');
        
    };

    if (!selectedBook) {
        return <div className='alert alert-danger text-center mt-40'>Aucun livre sélectionné</div>;
    }
    return (
        <div className='row mt-40 container px-4 lg:px24 justify-content-between mb-5'>

            <div className='Go_Back'>
                <Link to='/Reservation'>
                    <i class='bx bx-arrow-back arrow_back'></i>
                    <span>
                        Go back
                    </span>
                </Link>
            </div>
            <form className="row col-5" ref={form} onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="validationServer01" className="form-label">First name</label>
                    <input type="text"  id="validationServer01" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    <div className="invalid-feedback">{formData.formErrors.firstName}</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationServer02" className="form-label">Last name</label>
                    <input type="text" id="validationServer02" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    <div className="invalid-feedback">{formData.formErrors.lastName}</div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationServerUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend3">@</span>
                        <input type="email"  id="validationServerUsername" name="username" value={formData.username} onChange={handleChange} aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div className="invalid-feedback">{formData.formErrors.username}</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationServerDate" className="form-label">Date</label>
                    <input type="date" id="validationServerDate" name="date" value={formData.date} onChange={handleChange} required />
                    <div className="invalid-feedback">{formData.formErrors.date}</div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationServer03" className="form-label">City</label>
                    <input type="text" id="validationServer03" name="city" value={formData.city} onChange={handleChange} required />
                    <div className="invalid-feedback">{formData.formErrors.city}</div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationServer04" className="form-label">State</label>
                    <select  id="validationServer04" name="state" value={formData.state} onChange={handleChange} aria-describedby="validationServer04Feedback" required>
                        <option selected value="">Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Femalle">Femalle</option>
                    </select>
                    <div className="invalid-feedback">{formData.formErrors.state}</div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationServer05" className="form-label">CIN</label>
                    <input type="text" id="validationServer05" name="cin" value={formData.cin} onChange={handleChange} aria-describedby="validationServer05Feedback" required />
                    <div className="invalid-feedback">{formData.formErrors.cin}</div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input type="checkbox" id="invalidCheck3" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} aria-describedby="invalidCheck3Feedback" required />
                        <label className="form-check-label" htmlFor="invalidCheck3">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">{formData.formErrors.agreeToTerms}</div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn_email_reser" type="submit">Confirmer Reservation</button>
                </div>
            </form>





            <div className='col-6 infos_book_reserv '>
                <div className="card mb-3 ">
                    <div className="row align-items-center">
                        <div className="col-md-5 d-flex justify-content-center">
                            <img src={selectedBook.image_url} className="img-fluid img_books " alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title cards_rese">{selectedBook.title}</h5>
                                <p className="card-text">Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit mollitia, dolorum soluta quod quo repellat unde. Reiciendis, autem. Quibusdam, eius! sit amet, consectetur adipisicing elit. Molestias rem molestiae adipisci ratione velit obcaecati?</p>
                                <p className="card-text"><small className="text-muted">
                                    <div>
                                        Author: {selectedBook.authors}<br></br>
                                        Category: {selectedBook.genres}<br></br>
                                        Price: $1/day

                                    </div>
                                </small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Formulaire_books;