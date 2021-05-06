import React, { useState } from 'react'
import '../style/CreateEmployee.css'
import { useDispatch } from 'react-redux'
import states from './StatesData'
import departements from '../components/DepartementsData'
import { Link } from "react-router-dom";


/*
    Here we store the code for creating a new employee.

    APP LOGIC
    ----------
    Basically what i'am doing here is:
    I'am grabing the user input and I'am storing it into an individual useState hook,
    then onSubmit I'am creating a new object with all employee's information inside like firstName lastName etc,
    and I'am saving this employee object to Redux store using useDispatch hook
*/

const CreateEmployee = () => {

    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [startDate, setStartDate] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [departement, setDepartement] = useState("")



    function handleSubmit(e) {
        e.preventDefault()
        alert('Employee Created')
        const employe = { 
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDate,
            startDate: startDate,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            departement: departement
        }
        dispatch({ type: 'NEW_EMPLOYEE', employe: employe })    
    }

    return (
        <div className="Create-Employee-Page">
            <h1>HRnet</h1>
            <Link to="/employees" className="View-Employees-btn">View Current Employees</Link>

            <h2>Create Employee</h2>

            <form onSubmit={(e) => handleSubmit(e)}>
                <span>First name</span>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />

                <span>Last name</span>
                <input type="text" onChange={(e) => setLastName(e.target.value)}/>

                <span>Date of birth</span>
                <input type="date" onChange={(e) => setBirthDate(e.target.value)}/>

                <span>Start date</span>
                <input type="date" onChange={(e) => setStartDate(e.target.value)}/>

                <div className="Adresse">
                    <h3>Adresse</h3>

                    <span>Street</span>
                    <input type="text" onChange={(e) => setStreet(e.target.value)}/>

                    <span>City</span>
                    <input type="text" onChange={(e) => setCity(e.target.value)}/>

                    <span>State</span>
                    <select onChange={(e) => setState(e.target[e.target.selectedIndex].text)} > 
                        { states.map(state => <option value={state.abbreviation}>{state.name}</option>) } 
                    </select>
                    
                    <span>Zip code</span>
                    <input type="number" onChange={(e) => setZipCode(e.target.value)}/>
                </div>
                
                <span>Departament</span>
                <select onChange={(e) => setDepartement(e.target.value)}> 
                    { departements.map(dep => <option value={dep.name}> {dep.name} </option>)}
                </select>

                <button>Save</button>
            </form>
            
        </div>
    )
}

export default CreateEmployee
