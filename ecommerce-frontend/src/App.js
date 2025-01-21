import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from '../src/pages/product/AddProduct';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import UpdateProduct from './pages/product/UpdateProduct';
import './App.css'

function App() {
    return (
        <Router>
            <ToastContainer />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/update-product/:id" element={<UpdateProduct />} />
            </Routes>
        </Router>
    );
}

export default App;
