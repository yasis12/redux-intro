import logo from './logo.svg';
import './App.css';
//redux
import { useSelector, useDispatch } from 'react-redux';

function App() {

  //useSelector accepts a function that tells it what part of the store you want
  //here we return a whole store
  const reduxStore = useSelector(store => store)

  //"dispatch" is how we talk to redux from react
  const dispatch = useDispatch();

  //we want one thing
  const count = useSelector(store => store.count)

  return (
    <div className="App">
      <br></br>
      <h2>{JSON.stringify(reduxStore)}</h2>

      {/* dispatching an action when the button is clicked */}
      <button onClick={() => dispatch({ type: 'INCREASE'})}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREASE'})}>Decrease</button>

      {/* Rendering the count from our Store */}
      <p>count is: {count}</p>

    </div>
  );
}

export default App;
