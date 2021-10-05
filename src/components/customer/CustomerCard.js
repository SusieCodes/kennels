import React from "react"
import { Link } from "react-router-dom";
import "./Customer.css"
import "./../../cards.css"

export const CustomerCard = ({ customer, handleDeleteCustomer }) => {

  return (
    <section className="page__card">
      <div className="card__content">

        <picture>
          {customer.image !== "" ?
          <img className="card__content--photo" src={require(`../../images/${customer.image}`).default} alt={customer.name} />
          : <p className="no-image">Please add an image.</p>}

        </picture>

        <div className="customer__info">

          <div className="customer__info--name">{customer.name}
          </div>

          <div className="customer__info--address"><strong>Address: </strong> {customer.address}</div>

          <div className="customer__info--phone"><strong>Phone Number: </strong> {customer.phoneNumber}</div>

          <div className="all__pets"><strong>PETS</strong></div>
          
          {/* <div className="customer__info--petname"><strong>Pet Name: </strong>{customer.animal.name}</div>

          <div className="customer__info--petbreed"><strong>Breed: </strong> {customer.animal.breed}</div> */}

        </div>

        <div className="remove-item">

        <Link to={`/customers/${customer.id}`}><button>Details</button></Link>
        <Link to={`/customers/${customer.id}/edit`}><button>Edit</button></Link>

        <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove</button>

        </div>

      </div>
    </section>
  )
}