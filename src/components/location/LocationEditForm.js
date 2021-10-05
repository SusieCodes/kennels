import React, { useState, useEffect } from "react"
import { update, getLocationById } from "../../modules/LocationManager"
import { useParams, useHistory } from "react-router-dom"
import { getAllLocations } from "../../modules/LocationManager"
import "../../components/Forms.css"


export const LocationEditForm = () => {
  const [location, setLocation] = useState({ name: "", address: "", phoneNumber: "", image: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {locationId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const updateExistingLocation = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedLocation = {
      id: locationId,
      name: location.name,
      address: location.address,
      phoneNumber: location.phoneNumber,
      image: location.image
    };

  update(editedLocation)
    .then(() => history.push("/locations")
    )
  }

  useEffect(() => {
    getLocationById(locationId)
      .then(location => {
        setLocation(location);
        setIsLoading(false);
      });
  }, []);


  return (
    <>
    <div className="form-flex">
        <form>
          <div className="form__title">Edit Location</div>
          <fieldset>
            <div className="form-group">

              <label htmlFor="name">Location Name:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="name"
                value={location.name}
              />

              <label htmlFor="address">Address:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="address"
                value={location.address}
              />

              <label htmlFor="phoneNumber">Phone:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="phoneNumber"
                value={location.phoneNumber}
              />

            </div>

            <div className="form-btns">
              
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingLocation}
                className="form-btn">Submit</button>

              <button
                type="button"
                  onClick={() => history.push(`/locations`)}
                  className="form-btn">Cancel</button>

            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

