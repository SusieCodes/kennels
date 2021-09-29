import React from "react"
import "./Location.css"
import "./../../cards.css"

export const LocationCard = ({ location }) => (
    <section className="card">
      <div className="card-content">
        <h3>Location: <span className="card-location-name">
          {location.name}
        </span></h3>
        <p>Address: {location.address}</p>
      </div>
    </section>
)