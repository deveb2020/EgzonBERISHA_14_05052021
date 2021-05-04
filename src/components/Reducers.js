const initialState = { employees: [] }


function rootReducers(state = initialState, action) {
    switch(action.type) {
        case 'NEW_EMPLOYEE':
            return { 
                    employees: [...state.employees, action.employe ]
            }
        default:
            return state
    }
}

export default rootReducers