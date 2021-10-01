import React, { useState, useEffect } from 'react';
import { EmployeeCard } from './EmployeeCard';
import { getAllEmployees, deleteEmployee } from '../../modules/EmployeeManager';

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

  const handleDeleteEmployee = id => {
    deleteEmployee(id)
    .then(() => getAllEmployees().then(setEmployees));
  };

  // got the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  console.log("Employees is: ", employees)

  // Finally we use .map() to "loop over" the array to show a list of cards
  return (

    <div className="section">

      <div className="section__header">
      EMPLOYEES
      </div> 

      <div className="container-cards">
        {employees.map(employee => 
        <EmployeeCard 
        key={employee.id} 
        employee={employee}
        handleDeleteAnimal={handleDeleteEmployee} />)}
        />)}
      </div>

  </div>
  );
};