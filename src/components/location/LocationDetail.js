import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../../modules/LocationManager';
import './Location.css';
import "../../components/Kennel.css";
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "", phoneNumber: "", image: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {locationId} = useParams();
  const history = useHistory();

  const handleDelete = () => {
    console.log("handleDelete invoked")
    //invokes the delete function in AnimalManager and re-directs to animal list.
    setIsLoading(true);
    deleteLocation(locationId).then(() =>
      history.push("/locations")
    );
  };

  const goBack = () => { history.push("/locations")}; //takes user back to list

  useEffect(() => {
    //getLocationById(id) from LocationManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address,
          phoneNumber: location.phoneNumber,
          image: location.image
        });
        setIsLoading(false);   
      });
  }, [locationId]);

  return (

    <div className="details">

      <div className="details__header">
        <picture>
        {location.image !== "" ?
        <img src={require(`../../images/${location.image}`).default} alt={location.name} className="details__header--photo"/> 
        : <p>There isn't an image.</p>}
        </picture>
      </div>

      <div className="location__info">

      <div className="location__info--name">{location.name}
      </div>

      <div className="location__info--address"><strong>Address: </strong>{location.address}</div>

      <div className="location__info--phone"><strong>Bus Phone: </strong>{location.phoneNumber}</div>
      </div>

      <div className="btn-flex">
        <button className="details__btn" type="button" disabled={isLoading} onClick={goBack}>Back To List</button>
        <button className="details__btn" type="button" disabled={isLoading} onClick={handleDelete}>Remove</button>
      </div>

    </div>
  );
}