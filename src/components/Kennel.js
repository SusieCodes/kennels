import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { EmployeeCard } from "./employee/EmployeeCard"
import { LocationCard } from "./location/LocationCard"
import { CustomerCard } from "./customer/CustomerCard"
import { PropsAndState } from "./PropsAndState"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"
import "./animal/Animal.css"
import "./employee/Employee.css"
import "./location/Location.css"
import "./customer/Customer.css"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Employees</h2>
        <article className="animals">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>

        <h2>Locations</h2>
        <article className="animals">
            <LocationCard />
            <LocationCard />
            <LocationCard />
        </article>

        <h2>Customers</h2>
        <article className="animals">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>
    </>
)

