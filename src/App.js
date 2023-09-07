import logo from './logo.svg';
import './App.css';
//redux
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import ElementForm from './Components/ElementForm/elementForm';
import ElementList from './Components/ElementList/elementList';


function App() {

  //useSelector accepts a function that tells it what part of the store you want
  //here we return a whole store
  const reduxStore = useSelector(store => store)

  //"dispatch" is how we talk to redux from react
  const dispatch = useDispatch();

  //we want one thing from the store
  const count = useSelector(store => store.count)

  // // this is for the input 
  // const elementList = useSelector(store => store.elementList);

  return (
    <div className="App">
      <br></br>

        <ElementForm />
        <ElementList />

      {/* dispatching an action when the button is clicked */}
      <button onClick={() => dispatch({ type: 'INCREASE'})}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREASE'})}>Decrease</button>
      <button onClick={() => dispatch({ type: 'ADD_ELEMENT', payload: 'hydrogen'})}>Add Element</button>
      {/* Rendering the count from our Store */}
      <p>count is: {count}</p>

    </div>
  );
}

export default App;
