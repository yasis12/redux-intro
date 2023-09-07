import { useDispatch } from 'react-redux';
import {useState} from 'react';

function ElementForm () {
    const dispatch = useDispatch();
    const [newElement, setNewElement] = useState('')
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
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Element Name' value={newElement} onChange={event => setNewElement(event.target.value)} />
        <button type="submit">Add!</button>
      </form>
    )
}

export default ElementForm;