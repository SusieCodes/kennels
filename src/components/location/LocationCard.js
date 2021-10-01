import React from "react"
import "./Location.css"
import "./../../cards.css"

export const LocationCard = ({ location, handleDeleteLocation }) => (
    <section className="page__card">

      <div className="card__content">

      <picture>
        <img src={require(`../../images/${location.image}`).default} alt={location.name} />
      </picture>

        <div className="location__info">

        <div className="location__info--name">{location.name}
        </div>

        <div className="location__info--address"><strong>Address: </strong>{location.address}</div>

        <div className="location__info--phone"><strong>Bus Phone: </strong>{location.phoneNumber}</div>

        </div>

        <div className="remove-item">
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>Remove Location</button>
        </div>

      </div>

    </section>
)