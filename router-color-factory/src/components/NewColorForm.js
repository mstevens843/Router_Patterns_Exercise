import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewColorForm({ addColor }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', color: '#000000' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        navigate("/colors");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Color Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="color">Color Value:</label>
                <input
                    type="color"
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add Color</button>
        </form>
    );
}

export default NewColorForm;
