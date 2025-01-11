import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img1.webp';
import './Navigation.css';

function Navbar() {
    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.search.value.trim();
        if (query) {
            // Navigate to the search results page or handle the search logic
            console.log(`Search query: ${query}`);
        }
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Rehbar Logo" className="navbar_logo" />
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/clothing">Clothing</Link></li>
                <li><Link to="/attar-perfume">Attar / Perfume</Link></li>
                <li><Link to="/dry-fruits">Dry Fruits</Link></li>
            </ul>
            <form className="navbar-search" onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search products..."
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </nav>
    );
}

export default Navbar;
