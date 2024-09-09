// This component will show a color detail based on the color name in the URL. 

import React from 'react'; 
import { useParams, Navigate, Link } from 'react-router-dom'; 

function ColorDetails({ colors }) {
    const { color } = useParams(); 
    const foundColor = colors.find(c => c.name === color); 

    if (!foundColor) return <Navigate replace to ="/colors" />


    return (
        <div style={{ backgroundColor: foundColor.color, minHeight: "100vh" }}>
      <h1>{foundColor.name}</h1>
      <Link to="/colors">Go back</Link>
    </div>
    );
}

export default ColorDetails; 

