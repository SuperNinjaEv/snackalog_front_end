import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;
export default function NewlyAdded() {
  const navigate = useNavigate();
  const dateArr = new Date().toString().split(' ');
  const [snacks, setSnacks] = useState([]);
  // const [newSnacks, setNewSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then(res =>{
          const snackies = res.data.filter(
            snack =>
// console.log(new Date(snack.created_at).toString().split(' '))
            
              new Date(snack.created_at).toString().split(' ')[1] === dateArr[1] &&
              new Date(snack.created_at).toString().split(' ')[3] === dateArr[3]
          )
          setSnacks(snackies)
          })
  }, [dateArr]);

  return (
    <div className='newly-added-snacks'>
      {snacks.length > 0 &&
        snacks.map(snack => (
          <div
            className='snack-card'
            onClick={() => navigate(`/snacks/${snack.id}`)}
            key={`snack-${snack.id}`}
          >
            <p>{snack.name}</p>
            <img src={snack.url} alt={snack.name} />
          </div>
        ))}
    </div>
  );
}
