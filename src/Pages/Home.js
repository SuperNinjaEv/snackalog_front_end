import { useNavigate } from 'react-router-dom';
import NewlyAdded from '../Components/NewlyAdded';
import Favorites from '../Components/Favorites';
import { useEffect } from 'react';
import Categories from '../Components/Categories';
import './home.css';
export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section className='home-grid'>
        <div className='favorites-home'>
            <h2>Favorites</h2>
          <Favorites />
        </div>
        <div></div>
        <div className='newly-added-home'>
            <h2>Newly Added</h2>
          <NewlyAdded />
        </div>
      </section>
      <button onClick={() => navigate('/snacks')}>See All Snacks</button>
    </div>
  );
}
