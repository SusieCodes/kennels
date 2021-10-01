import React from "react"
import "./Customer.css"
import "./../../cards.css"

export const CustomerCard = ({ customer, handleDeleteCustomer }) => (
    <section className="page__card">
      <div className="card__content">

        <picture>
          <img src={require(`../../images/${customer.image}`).default} alt={customer.name} />
        </picture>

        <div className="customer__info">

          <div className="customer__info--name">{customer.name}
          </div>

          <div className="customer__info--address"><strong>Address: </strong> {customer.address}</div>

          <div className="customer__info--phone"><strong>Phone Number: </strong> {customer.phoneNumber}</div>

          <div className="customer__info--petname"><strong>Pet Name: </strong>{customer.animal.name}</div>

          <div className="customer__info--petbreed"><strong>Breed: </strong> {customer.animal.breed}</div>

        </div>

        <div className="remove-item">
        <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove Customer</button>
        </div>

      </div>
    </section>
)