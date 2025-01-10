import Navbar from "./navbar";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [currentBanner, setBanner] = useState([]);
  const [tshirts, settshirts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3200/banners")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the data for banners");
        }
        return response.json();
      })
      .then((data) => {
        setBanner(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3200/topwear",{
      
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the data for banners");
        }
        return response.json();
      })
      .then((data) => {
        setBanner(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);


  return (
    <div>
      <Navbar />

     
    </div>
   
  );
};

export default Home;
