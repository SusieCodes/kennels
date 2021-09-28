import React from "react"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const Employee = () => (
  <>
      <h2>Employees</h2>
      <article className="employees">
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
      </article>
  </>
)