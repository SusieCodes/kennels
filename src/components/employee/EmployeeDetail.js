import React, { useState, useEffect } from 'react';
import { getEmployeeById, deleteEmployee } from '../../modules/EmployeeManager';
import './Employee.css';
import "../../components/Kennel.css";
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({ name: "", address: "", phoneNumber: "", location: "", image: "" });
  const [isLoading, setIsLoading] = useState(true);


  const {employeeId} = useParams();
  const history = useHistory();

  const handleDelete = () => {
    console.log("handleDelete invoked")
    //invokes the delete function in Employee Manager and re-directs to employee list.
    setIsLoading(true);
    deleteEmployee(employeeId).then(() =>
      history.push("/employees")
    );
  };

  const goBack = () => { history.push("/employees")}; //takes user back to list

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
      .then(employee => {
        console.log("employee obj is: ", employee)
        setEmployee({
          name: employee.name,
          address: employee.address,
          phoneNumber: employee.phoneNumber,
          location: employee.location.name,
          image: employee.image
        });
        setIsLoading(false);
      });
  }, [employeeId]);

  return (

    <div className="details">

      <div className="details__header">

        <picture>
        {employee.image !== "" ?
        <img src={require(`../../images/${employee.image}`).default} alt={employee.name} className="details__header--photo"/> 
        : <p>There isn't an image.</p>}
        </picture>
      </div>

      <div className="employee__info">

        <div className="employee__info--name">
          {employee.name}
        </div>
          
        <div className="employee__info--address"><strong>Address: </strong> {employee.address}
        </div>

        <div className="employee__info--phone"><strong>Cell Phone: </strong> {employee.phoneNumber}
        </div>

        <div className="employee__info--location"> <strong>Location: </strong> {employee.location}</div>

      </div>

      <div className="btn-flex">
        <button className="details__btn" type="button" disabled={isLoading} onClick={goBack}>Back To List</button>
        <button className="details__btn" type="button" disabled={isLoading} onClick={handleDelete}>Remove</button>
      </div>

    </div>
  );
}