import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { LocationCard } from './LocationCard';
import { getAllLocations, deleteLocation } from '../../modules/LocationManager';

export const LocationList = () => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setLocations function to update state
    return getAllLocations().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  const handleDeleteLocation = id => {
    deleteLocation(id)
    .then(() => getAllLocations().then(setLocations));
  };

  // got the locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  console.log("locations is: ", locations)

  // Finally we use .map() to "loop over" the array to show a list of cards
  return (

    <div className="section">

      <div className="section__header">
      LOCATIONS
      </div> 

      <div className="section__content">
      <Link to={`/locations/create`}><button>Add A Location</button></Link>
      </div>

      <div className="container-cards">
      {locations.map(location => 
      <LocationCard 
      key={location.id} 
      location={location}
      handleDeleteLocation={handleDeleteLocation} />)}
      </div>

  </div>
  );
};