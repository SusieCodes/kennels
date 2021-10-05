import React, { useState, useEffect } from "react"
import { update, getCustomerById } from "../../modules/CustomerManager"
import { useParams, useHistory } from "react-router-dom"
import "../../components/Forms.css"


export const CustomerEditForm = () => {
  const [customer, setCustomer] = useState({ name: "", breed: "", locationId: 1, customerId: 1, image: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {customerId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...customer };
    stateToChange[evt.target.id] = evt.target.value;
    setCustomer(stateToChange);
  };

  const updateExistingCustomer = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedCustomer = {
      id: customerId,
      name: customer.name,
      address: customer.address,
      phoneNumber: customer.phoneNumber,
      email: customer.email,
      image: customer.image
    };

  update(editedCustomer)
    .then(() => history.push("/customers")
    )
  }

  useEffect(() => {
    getCustomerById(customerId)
      .then(customer => {
        setCustomer(customer);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    <div className="form-flex">
        <form>
          <div className="form__title">Edit Customer</div>
          <fieldset>
            <div className="form-group">

              <label htmlFor="name">Customer Name:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="name"
                value={customer.name}
              />

              <label htmlFor="address">Address:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="address"
                value={customer.address}
              />

              <label htmlFor="phoneNumber">Phone:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="phoneNumber"
                value={customer.phoneNumber}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="email"
                value={customer.email}
              />

            </div>

            <div className="form-btns">
              
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingCustomer}
                className="form-btn">Submit</button>

              <button
                type="button"
                  onClick={() => history.push(`/customers`)}
                  className="form-btn">Cancel</button>

            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

