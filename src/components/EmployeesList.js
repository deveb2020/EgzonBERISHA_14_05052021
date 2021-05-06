import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../style/EmployeesList.css'
import MaterialTable from 'material-table'



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