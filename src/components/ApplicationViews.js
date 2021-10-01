import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"
import { CustomerList } from "./customer/CustomerList"
import { CustomerDetail } from "./customer/CustomerDetail"

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
        
            <Route path="/animals/:animalId(\d+)">
              <AnimalDetail />
            </Route>

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route exact path="/employees">
              <EmployeeList />
            </Route>

            <Route path="/employees/:employeeId(\d+)">
              <EmployeeDetail />
            </Route>

            {/* Render the location list when http://localhost:3000/locations */}
            <Route exact path="/locations">
              <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
              <LocationDetail />
            </Route>

            {/* Render the customer list when http://localhost:3000/customers */}
            <Route exact path="/customers">
              <CustomerList />
            </Route>

            <Route path="/customers/:customerId(\d+)">
              <CustomerDetail />
            </Route>
        </>
    )
}
