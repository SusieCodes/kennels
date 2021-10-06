import React, { useState, useEffect } from "react";
import { getAnimalById } from "../../modules/AnimalManager";
import "../../components/animal/Animal.css";

export const AnimalSpotlight = ({animalId}) => {
  const [animal, setAnimal] = useState({name: "", breed: "", image: "" });

  useEffect(() => {
    getAnimalById(animalId).then(animal => {
      setAnimal(animal);
    });
  }, [animalId]);

  return (
      <div className="pet__info--spotlight">
          {animal.image !== "" ?
            <img className="spotlight__photo" src={require(`../../images/${animal.image}`).default} alt="spotlight animal" /> 
            : <p className="no-image">Please add an image</p>}

          <div className="spotlight--name"><strong>Name: </strong> {animal?.name}</div>

          <div className="spotlight--details"><strong>Breed: </strong> {animal?.breed}</div>

      </div>
  );
};

