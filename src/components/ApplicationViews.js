import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "../Home"
import { Register } from "../components/auth/Register"
import { Login } from "../components/auth/Login"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalEditForm } from "../components/animal/AnimalEditForm"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeEditForm } from "../components/employee/EmployeeEditForm"
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"
import { LocationForm } from "./location/LocationForm"
import { LocationEditForm } from "../components/location/LocationEditForm"
import { CustomerList } from "./customer/CustomerList"
import { CustomerDetail } from "./customer/CustomerDetail"
import { CustomerForm } from "./customer/CustomerForm"
import { CustomerEditForm } from "../components/customer/CustomerEditForm"

export const ApplicationViews = ({isAdmin}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

const setAuthUser = (user) => {
	sessionStorage.setItem("kennel_customer", JSON.stringify(user))
	setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
}


    return (
        <>
            <Route exact path="/">
              <Home isAdmin = {isAdmin} />
            </Route>

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

            <Route exact path="/animals/:animalId(\d+)/edit">
              <AnimalEditForm />
            </Route>

            <Route exact path="/employees">
              {isAuthenticated ? <EmployeeList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
              <EmployeeDetail />
            </Route>

            <Route exact path="/employees/create">
              <EmployeeForm />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)/edit">
              <EmployeeEditForm />
            </Route>

            <Route exact path="/locations">
              <LocationList />
            </Route>

            <Route exact path="/locations/:locationId(\d+)">
              <LocationDetail />
            </Route>

            <Route exact path="/locations/create">
              <LocationForm />
            </Route>

            <Route path="/locations/:locationId(\d+)/edit">
              <LocationEditForm />
            </Route>

            <Route exact path="/customers">
              {isAuthenticated ? <CustomerList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/customers/:customerId(\d+)">
              <CustomerDetail />
            </Route>

            <Route exact path="/customers/create">
              <CustomerForm />
            </Route>

            <Route exact path="/customers/:customerId(\d+)/edit">
              <CustomerEditForm />
            </Route>
        </>
    )
}

