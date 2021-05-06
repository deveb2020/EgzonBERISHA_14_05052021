import '../style/App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import React from 'react';

const CreateEmployee = React.lazy(() => import('./CreateEmployee'))
const EmployeesList = React.lazy(() => import('./EmployeesList'))


// React Router used for navigation through pages

function App() {
    return (
            <div className="App"> 
                <Router> 
                    <Switch>
                        <React.Suspense  fallback={<p>Loading...</p> }>
                            <Route exact path="/">
                                <CreateEmployee />
                            </Route>
                            <Route exact path="/employees">
                                <EmployeesList />
                            </Route>
                        </React.Suspense>
                    </Switch>
                </Router>
            </div>
    );
}

export default App;
