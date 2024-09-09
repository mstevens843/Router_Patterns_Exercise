import React from 'react'; 
import { useParams } from 'react-router-dom'; 

function DogDetails({ dogs }) {
    const { name } = useParams(); 
    const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase()); 

    if (!dog) return <h1>Dog not found!</h1>

    return (
        <div>
          <h1>{dog.name}</h1>
          <img src={dog.src} alt={dog.name} />
          <h2>Age: {dog.age}</h2>
          <ul>
            {dog.facts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default DogDetails;