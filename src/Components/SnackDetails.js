import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import gluten from '../assets/glutenfree.svg';
import vegan from '../assets/vegan.svg';
import veggie from '../assets/vegetarian.svg';
import heart from '../assets/heart.svg';
import './snackdetails.css';

const API = process.env.REACT_APP_API_URL;
export default function SnackDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [snack, setSnack] = useState({});
  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(res => setSnack(res.data));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`${API}/snacks/${id}`).then(_ => navigate('/snacks'));
  };
  return (
    <div>
      <button className='go-back-btn' onClick={() => navigate(-1)}> ⬅ All Snacks </button>
      <header className='snack-details-header'>
        {snack.is_favorite && (
          <img src={heart} alt='favorite snack' className='symbol' />
        )}
        <h1>{snack.name}</h1>
        {snack.is_favorite && (
          <img src={heart} alt='favorite snack' className='symbol' />
        )}
      </header>
      <section className='section-1'>
        <img src={snack.url} alt='snack' className='snack-img' />
        <aside className='nutritional-values'>
          <h2>Nutritional Values</h2>
          <ul>
            <li>Sugar: {snack.sugar}g </li>
            <li>Fiber: {snack.fiber}g </li>
            <li>Protein: {snack.protein}g </li>
          </ul>
          <aside className='symbols'>
            {snack.is_glutenfree && (
              <img src={gluten} alt='gluten free' className='symbol' />
            )}
            {snack.is_vegan && (
              <img src={vegan} alt='vegan friendly' className='symbol' />
            )}
            {snack.is_vegetarian && (
              <img src={veggie} alt='vegetarian friendly' className='symbol' />
            )}
          </aside>
        </aside>
      </section>
      <section className='buttons'>
        <button className='delete-btn' onClick={handleDelete}>
          DELETE
        </button>
        <button
          className='edit-btn'
          onClick={() => navigate(`/snacks/${snack.id}/edit`)}
        >
          EDIT
        </button>
      </section>
    </div>
  );
}
