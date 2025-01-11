import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // handle newsletter sign-up logic
    console.log("Email subscribed:", email);
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-newsletter">
          <h2>Join our newsletter!</h2>
          <form onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">SIGN UP</button>
          </form>
        </div>
        
        <div className="footer-contact-info">
          <div className="footer-address">
            <h3>Our Address:</h3>
            <p>Rehbar Store</p>
            <p>Zazna, Ganderbal, Near Fruit Mandi</p>
            <p>Jammu & Kashmir, India - 191131</p>
            <p>GST: 01DEJPR1002D1ZA</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3>MY ACCOUNT</h3>
              <ul>
                <li><a href="/track-order">Track Order</a></li>
                <li><a href="/my-account">My Account</a></li>
                <li><a href="/my-orders">My Orders</a></li>
                <li><a href="/my-addresses">My Addresses</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>USEFUL LINKS</h3>
              <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/returns-exchange">Returns & Exchange</a></li>
                <li><a href="/terms-conditions">Terms & Conditions</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>INFORMATION</h3>
              <ul>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/shipping-policy">Shipping Policy</a></li>
                <li><a href="/payment-policy">Payment Policy</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>MAIN CATEGORIES</h3>
              <ul>
                <li><a href="/books">Books</a></li>
                <li><a href="/clothing">Clothing</a></li>
                <li><a href="/attar-perfumes">Attar/Perfumes</a></li>
                <li><a href="/publishers">Publishers</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <div>
              <h3>Our Email:</h3>
              <p>support@rehbarstore.com</p>
            </div>
            <div>
              <h3>Our WhatsApp number:</h3>
              <p>+91 7051774380</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Rehbar Store © 2020 - 2024 | All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
