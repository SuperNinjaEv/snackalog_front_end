import Snack from './Snack';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './snack.css';

export default function Snacks(props) {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${props.REACT_APP_API_URL}/snacks`)
      .then(response => setSnacks(response.data))
      .catch(e => console.error('catch', e));
  }, [props.REACT_APP_API_URL]);

  return (
    <>
      {snacks.map(snack => {
        if (
          props.selectedCategory.toLowerCase() === snack.category.toLowerCase()
        ) {
          return (
            <div key={snack.id} style={{ display: props.viewMode }}>
              <Snack snack={snack} view={props.viewMode} />
            </div>
          );
        } else if(props.selectedCategory === 'all-snacks'){ 
          return (
            <div key={snack.id} style={{ display: props.viewMode }}>
              <Snack snack={snack} view={props.viewMode} />
            </div>
          );
        }
      })}
    </>
  );
}
