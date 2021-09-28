import React from "react"
import "./Employee.css"

export const EmployeeCard = (employee) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>

        <address className="employee__address">
            <div>{employee.address}</div>
        </address>

    </section>
)