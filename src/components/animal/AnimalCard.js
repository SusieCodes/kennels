import React from "react"
import "./Animal.css"
import "./../../cards.css"

export const AnimalCard = ({ animal }) => (
    <section className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require('./petImages/ziggy.png')} alt="My Dog" />
        </picture> */}
        <h3>Name: <span className="card-petname">
          {animal.name}
        </span></h3>
        <p>Breed: {animal.breed}</p>
      </div>
    </section>
)