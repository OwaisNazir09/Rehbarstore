import React, { useEffect, useState } from 'react';
import './Home.css'; 

function Books() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const booksResponse = await fetch('http://localhost:3100/book');
            if (!booksResponse.ok) {
                throw new Error(`Failed to fetch books: ${booksResponse.statusText}`);
            }
            const booksData = await booksResponse.json();
            setBooks(booksData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home">
            <h1>Book Collection</h1>
            <div className="card-container">
                {books.map((book) => (
                    <div key={book._id} className="card">
                        <img src={book.image || '/placeholder.jpg'} alt={book.name} className="card-image" />
                        <div className="card-content">
                            <h2>{book.name}</h2>
                            <p>{book.description}</p>
                            <p><strong>Author:</strong> {book.author}</p>
                            <p><strong>Price:</strong> ₹{book.price}</p>
                            <p><strong>Rating:</strong> {book.rating}⭐</p>
                            <button className="card-button">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
   
    );
}

export default Books;
