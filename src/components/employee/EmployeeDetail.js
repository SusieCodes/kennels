import React, { useState, useEffect } from 'react';
import { getEmployeeById } from '../../modules/EmployeeManager';
import './Employee.css';
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({ name: "", address: "", phoneNumber: "", location: "" });

  const {employeeId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
          address: employee.address,
          phoneNumber: employee.phoneNumber,
          location: employee.location.name
        });
      });
  }, [employeeId]);

  return (
    <div className="employee__info">

      <div className="employee__info--name">
        {employee.name}
      </div>
        
      <div className="employee__info--address"><strong>Address: </strong> {employee.address}
      </div>

      <div className="employee__info--phone"><strong>Cell Phone: </strong> {employee.phoneNumber}
      </div>

      <div className="employee__info--location"> <strong>Location: </strong> {employee.location.name}</div>

    </div>
  );
}