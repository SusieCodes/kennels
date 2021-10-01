import React, { useState, useEffect } from 'react';
import { getAnimalById } from "../../modules/AnimalManager";
import "./Animal.css";
import "../../components/Kennel.css";
import { useParams, useHistory } from "react-router-dom";

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "", ownerName: "", location: "", image: "" });

  const {animalId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect animalId is ", animalId)

    getAnimalById(animalId)
      .then(animal => {
        console.log("getAnimalById returned ", animal)
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          ownerName: animal.customer.name,
          location: animal.location.name,
          image: animal.image
        });
      });
  }, [animalId]);

  return (
    <div className="details">
      <div className="pet__info">

        <picture>

        {animal.image !== "" ?  <img src={require(`../../images/${animal.image}`).default} alt={animal.name} className="details__photo"/> : <p>There isn't an image.</p>}

        </picture>

        <div className="pet__info--name"><strong>Name: </strong> {animal.name}</div>

        <div className="pet__info--details"><strong>Breed: </strong> {animal.breed}</div>

        <div className="pet__info--details"><strong>Owner: </strong> {animal.ownerName}</div>

        <div className="pet__info--details"><strong>Location: </strong> {animal.location}</div>

    </div>
  </div>
  );
}