import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../style/EmployeesList.css'
import MaterialTable from 'material-table'

/*
    Here we store the code for the list of all the employees.

    APP LOGIC
    ----------
    Basically what i'am doing here is:
    Here I'am using a library called Material Table to create my dynamic table,
    and to populate my Table with the data grabed from the create new employee page wich is stored into Redux Store,
    I'am using useSelector hook to grab the data from the Redux Store and push them to the Table, also I'am using
    useEffect hook to populate the Table only on the first component render
*/

function EmployeesList() {

  const [data, setData] = useState([])
  const employees = useSelector(state => state.employees)

  useEffect(() => {
    setData(employees)
  },[employees])


  const columns = [
    { title: "First Name", field: 'firstName'},
    { title: "Last Name", field: "lastName" },
    { title: "Start Date", field: "startDate" },
    { title: "Departement", field: "departement" },
    { title: "Date of Birth", field: "birthDate" },
    { title: "Street", field: 'street' },
    { title: "City", field: 'city' },
    { title: "State", field: 'state' },
    { title: "Zip Code", field: 'zipCode' },
  ]


  return (
      <div className="Employees-List-Page">
        <Link to="/" className="create-new-employee-btn">Create a new employee</Link>
        <h1 align="center">React-App</h1>
        <h4 align='center'>Employees Table</h4>
        <MaterialTable
          title="Employees"
          data={data}
          columns={columns}
        />
      </div>
  );
}

export default EmployeesList;