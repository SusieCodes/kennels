import React, { useState, useEffect } from "react"
import { update, getEmployeeById } from "../../modules/EmployeeManager"
import { useParams, useHistory } from "react-router-dom"
import { getAllLocations } from "../../modules/LocationManager"
import "../../components/Forms.css"


export const EmployeeEditForm = () => {
  const [employee, setEmployee] = useState({ name: "", breed: "", locationId: 1, customerId: 1, image: "" });
  const [isLoading, setIsLoading] = useState(false);

	const [locations, setLocations] = useState([]);

  const {employeeId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: employeeId,
      name: employee.name,
      breed: employee.breed,
      locationId: employee.locationId,
      customerId: employee.customerId,
      image: employee.image
    };

  update(editedEmployee)
    .then(() => history.push("/employees")
    )
  }

  useEffect(() => {
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee);
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

  return (
    <>
    <div className="form-flex">
        <form>
          <div className="form__title">Edit Employee</div>
          <fieldset>
            <div className="form-group">

              <label htmlFor="name">Employee Name:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="name"
                value={employee.name}
              />

              <label htmlFor="address">Address:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="address"
                value={employee.address}
              />

              <label htmlFor="phoneNumber">Phone:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="phoneNumber"
                value={employee.phoneNumber}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="text"
                required
                className="form-control-edit"
                onChange={handleFieldChange}
                id="email"
                value={employee.email}
              />
 
          <div className="form-group">
            <label htmlFor="location">Location: </label>
            <select value={employee.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control-edit" >
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>

            </div>

            <div className="form-btns">
              
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingEmployee}
                className="form-btn">Submit</button>

              <button
                type="button"
                  onClick={() => history.push(`/employees`)}
                  className="form-btn">Cancel</button>

            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

