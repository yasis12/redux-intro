import logo from './logo.svg';
import './App.css';
//redux
import { useSelector } from 'react-redux';

function App() {

  //useSelector accepts a function that tells it what part of the store you want
  //here we return a whole store
  const reduxStore = useSelector(store => store)

  //we want one thing
  const count = useSelector(store => store.count)

  return (
    <div className="App">
      <br></br>
      <h2>{JSON.stringify(reduxStore)}</h2>
      <p>count is: {count}</p>

    </div>
  );
}

export default App;
