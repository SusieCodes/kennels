import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router';
import { useHistory } from "react-router-dom";
import { addEmployee } from "../../modules/EmployeeManager";
import { getAllLocations } from "../../modules/LocationManager";
import "./Employee.css"
import "../../components/Forms.css"

export const EmployeeForm = () => {
	// State contains both employee data as well as an isLoading flag
	// Defining initial state of the form inputs with useState()
	const [employee, setEmployee] = useState({
		name: "",
		address: "",
    phoneNumber: "",
    email: "",
		locationId: 0,
    image: ""
	});

	// you will need the the `getAll` in the LocationsManager and EmployeesManager to complete this section
	const [locations, setLocations] = useState([]);

	const history = useHistory();

	//when a field changes, it updates state. The return will re-render and display based on the values in state
	//Controlled component

  const ResetForm = () => {
    setEmployee({
      name: "",
      address: "",
      phoneNumber: "",
      email: "",
      locationId: 0,
      image: ""
    });
    console.log("resetForm invoked")
  }

	const handleControlledInputChange = (event) => {
		/* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
		const newEmployee = { ...employee }
		let selectedVal = event.target.value
		/* forms provide values as strings and we want to save the ids as numbers */
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Sets the property to the new value
		using object bracket notation. */
		newEmployee[event.target.id] = selectedVal
		// update state
		setEmployee(newEmployee)
	}

    useEffect(() => {
      console.log("useEffect1 invoked")
		//load location data and setState
      getAllLocations().then(locations => {
        setLocations(locations)
      })
	}, []);


	const handleClickSaveEmployee = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const locationId = employee.locationId

		if (employee.name === "" || employee.address === "" || employee.phoneNumber === "" || employee.email === "" || locationId === 0 ) {
			window.alert("Please fill out all required info")
		} else {
			//invoke addEmployee passing employee as an argument.
			//once complete, change the url and display the employee list
			addEmployee(employee)
				.then(() => history.push("/employees"))
		}
	}

	return (
    <div className="form-flex">
      <form>
        <div className="form__title">New Employee</div>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Employee name:</label>
            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control-edit" placeholder="Employee name" value={employee.name} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" onChange={handleControlledInputChange} required className="form-control-edit" placeholder="Address" value={employee.address} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" id="phoneNumber" onChange={handleControlledInputChange} required className="form-control-edit" placeholder="Phone Number" value={employee.phoneNumber} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="text" id="email" onChange={handleControlledInputChange} required className="form-control-edit" placeholder="Email Address" value={employee.email} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control-edit" >
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        <div className="form-btns">
          <button className="form-btn"
            onClick={handleClickSaveEmployee}>
            Submit Employee
          </button>

          <button className="form-btn"
            onClick={ResetForm}>
            Reset Form
          </button>
        </div>

      </form>
    </div>
	)
};

