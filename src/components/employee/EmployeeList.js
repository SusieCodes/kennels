import React, { useState, useEffect } from 'react';
import { EmployeeCard } from './EmployeeCard';
import { getAllEmployees } from '../../modules/EmployeeManager';

export const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the function to update state
    return getAllEmployees().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  // got the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  console.log("Employees is: ", employees)

  // Finally we use .map() to "loop over" the array to show a list of cards
  return (
    <div className="container-cards">
      {employees.map(employee => <EmployeeCard />)}
    </div>
  );
};



