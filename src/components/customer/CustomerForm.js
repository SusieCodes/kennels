import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router';
import { useHistory } from "react-router-dom";
import { addCustomer } from "../../modules/CustomerManager";
import "./Customer.css"
import "../../components/Forms.css"

export const CustomerForm = () => {
	// State contains both customer data as well as an isLoading flag
	// Defining initial state of the form inputs with useState()
	const [customer, setCustomer] = useState({
		name: "",
		address: "",
		phoneNumber: "",
		email: "",
    image: ""
	});

	const history = useHistory();

	//when a field changes, it updates state. The return will re-render and display based on the values in state
	//Controlled component

  const ResetForm = () => {
    setCustomer({
      name: "",
      address: "",
      phoneNumber: "",
      email: "",
      image: ""
    });
    console.log("resetForm invoked")
  }

	const handleControlledInputChange = (event) => {
		/* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
		const newCustomer = { ...customer }
		let selectedVal = event.target.value
		/* forms provide values as strings and we want to save the ids as numbers */
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Sets the property to the new value
		using object bracket notation. */
		newCustomer[event.target.id] = selectedVal
		// update state
		setCustomer(newCustomer)
	}


	const handleClickSaveCustomer = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form


		if (customer.name === "" || customer.address === "" || customer.phoneNumber === "" || customer.email === "") {
			window.alert("Please fill out all required info")
		} else {
			//invoke addCustomer passing customer as an argument
			//this changes the url and displays the customer list
			addCustomer(customer)
				.then(() => history.push("/customers"))
		}
	}

	return (
    <div className="form-flex">
      <form>
        <div className="form__title">New Customer</div>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Customer name:</label>
            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control-edit" placeholder="Customer name" value={customer.name} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" onChange={handleControlledInputChange} required className="form-control-edit" placeholder="Address" value={customer.address} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" id="phoneNumber" onChange={handleControlledInputChange} required className="form-control-edit" placeholder="Phone Number" value={customer.phoneNumber} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="text" id="email" onChange={handleControlledInputChange} required className="form-control-edit" placeholder="Email Address" value={customer.email} />
          </div>
        </fieldset>

        <div className="form-btns">
          <button className="form-btn"
            onClick={handleClickSaveCustomer}>
            Submit Customer
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

