import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './snackdetails.css';

const API = process.env.REACT_APP_API_URL;
export default function SnackDetails() {
  const { id } = useParams();
  const [snack, setSnack] = useState({});
  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(res => setSnack(res.data));
  }, [id]);
  return (
    <div>
      <h1>{snack.name}</h1>
      <section className='section-1'>
        <aside>
          <img src={snack.url} alt='snack' />
        </aside>
        <aside className='nutritional-values'>
          <h2>Nutritional Values</h2>
          <ul>
            <li>Sugar: {snack.sugar}g </li>
            <li>Fiber: {snack.fiber}g </li>
            <li>Protein: {snack.protein}g </li>
          </ul>
        </aside>
      </section>
    </div>
  );
}
