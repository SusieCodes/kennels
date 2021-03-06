import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CustomerCard } from './CustomerCard';
import { getAllCustomers, deleteCustomer } from '../../modules/CustomerManager';

export const CustomerList = () => {
  // The initial state is an empty array
  const [customers, setCustomers] = useState([]);

  const getCustomers = () => {
    // After the data comes back from the API, we
    //  use the function to update state
    return getAllCustomers().then(animalsFromAPI => {
      setCustomers(animalsFromAPI)
    });
  };

  const handleDeleteCustomer = id => {
    deleteCustomer(id)
    .then(() => getAllCustomers().then(setCustomers));
  };

  // got the customers from the API on the component's first render
  useEffect(() => {
    getCustomers();
  }, []);

  console.log("Customers is: ", customers)

  // Finally we use .map() to "loop over" the array to show a list of cards
  return (
    <div className="section">

      <div className="section__header">
      CUSTOMERS
      </div>

      <div className="section__content">
      <Link to={`/customers/create`}><button>Add A Customer</button></Link>
      </div> 

      <div className="container-cards">
        {customers.map(customer => 
        <CustomerCard 
        key={customer.id} 
        customer={customer}
        handleDeleteCustomer={handleDeleteCustomer}
        />)}
      </div>

    </div>
  );
};