import React, { useState, useEffect } from 'react';
import { getCustomerById, deleteCustomer } from '../../modules/CustomerManager';
import { getAnimalById } from "../../modules/AnimalManager"
import { PetCard } from "../animal/PetCard"
import './Customer.css';
import "../../components/Kennel.css";
import { useParams, useHistory } from "react-router-dom"

export const CustomerDetail = () => {
  const [customer, setCustomer] = useState({ name: "", address: "", phoneNumber: "", image: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [customerAnimals, setCustomerAnimals] = useState([]);

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
        console.log("customer.animals is: ", customer.animals)
        setCustomerAnimals(customer.animals);
        setCustomer({
          name: customer.name,
          address: customer.address,
          phoneNumber: customer.phoneNumber,
          image: customer.image
        });
        setIsLoading(false);
      })
      }, [customerId]);

  return (

    <div className="details__customer">

          <div className="customer__flex">

              <div className="customer__header">
                <div className="picture">
                  <picture>
                  {customer.image !== "" ?
                  <img src={require(`../../images/${customer.image}`).default} alt={customer.name} className="customer__header--photo"/> 
                  : <p>There isn't an image.</p>}
                  </picture>

                <div className="details__customer--info">
                  <div className="customer__info--name">{customer.name}</div>

                  <div className="customer__info--address"><strong>Address: </strong> {customer.address}</div>

                  <div className="customer__info--phone"><strong>Phone Number: </strong> {customer.phoneNumber}</div>

                </div>

                <div className="btn-flex">
                  <button className="details__btn" type="button" disabled={isLoading} onClick={goBack}>Back To List</button>
                  <button className="details__btn" type="button" disabled={isLoading} onClick={handleDelete}>Remove</button>
                </div>

              </div>

                  <div className="customer__pet--info">

                      <div className="customer__pet--cards">
                        <div className="pets">Pets</div>
                          {customerAnimals.map(pet =>
                          <PetCard
                            key={pet.id}
                            pet={pet} />)}
                      </div>

                  </div>

              </div>
          </div>
    </div>

    

  );
}
