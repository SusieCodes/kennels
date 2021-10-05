import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "../Home"
import { Register } from "../components/auth/Register"
import { Login } from "../components/auth/Login"
import { AnimalEditForm } from "../components/animal/AnimalEditForm"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"
import { CustomerList } from "./customer/CustomerList"
import { CustomerDetail } from "./customer/CustomerDetail"

export const ApplicationViews = ({isAdmin}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

const setAuthUser = (user) => {
	sessionStorage.setItem("kennel_customer", JSON.stringify(user))
	setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
}


    return (
        <>
            {/* Render the list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin = {isAdmin} />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
            {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>
        
            <Route path="/login">
	          <Login setAuthUser={setAuthUser}/>
            </Route>

            <Route path="/register">
              <Register setAuthUser={setAuthUser}/>
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
              <AnimalDetail />
            </Route>

            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
              {isAuthenticated ? <AnimalEditForm />
              : <Redirect to="/login" />}
            </Route>


            {/* Render the employee list when http://localhost:3000/employees */}
            <Route exact path="/employees">
            {isAuthenticated ? <EmployeeList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
              <EmployeeDetail />
            </Route>

            {/* Render the location list when http://localhost:3000/locations */}
            <Route exact path="/locations">
              <LocationList />
            </Route>

            <Route exact path="/locations/:locationId(\d+)">
              <LocationDetail />
            </Route>

            {/* Render the customer list when http://localhost:3000/customers */}
            <Route exact path="/customers">
            {isAuthenticated ? <CustomerList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/customers/:customerId(\d+)">
              <CustomerDetail />
            </Route>
        </>
    )
}

