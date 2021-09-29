import React from "react"
import "./Customer.css"
import "./../../cards.css"

export const CustomerCard = ({ customer }) => (
    <section className="card">
      <div className="card-content">
        <h3>Name: <span className="customer__name">
          {customer.name}
        </span></h3>

        <div className="customer__address"><strong>Address: </strong> {customer.address}</div>

        <div className="customer__phone"><strong>Phone Number: </strong> {customer.phoneNumber}</div>

        <div className="customer__pet"><strong>Pet Name: </strong>{customer.animal.name} <strong> &nbsp;&nbsp; Breed: </strong> {customer.animal.breed}</div>
      </div>
    </section>
)