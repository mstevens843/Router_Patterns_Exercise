// This component will list colors and provide links to their detail pages and the form to add a new color. 

import React from 'react'; 
import { Link } from 'react-router-dom'; 

function ColorList({ colors }) {
    return (
        <div>
            <h1>Welcome to the Color Factory!</h1>
            <Link to="/colors/new">Add a Color</Link>
            {colors.map(color =>  (
                <div key={color.name}>
                    <Link to={`/colors/${color.name}`}>{color.name}</Link>
                </div>
            ))}
        </div>
    );
}

export default ColorList; 

