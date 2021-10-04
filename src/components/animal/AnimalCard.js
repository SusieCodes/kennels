import React from "react"
import { Link } from "react-router-dom";
import "./Animal.css"
import "./../../cards.css"

export const AnimalCard = ({ animal, handleDeleteAnimal }) => (
    <section className="page__card">
      <div className="card__content">
        
        <picture>
          
          {animal.image !== "" ?
          <img className="card__content--photo" src={require(`../../images/${animal.image}`).default} alt={animal.name} /> 
          : <p className="no-image">There isn't an image.</p>}

        </picture>

        <div className="pet__info">

          <div className="pet__info--name"><strong>Name: </strong> {animal.name}</div>

          <div className="pet__info--details"><strong>Breed: </strong> {animal.breed}</div>

          <div className="pet__info--details"><strong>Owner: </strong> {animal.customer.name}</div>

          <div className="pet__info--details"><strong>Location: </strong> {animal.location.name}</div>

        </div>

        <div className="remove-item">

        <Link to={`/animals/${animal.id}`}><button>Details</button></Link>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Remove Pet</button>


        </div>

      </div>
    </section>
)

