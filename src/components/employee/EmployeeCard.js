import React from "react"
import "./Employee.css"
import "./../../cards.css"

export const EmployeeCard = ({ employee }) => (
<section className="page__card">
  <div className="card__content">

    <picture>
      <img src={require(`../../images/${employee.image}`).default} alt={employee.name} />
    </picture>

    <div className="employee__info">

      <div className="employee__info--name">
        {employee.name}
      </div>
        
      <div className="employee__info--address"><strong>Address: </strong> {employee.address}
      </div>

      <div className="employee__info--phone"><strong>Cell Phone: </strong> {employee.phoneNumber}
      </div>

      <div className="employee__info--location"> <strong>Location: </strong> {employee.location.name}</div>

    </div>
  </div>
</section>
)