import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css'

function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5003/products', { // Replace with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            if (response.ok) {
                alert('Product added successfully!');
                setProduct({ name: '', description: '', price: '', image: '' }); // Reset form
                navigate('/'); // Navigate back to home page
            } else {
                alert('Failed to add product.');
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="add-product">
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={product.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={product.price} onChange={handleChange} required />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" name="image" value={product.image} onChange={handleChange} required />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;