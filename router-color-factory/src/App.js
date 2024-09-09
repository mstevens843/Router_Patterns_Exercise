import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ColorList from './components/ColorList';
import ColorDetails from './components/ColorDetails';
import NewColorForm from './components/NewColorForm';

function App() {
    const [colors, setColors] = useState([{ name: 'red', color: '#ff0000' }]); // Default color

    const addColor = (newColor) => {
        setColors([...colors, newColor]);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/colors" element={<ColorList colors={colors} />} />
                <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
                <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
                <Route path="*" element={<Navigate to="/colors" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
