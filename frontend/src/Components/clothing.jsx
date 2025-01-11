import React, { useEffect, useState } from 'react';
import './Home.css'; 
import Navbar from './Navbar';

function Clothing() {
      const [shirts, setShirts] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {

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

    return (<>
   
    
        <div className="home">
            <h1>Tshirt Collection</h1>
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
        </>
    );
}

export default Clothing;
