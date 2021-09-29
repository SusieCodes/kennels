import React from "react"
import "./Employee.css"
import "./../../cards.css"

export const EmployeeCard = ({ employee }) => (
  <section className="card">
  <div className="card-content">
  <h3>Name: <span className="employee__name">
    {employee.name}
  </span></h3>
  <address className="employee__address">Home Address: {employee.address}</address>
  <div className="">Location Id: {employee.locationId}</div>
  </div>
</section>
)