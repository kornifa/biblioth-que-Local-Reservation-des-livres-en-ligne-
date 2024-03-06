import React from 'react'
import './Recherche_Book.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';



const Recherche_Books = () => {


    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    // console.log(initialBooks)
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://example-data.draftbit.com/books?_limit=240')
            .then(response => response.json())
            .then(data => {
                setBooks(data);
                setFilteredBooks(data.slice(0, 8)); 
                const uniqueGenres = [...new Set(data.map(book => book.genres.split(',')).flat())];
                setGenres(uniqueGenres);
            })
            .catch(error => console.error('Error fetching books:', error));
    }, []);


    const handleSearch = () => {
        let filtered = books;

    
        if (searchTerm) {
            filtered = filtered.filter(book =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.authors.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedGenre) {
            filtered = filtered.filter(book => book.genres.includes(selectedGenre));
        }

      
        setFilteredBooks(filtered);
    };




    // const handleSearch = async () => {
    //     try {
    //         let url = '';
    //         if (searchType === 'title') {
    //             url = `https://example-data.draftbit.com/books?title_like=${searchValue}`;
    //         } else {
    //             url = `https://example-data.draftbit.com/books?genres_like=${searchValue}`;
    //         }
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setSearchResults(data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    // const handleChange = (e) => {
    //     setSearchValue(e.target.value);
    // };

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    };

    const handelSubmit = (e) => {
        e.preventDefault();
    }

    

    const handleReserveClick = (book) => {
        dispatch({type: 'SELECT_BOOK', value: book});
    };



    return (
        <div class="search-form">
            <div class="container form-container">
                <div class="row">
                    <div class="col-lg-12 res">
                        <form id="search-form" name="gs" method="submit" role="search" action="#" onSubmit={handelSubmit}>
                            <div class="row">
                                <div class="col-lg-4">
                                    <fieldset>
                                        <input type="search" name="search" placeholder="Search by title or author" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                    </fieldset>
                                </div>
                                <div class="col-lg-4">
                                    <fieldset>
                                        <select name="Price" value={selectedGenre} onChange={handleGenreChange} class="form-select" aria-label="Default select example">
                                            <option value="">All Genres</option>
                                            {genres.map(genre => (
                                                <option key={genre} value={genre}>{genre}</option>
                                            ))}
                                        </select>
                                    </fieldset>
                                </div>
                                <div class="col-lg-3">
                                    <fieldset>
                                        <button onClick={handleSearch}>
                                            Search <i class='bx bx-search-alt bx-tada' ></i>
                                        </button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='div_result mt-28 px-4 lg:px24'>
                <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>
                    Books Result :
                </h2>
                <div className='grid gap-8 lg:grid-cols-4 sm:grid-col-2 md:grid-cols-3 grid-cols-1'>
                    {
                        filteredBooks.length > 0 ? (
                            filteredBooks.map(book => (
                                <MDBCard key={book.id}>
                                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                        <MDBCardImage src={book.image_url} container alt='...' className='h-96 image_books'/>
                                        <a>
                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                        </a>
                                    </MDBRipple>
                                    <MDBCardBody>
                                        <MDBCardTitle>{book.title}</MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <Link to="/Form_Reservation">
                                            <MDBBtn onClick={() => handleReserveClick(book)} className='btn_reservation' href='#'>Reserver</MDBBtn>
                                        </Link>
                                        
                                    </MDBCardBody>
                                </MDBCard>
                            ))
                        ) : (
                            <p className='alert alert-danger text-center col-12'>No books found !!!</p>
                        )
                    }
                </div>


            </div>
        </div>

    )
}

export default Recherche_Books