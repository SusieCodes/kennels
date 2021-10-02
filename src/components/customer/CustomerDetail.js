import React, { useState, useEffect } from 'react';
import { getCustomerById } from '../../modules/CustomerManager';
import './Customer.css';
import { useParams, useHistory } from "react-router-dom"

export const CustomerDetail = () => {
  const [customer, setCustomer] = useState({ name: "", address: "", phoneNumber: "", animalName: "", breed: "", image: "" });

  const {customerId} = useParams();
  const history = useHistory();

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
    </div>
  );
}
