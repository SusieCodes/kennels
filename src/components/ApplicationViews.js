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
            <Route exact path="/animals">
              <AnimalList />
            </Route>
        

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route exact path="/employees">
              <EmployeeList />
            </Route>


            {/* Render the location list when http://localhost:3000/locations */}
            <Route exact path="/locations">
              <LocationList />
            </Route>


            {/* Render the customer list when http://localhost:3000/customers */}
            <Route exact path="/customers">
              <CustomerList />
            </Route>
        </>
    )
}
