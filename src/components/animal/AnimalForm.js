import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router';
import { useHistory } from "react-router-dom";
import { addAnimal } from "../../modules/AnimalManager";
import { getAllLocations } from "../../modules/LocationManager";
import { getAllCustomers } from "../../modules/CustomerManager";
import './AnimalForm.css'

const ResetForm = () => {
  AnimalForm();
  console.log("resetForm invoked")
}

export const AnimalForm = () => {
	// State contains both animal data as well as an isLoading flag
	// Defining initial state of the form inputs with useState()
	const [animal, setAnimal] = useState({
		name: "",
		breed: "",
		locationId: 0,
		customerId: 0,
    image: ""
	});

	const [isLoading, setIsLoading] = useState(true);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	const [locations, setLocations] = useState([]);
	const [customers, setCustomers] = useState([]);

	const history = useHistory();

	//when a field changes, it updates state. The return will re-render and display based on the values in state
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
		const newAnimal = { ...animal }
		let selectedVal = event.target.value
		/* forms provide values as strings and we want to save the ids as numbers
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Sets the property to the new value
		using object bracket notation. */
		newAnimal[event.target.id] = selectedVal
		// update state
		setAnimal(newAnimal)
	}

    useEffect(() => {
      console.log("useEffect1 invoked")
		//load location data and setState
      getAllLocations().then(locations => {
        setLocations(locations)
      })
	}, []);


     useEffect(() => {
      console.log("useEffect2 invoked")
		//load customer data and setState
      getAllCustomers().then(customers => {
        setCustomers(customers)
      })
	}, []);


	const handleClickSaveAnimal = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const locationId = animal.locationId
		const customerId = animal.customerId

		if (animal.name === "" || animal.breed === "" || locationId === 0 || customerId === 0) {
			window.alert("Please fill out all required info")
		} else {
			//invoke addAnimal passing animal as an argument.
			//once complete, change the url and display the animal list
			addAnimal(animal)
				.then(() => history.push("/animals"))
		}
	}

	return (
    <div className="form-flex">
      <form className="animalForm">
        <h2 className="animalForm__title">New Animal</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Animal name:</label>
            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="breed">Animal breed:</label>
            <input type="text" id="breed" onChange={handleControlledInputChange} required className="form-control" placeholder="Animal breed" value={animal.breed} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="customerId">Customer: </label>
            <select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
              <option value="0">Select a customer</option>
              {customers.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>


        <div className="form-btns">
          <button className="form-btn"
            onClick={handleClickSaveAnimal}>
            Submit Pet
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

