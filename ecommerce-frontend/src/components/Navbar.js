import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Product Management</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/add-product">Add Product</Link>
            </div>
        </nav>
    );
}

export default Navbar; 