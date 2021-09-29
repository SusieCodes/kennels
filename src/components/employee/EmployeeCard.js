import React from "react"
import "./Employee.css"
import "./../../cards.css"

export const EmployeeCard = ({ employee }) => (
  <section className="card">
  <div className="card-content">
  <h3>Name: <span className="employee__name">
    {employee.name}
  </span></h3>
  <address className="employee__address"><strong>Home Address: </strong> {employee.address}</address>
  <div className="employee__address"><strong>Location: </strong> {employee.location.name}</div>
  </div>
</section>
)