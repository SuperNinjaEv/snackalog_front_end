import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
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
      <button className='go-back-btn' onClick={() => navigate(-1)}> Go Back To All Snacks </button>
      <h1>{snack.name}</h1>
      <section className='section-1'>
        <img src={snack.url} alt='snack' className='snack-img' />
        <aside className='nutritional-values'>
          <h2>Nutritional Values</h2>
          <ul>
            <li>Sugar: {snack.sugar}g </li>
            <li>Fiber: {snack.fiber}g </li>
            <li>Protein: {snack.protein}g </li>
          </ul>
        </aside>
      </section>
      <button onClick={() => navigate(`/snacks/${snack.id}/edit`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
