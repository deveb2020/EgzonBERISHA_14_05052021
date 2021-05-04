import '../style/App.css';
import CreateEmployee from './CreateEmployee';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import EmployeesList from './EmployeesList';


// React Router used for navigation through pages

function App() {
    return (
        <div className="App"> 
            <Router> 
                <Switch>
                    <Route exact path="/">
                        <CreateEmployee />
                    </Route>
                    <Route exact path="/employees">
                        <EmployeesList />
                    </Route>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
