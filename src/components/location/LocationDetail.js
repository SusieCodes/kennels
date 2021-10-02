import React, { useState, useEffect } from 'react';
import { getLocationById } from '../../modules/LocationManager';
import './Location.css';
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "", phoneNumber: "" });

  const {locationId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getLocationById(id) from LocationManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address,
          phoneNumber: location.phoneNumber
        });
      });
  }, [locationId]);

  return (
    <div className="location__info">

    <div className="location__info--name">{location.name}
    </div>

    <div className="location__info--address"><strong>Address: </strong>{location.address}</div>

    <div className="location__info--phone"><strong>Bus Phone: </strong>{location.phoneNumber}</div>

    </div>
  );
}