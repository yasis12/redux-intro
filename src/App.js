import logo from './logo.svg';
import './App.css';
//redux
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';

function App() {

  //useSelector accepts a function that tells it what part of the store you want
  //here we return a whole store
  const reduxStore = useSelector(store => store)
  const [newElement, setNewElement] = useState('')
  //"dispatch" is how we talk to redux from react
  const dispatch = useDispatch();

  //we want one thing from the store
  const count = useSelector(store => store.count)

  // this is for the input 
  const elementList = useSelector(store => store.elementList);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tell redux that we want to add the new Element
    dispatch({
      type:'ADD_ELEMENT',
      //Pass in the element name, taht we're tracking in state
      payload: newElement 
    })
    // clear form field
    setNewElement('');
  }

  return (
    <div className="App">
      <br></br>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Element Name' value={newElement} onChange={event => setNewElement(event.target.value)} />
        <button type="submit">Add!</button>
      </form>

      <ul>
        {elementList.map((element, i) =>(
          <li key ={i}>{element}</li>
        ))}
      </ul>





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
