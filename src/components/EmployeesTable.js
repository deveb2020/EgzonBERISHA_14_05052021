import { useSelector } from 'react-redux'
import '../style/EmployeesList.css'

const EmployeesTable = () => {

    const employees = useSelector(state => state.employees)
    const firstName = []
    const lastName = []
    const birthDate = []
    const startDate = []
    const street = []
    const city = []
    const state = []
    const zipCode = []
    const departement = []

    employees.map(emp => 
            firstName.push(emp.firstName)      
        ||  lastName.push(emp.lastName)     
        ||  birthDate.push(emp.birthDate)   
        ||  startDate.push(emp.startDate)   
        ||  street.push(emp.street)         
        ||  city.push(emp.city)             
        ||  state.push(emp.state)           
        ||  zipCode.push(emp.zipCode)        
        ||  departement.push(emp.departement)    
    )

    return (
        <div className="Employees-table">
            <table>
                <tbody>
                    <tr className="table-row">
                        <th className="table-data">First Name <span>X</span></th>
                        <th className="table-data">Last Name <span>X</span></th>
                        <th className="table-data">Date of Birth <span>X</span></th>
                        <th className="table-data">Start Date <span>X</span></th>
                        <th className="table-data">Street <span>X</span></th>
                        <th className="table-data">City <span>X</span></th>
                        <th className="table-data">State <span>X</span></th>
                        <th className="table-data">Zip Code <span>X</span></th>
                        <th className="table-data">Departement <span>X</span></th>
                    </tr>
                    { employees.map(employee =>
                        <tr className="table-row"> 
                            <td className="table-data">{employee.firstName}</td> 
                            <td className="table-data">{employee.lastName}</td> 
                            <td className="table-data">{employee.birthDate}</td> 
                            <td className="table-data">{employee.startDate}</td> 
                            <td className="table-data">{employee.street}</td> 
                            <td className="table-data">{employee.city}</td> 
                            <td className="table-data">{employee.state}</td> 
                            <td className="table-data">{employee.zipCode}</td> 
                            <td className="table-data">{employee.departement}</td> 
                        </tr>
                    )}
                </tbody>
            </table>
            
            <div className="bottom-table">
                <div className="text-wrapper">
                    <span>Showing {employees.length} entries </span> 
                </div>
                <div className="buttons-wrapper">
                    <button>Previous</button>
                    <span className="curent-number">1</span>
                    <button>Next</button>
                </div>
            </div>

        </div>
    )
}

export default EmployeesTable
