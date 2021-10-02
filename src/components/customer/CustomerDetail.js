import React, { useState, useEffect } from 'react';
import { getCustomerById, deleteCustomer } from '../../modules/CustomerManager';
import './Customer.css';
import "../../components/Kennel.css";
import { useParams, useHistory } from "react-router-dom"

export const CustomerDetail = () => {
  const [customer, setCustomer] = useState({ name: "", address: "", phoneNumber: "", animalName: "", breed: "", image: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {customerId} = useParams();
  const history = useHistory();

  const handleDelete = () => {
    console.log("handleDelete invoked")
    //invokes the delete function in CustomerManager and re-directs to customer list.
    setIsLoading(true);
    deleteCustomer(customerId).then(() =>
      history.push("/customers")
    );
  };

  const goBack = () => { history.push("/customers")}; //takes user back to list

  useEffect(() => {
    //getCustomerById(id) from CustomerManager and hang on to the data; put it into state
    console.log("useEffect customer Id is returned as ", customerId)
    getCustomerById(customerId)
      .then(customer => {
        console.log("getCustomerById returned ", customer)
        setCustomer({
          name: customer.name,
          address: customer.address,
          phoneNumber: customer.phoneNumber,
          animalName: customer.animal.name,
          breed: customer.animal.breed,
          image: customer.image
        });
        setIsLoading(false);
      });
  }, [customerId]);

  return (

    <div className="details">

      <div className="details__header">

        <picture>
        {customer.image !== "" ?
        <img src={require(`../../images/${customer.image}`).default} alt={customer.name} className="details__header--photo"/> 
        : <p>There isn't an image.</p>}
        </picture>

      </div>

      <div className="customer__info">

        <div className="customer__info--name">{customer.name}</div>

        <div className="customer__info--address"><strong>Address: </strong> {customer.address}</div>

        <div className="customer__info--phone"><strong>Phone Number: </strong> {customer.phoneNumber}</div>

        <div className="customer__info--petname"><strong>Pet Name: </strong>{customer.animalName}</div>

        <div className="customer__info--petbreed"><strong>Breed: </strong> {customer.breed}</div>

      </div>

      <div className="btn-flex">
        <button className="details__btn" type="button" disabled={isLoading} onClick={goBack}>Back To List</button>
        <button className="details__btn" type="button" disabled={isLoading} onClick={handleDelete}>Remove</button>
      </div>

    </div>
  );
}
