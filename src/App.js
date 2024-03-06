import './App.css';
import About from './Pages/About';
import Formulaire_books from './Pages/Formulaire/Formulaire_books';
import Home from './Pages/Home';
import Page_validation from './Pages/Page_validation/Page_validation';
import Reservation from './Pages/Reservation';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navber/Navbar';
import Contact from './Pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Form_Reservation" element={<Formulaire_books />} />
          <Route path='/Page_validation' element={<Page_validation/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
