import React from "react"
import "./Customer.css"
import "./../../cards.css"

export const CustomerCard = ({ customer }) => (
    <section className="card">
      <div className="card-content">
        <h3>Name: <span className="customer__name">
          {customer.name}
        </span></h3>
        <address className="customer__address">Address: {customer.address}</address>
        <div className="customer__phone">Phone Number:{customer.phoneNumber}</div>
      </div>
    </section>
)