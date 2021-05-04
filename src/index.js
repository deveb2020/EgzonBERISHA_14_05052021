import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import rootReducers from './components/Reducers'
import { createStore } from 'redux'

// REDUX STORE SETED

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);


