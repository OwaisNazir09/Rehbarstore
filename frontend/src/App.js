import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/home';
import Books from './Components/books';
import Clothing from './Components/clothing'
import Footer from './Components/Footer';


import Aos from 'aos';
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/Clothing" element={<Clothing />} />
                <Route path="/Attar" element={<Books />} />
                <Route path="/Dryfruits" element={<Home />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
