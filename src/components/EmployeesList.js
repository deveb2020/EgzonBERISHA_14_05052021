import React from 'react'
import { Link } from "react-router-dom";
import '../style/EmployeesList.css'
import EmployeesTable from './EmployeesTable';


const EmployeesList = () => {

    const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

    return (
        <div className="Employees-list-page">

            <Link to='/' className="Go-back-btn">Create New Employee</Link>

            <h1 className="title">Current Employees</h1>

            <div className="select-and-searchbox-wrapper">
                <div className="select-options-wrapper">
                    <span>Show</span>
                    <select className="select-box"> { listOfNumbers.map(number => <option>{number}</option>) }</select>
                    <span>entries</span>
                </div>
                <div className="searchbox-wrapper">
                    <span>Search:</span>
                    <input type="text"/>
                </div>
            </div>

            <EmployeesTable />
            
        </div>
    )
}

export default EmployeesList
