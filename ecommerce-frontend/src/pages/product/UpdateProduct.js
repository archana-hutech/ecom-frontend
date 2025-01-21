import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateProduct() {
    const { id } = useParams(); // Get the product ID from the URL
    console.log('Product ID from URL:', id); // Log the product ID
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (!id) {
            console.error('No product ID found in URL');
            return; // Exit if no ID is found
        }
        const fetchProduct = async () => {
            const response = await fetch(`http://localhost:5003/products/${id}`); // Fetch the product by ID
            if (!response.ok) {
                const errorText = await response.text(); // Get the error text
                console.error('Error fetching product:', response.status, errorText);
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct().catch(error => console.error('Error fetching product:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5003/products/${product._id}`, { // Use product._id for updating
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            if (response.ok) {
                alert('Product updated successfully!');
                navigate('/'); // Navigate back to home page
            } else {
                alert('Failed to update product.');
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="add-product">
            <h1>Update Product</h1>
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
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
}

export default UpdateProduct; 