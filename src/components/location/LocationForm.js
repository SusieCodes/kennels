import React, { useState } from 'react';
// import { useHistory } from 'react-router';
import { useHistory } from "react-router-dom";
import { addLocation } from "../../modules/LocationManager";
import "./Location.css"
import "../../components/Forms.css"

export const LocationForm = () => {
	// State contains both location data as well as an isLoading flag
	// Defining initial state of the form inputs with useState()
	const [location, setLocation] = useState({
		name: "",
		address: "",
    phoneNumber: "",
    image: ""
	});

	const history = useHistory();

	//when a field changes, it updates state. The return will re-render and display based on the values in state
	//Controlled component

  const ResetForm = () => {
    setLocation({
      name: "",
      address: "",
      phoneNumber: "",
      image: ""
    });
    console.log("resetForm invoked")
  }

	const handleControlledInputChange = (event) => {
		/* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
		const newLocation = { ...location }
		let selectedVal = event.target.value
		/* forms provide values as strings and we want to save the ids as numbers */
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Sets the property to the new value
		using object bracket notation. */
		newLocation[event.target.id] = selectedVal
		// update state
		setLocation(newLocation)
	}


	const handleClickSaveLocation = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		if (location.name === "" || location.address === "" || location.phoneNumber === "") {
			window.alert("Please fill out all required info")
		} else {
			//invoke addLocation passing location as an argument.
			//once complete, change the url and display the location list
			addLocation(location)
				.then(() => history.push("/locations"))
		}
	}

	return (
    <div className="form-flex">
      <form>
        <div className="form__title">New Location</div>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Location name:</label>
            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control-edit" placeholder="Location name" value={location.name} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="breed">Address:</label>
            <input type="text" id="address" onChange={handleControlledInputChange} required className="form-control-edit" placeholder="Address" value={location.address} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="breed">Phone Number:</label>
            <input type="text" id="phoneNumber" onChange={handleControlledInputChange} required className="form-control-edit" placeholder="Phone Number" value={location.phoneNumber} />
          </div>
        </fieldset>

        <div className="form-btns">
          <button className="form-btn"
            onClick={handleClickSaveLocation}>
            Submit Location
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

