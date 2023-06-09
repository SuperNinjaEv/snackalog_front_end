import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import gluten from '../assets/glutenfree.svg';
import vegan from '../assets/vegan.svg';
import veggie from '../assets/vegetarian.svg';

export default function Snack(props) {
  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  let navigate = useNavigate();

  const [theSnack, setTheSnack] = useState({});

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_URL}/snacks/${props.snack.id}`)
      .then(response => {
        setTheSnack(response.data);
      })
      .catch(e => {
        console.error('catch', e);
        navigate('*' || '/not-found');
      });
  }, [navigate, props.snack.id, REACT_APP_API_URL]);

  return (
    <div
      onClick={() => navigate(`/snacks/${theSnack.id}`)}
      className={props.view==='grid'?'snack-card-list':'snack-card-index'}
    >
      <img
        className={props.view==='grid'?'snack-card-list-img':'snack-card-index-img'}
        src={theSnack.url} alt={theSnack.name}
        onClick={() => navigate(`/snacks/${theSnack.id}`)}
      />
      <aside>
        {props.view==='grid' ?<h2> {theSnack.name}</h2> :<p className='snack-index-name'> {theSnack.name} </p>}
        <section className='symbols-index'>
          {theSnack.is_glutenfree && (
            <img src={gluten} alt='gluten free' className={props.view==='grid'?'list-symbol':'symbol'} />
          )}
          {theSnack.is_vegan && (
            <img src={vegan} alt='vegan friendly' className={props.view==='grid'?'list-symbol':'symbol'} />
          )}
          {theSnack.is_vegetarian && (
            <img src={veggie} alt='vegetarian friendly' className={props.view==='grid'?'list-symbol':'symbol'} />
          )}
        </section>
      </aside>
    </div>
  );
}
