import React, { useState, useEffect } from 'react';
import { AnimalCard } from './AnimalCard';
import { getAllAnimals } from '../../modules/AnimalManager';

export const AnimalList = () => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllAnimals().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  console.log("animals is: ", animals)
  
    return(
      <div className="container-cards">
        {animals.map(animal =>
          <AnimalCard key={animal.id} animal={animal} />
        )}
      </div>
    );
  };
  



