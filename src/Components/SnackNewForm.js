import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//import { Form } from "react-bootstrap";
import './snackForm.css';
// import "bootstrap/dist/css/bootstrap.min.css";

const API = process.env.REACT_APP_API_URL;

export default function SnackNewForm() {
  let navigate = useNavigate();

  const addSnack = newSnack => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        error => console.error(error)
      )
      .catch(c => console.warn('catch', c));
  };

  const [snack, setSnack] = useState({
    name: '',
    category: '',
    url: '',
    sugar: 0,
    protein: 0,
    fiber: 0,
    is_vegan: false,
    is_vegetarian: false,
    is_glutenfree: false,
    is_favorite: false,
  });

  // useEffect(() => {
  //   console.log(snack);
  // }, [snack])

  const handleTextChange = event => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  // const handleSelect = (event) => {}

  const handleCheckboxChange = event => {
    // console.log(event.target.id, event.target.checked)
    setSnack({ ...snack, [event.target.id]: event.target.checked });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addSnack(snack);
  };
  return (
    <div className='New'>
      <form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            value={snack.name}
            type='text'
            onChange={handleTextChange}
            placeholder='Name of Snack'
            required
          />
        </div>

        <div>
          <label htmlFor='url'>Snack Image URL:</label>
          <input
            id='url'
            type='text'
            pattern='http[s]*://.+'
            // required
            value={snack.url}
            placeholder='http://'
            onChange={handleTextChange}
          />
        </div>

        <div className='nutritional'>
          <label htmlFor='sugar'>Sugar:</label>
          <input
            id='sugar'
            value={snack.sugar}
            type='text'
            pattern='^\d*(\.\d{0,2})?$'
            onChange={handleTextChange}
            placeholder='Amount of Sugar'
          />
          <label htmlFor='sugar'>Protein:</label>
          <input
            id='protein'
            value={snack.protein}
            type='text'
            pattern='^\d*(\.\d{0,2})?$'
            onChange={handleTextChange}
            placeholder='Amount of Protein'
          />
          <label htmlFor='sugar'>Fiber:</label>
          <input
            id='fiber'
            value={snack.fiber}
            type='text'
            pattern='^\d*(\.\d{0,2})?$'
            onChange={handleTextChange}
            placeholder='Amount of Fiber'
          />
        </div>
        <br />

        <div>
          <label htmlFor='category'>Category:</label>
          <select
            name='category'
            id='category'
            value={snack.category}
            onChange={handleTextChange}
          >
            <option>Please Select a Category...</option>
            <option value='Fruits/Veggies'>Fruits/Veggies</option>
            <option value='Proteins'>Proteins</option>
            <option value='Dairy'>Dairy</option>
            <option value='Grains'>Grains</option>
            <option value='Sweet/Savory'>Sweet/Savory</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <br />

        <div className='is'>
          <label htmlFor='is_vegan'>Vegan:</label>
          <input
            id='is_vegan'
            type='checkbox'
            onChange={handleCheckboxChange}
            checked={snack.is_vegan}
          />
          <label htmlFor='is_vegetarian'>Vegetarian:</label>
          <input
            id='is_vegetarian'
            type='checkbox'
            onChange={handleCheckboxChange}
            checked={snack.is_vegetarian}
          />
          <label htmlFor='is_glutenfree'>Gluten Free:</label>
          <input
            id='is_glutenfree'
            type='checkbox'
            onChange={handleCheckboxChange}
            checked={snack.is_glutenfree}
          />
          <label htmlFor='is_favorite'>Favorite:</label>
          <input
            id='is_favorite'
            type='checkbox'
            onChange={handleCheckboxChange}
            checked={snack.is_favorite}
          />
        </div>

        <br />

        <input className="raise" type="submit" />

      </form>
    </div>
  );
}
