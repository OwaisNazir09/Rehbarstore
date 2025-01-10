import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px 20px" }}>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex" }}>
        <li style={{ margin: "0 15px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link to="/topwear" style={{ color: "white", textDecoration: "none" }}>Topwear</Link>

        </li>

        <li style={{ margin: "0 15px" }}>
          <Link to="/newcollection" style={{ color: "white", textDecoration: "none" }}>New Collection</Link>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
