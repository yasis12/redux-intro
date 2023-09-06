import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


// old way let [count, setCount] = useState(0);
//reducer

const count = (state = 0, action) => {
  console.log('hi i\'m a reducer in count');
  // it is a dev standard to have the type in all CAPS
  if (action.type === 'INCREASE') {
    console.log('you clicked increase');
    // The next value of 'reduxStore.count' will be 1 more than previous value
    return state + 1
  } else if (action.type === 'DECREASE') {
    // The next value of 'reduxStore.count' will be 1 less than previous value
    return state - 1
  }
  //if action.type is anything else, just return the last known state
  return state
};

// New reducer
const elementList = (state = [], action) => {
  console.log('hi i\'m a reducer in element list');

  return state
};

//store
const storeInstance = createStore(

  combineReducers (
  { 
    count, 
    elementList
  }
  ),
  applyMiddleware(
    logger
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
