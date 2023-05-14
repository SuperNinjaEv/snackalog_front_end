import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from './Modal';
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
  const [modal, setModal] = useState(false);
  //const [snackNote, setSnackNote] = useState("");
  useEffect(() => {
    axios.get(`${API}/snacks/${id}`)
      .then(res => {
        if (res.data.name === 'QueryResultError') {
          console.log(res.data)
          navigate('*')
        } else {
          setSnack(res.data)
        }
      })
      .catch((err) => {
        console.error(err);
        navigate('*');
      });
  }, [id]);

  const handleClose = () => {
    setModal(false);
  };
  const handleDelete = () => {
    setModal(true);
  };
  const confirmDelete = () => {
    axios.delete(`${API}/snacks/${id}`).then(_ => navigate('/snacks'));
  };

  // function handleNotes(event) {
  //   event.preventDefault();

  //   setSnackNote(event.target.note);
    
  // }

  return (
    <div>
      {modal && (
        <Modal
          handleDelete={confirmDelete}
          snack={snack}
          handleClose={handleClose}
        />
      )}
      <button className='go-back-btn' onClick={() => navigate('/snacks')}>
        {' '}
        ⬅ All Snacks{' '}
      </button>
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
        {/* <section className='snack-notes'>
        <form>
            <label> Snack Notes </label>
            <input type='text' onKeyUp={event => handleNotes(event)} name='note'/>
            <button type='submit'> Add Note </button>
        </form>
        </section> */}
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

