import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"

export const ApplicationViews = ({isAdmin}) => {
    return (
        <>
            {/* Render the list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin = {isAdmin} />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalList />
            </Route>
        

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route path="/employees">
              <EmployeeList />
            </Route>


            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations">
              <LocationList />
            </Route>


            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="/customers">
              <CustomerList />
            </Route>
        </>
    )
}
