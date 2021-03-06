import React from "react"
import { Link } from "react-router-dom"
import "./Employee.css"
import "./../../cards.css"

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {

return (
    <section className="page__card">
      <div className="card__content">

        <picture>
          <img className="card__content--photo" src={require(`../../images/${employee.image}`).default} alt={employee.name} />
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

        <div className="remove-item">

          <Link to={`/employees/${employee.id}`}><button>Details</button></Link>
          <Link to={`/employees/${employee.id}/edit`}><button>Edit</button></Link>

          <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Remove</button>

        </div>

      </div>
    </section>
  )
}