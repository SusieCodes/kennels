import React, { useState, useEffect } from "react"
import { update, getAnimalById } from "../../modules/AnimalManager"
import "./Animal.css"
import "../../components/Forms.css"
import { useParams, useHistory } from "react-router-dom"
import { getAllLocations } from "../../modules/LocationManager"
import { getAllCustomers } from "../../modules/CustomerManager"


export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "", locationId: 1, customerId: 1, image: "" });
  const [isLoading, setIsLoading] = useState(false);

	const [locations, setLocations] = useState([]);
	const [customers, setCustomers] = useState([]);

  const {animalId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
      locationId: animal.locationId,
      customerId: animal.customerId,
      image: animal.image
    };

  update(editedAnimal)
    .then(() => history.push("/animals")
    )
  }

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("useEffect1 invoked")
  //load location data and setState
    getAllLocations().then(locations => {
      setLocations(locations);
      setIsLoading(false);
    })
}, []);


   useEffect(() => {
    console.log("useEffect2 invoked")
  //load customer data and setState
    getAllCustomers().then(customers => {
      setCustomers(customers);
      setIsLoading(false);
    })
}, []);

  return (
    <>
    <div className="form-flex">
        <form>
          <div className="form__title">Edit Animal</div>
          <fieldset>
            <div className="form-group">

              <label htmlFor="name">Pet Name:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="name"
                value={animal.name}
              />

              <label htmlFor="breed">Breed:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="breed"
                value={animal.breed}
              />
 
          <div className="form-group">
            <label htmlFor="location">Location: </label>
            <select value={animal.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control-edit" >
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="customerId">Customer: </label>
            <select value={animal.customerId} name="customer" id="customerId" onChange={handleFieldChange} className="form-control-edit" >
              <option value="0">Select a customer</option>
              {customers.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

            </div>

            <div className="form-btns">
              
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingAnimal}
                className="form-btn">Submit</button>

              <button
                type="button"
                  onClick={() => history.push(`/animals`)}
                  className="form-btn">Cancel</button>

            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

