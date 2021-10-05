import React, { useState, useEffect } from 'react';
import { getAnimalById, deleteAnimal } from "../../modules/AnimalManager";
import "./Animal.css";
import "../../components/Kennel.css";
import { useParams, useHistory } from "react-router-dom";

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "", ownerName: "", location: "", image: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {animalId} = useParams();
  const history = useHistory();

  const handleDelete = () => {
    console.log("handleDelete invoked")
    //invokes the delete function in AnimalManager and re-directs to animal list.
    setIsLoading(true);
    deleteAnimal(animalId).then(() =>
      history.push("/animals")
    );
  };

  const goBack = () => { history.push("/animals")}; //takes user back to list

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
        setIsLoading(false);
      });
  }, [animalId]);

  return (
    
    <div className="details">

      <div className="details__header">
        <picture>
        {animal.image !== "" ?
        <img src={require(`../../images/${animal.image}`).default} alt={animal.name} className="details__header--photo"/> 
        : <p>There isn't an image.</p>}
        </picture>
      </div>

      <div className="pet__info">

          <div className="pet__info--name"><strong>Name: </strong> {animal.name}</div>

          <div className="pet__info--details"><strong>Breed: </strong> {animal.breed}</div>

          <div className="pet__info--details"><strong>Owner: </strong> {animal.ownerName}</div>

          <div className="pet__info--details"><strong>Location: </strong> {animal.location}</div>

      </div>

      <div className="btn-flex">
        <button type="button" disabled={isLoading} onClick={goBack}>Back To List</button>

        <button type="button"
          onClick={() => history.push(`/animals/${animalId}/edit`)}>Edit</button>

        <button type="button" disabled={isLoading} onClick={handleDelete}>Remove</button>
      </div>

    </div>
  
  );
}