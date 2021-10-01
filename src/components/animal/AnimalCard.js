import React from "react"
import "./Animal.css"
import "./../../cards.css"

export const AnimalCard = ({ animal }) => (
    <section className="page__card">
      <div className="card__content">
        
        <picture>
          <img src={require(`../../images/${animal.image}`).default} alt="Customer's Dog" />
        </picture>

        <div className="pet__info">

          <div className="pet__info--name"><strong>Name: </strong> {animal.name}</div>

          <div className="pet__info--details"><strong>Breed: </strong> {animal.breed}</div>

          <div className="pet__info--details"><strong>Owner: </strong> {animal.customer.name}</div>

          <div className="pet__info--details"><strong>Location: </strong> {animal.location.name}</div>

        </div>
      </div>
    </section>
)