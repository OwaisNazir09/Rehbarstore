import React, { useEffect, useState } from 'react';
import './Home.css'; // Add some styles for the cards

function Home() {
    const [books, setBooks] = useState([]);
    const [shirts, setShirts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            // Fetch books data
            const booksResponse = await fetch('http://localhost:3100/book');
            if (!booksResponse.ok) {
                throw new Error(`Failed to fetch books: ${booksResponse.statusText}`);
            }
            const booksData = await booksResponse.json();
            setBooks(booksData);

            // Fetch shirts data
            const shirtsResponse = await fetch('http://localhost:3100/tshirts');
            if (!shirtsResponse.ok) {
                throw new Error(`Failed to fetch shirts: ${shirtsResponse.statusText}`);
            }
            const shirtsData = await shirtsResponse.json();
            setShirts(shirtsData);
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


           <div class="banner-content">
    <img 
        src="https://rehbarstore.com/wp-content/uploads/2024/08/Let-the-Sunnah-Go-Forth-Akhi-5-768x1024.png" 
        alt="Kashmiri Honey" 
        class="banner-image" 
    />
    <h1>Welcome to Rehbar Store</h1>
    <p>Your one-stop shop for quality products</p>
    <button class="banner-button">Shop Now</button>
</div>

            <h1>Shirt Collection</h1>
            <div className="card-container">
                {shirts.map((shirt) => (
                    <div key={shirt._id} className="card">
                        <img src={shirt.image || '/placeholder.jpg'} alt={shirt.name} className="card-image" />
                        <div className="card-content">
                            <h2>{shirt.name}</h2>
                            <p>{shirt.description}</p>
                            <p><strong>Price:</strong> ₹{shirt.price}</p>
                            <p><strong>Rating:</strong> {shirt.rating}⭐</p>
                            <button className="card-button">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
