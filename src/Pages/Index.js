import Snacks from '../Components/Snacks';
import Categories from '../Components/Categories';
import { useState } from 'react';

function Index() {
  const [view, setView] = useState();

  const [selectedCategory, setSelectedCategory] = useState('all-snacks');

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  return (
    <div className='Index'>
      <h2>Snacks-A-Hoy!</h2>
      <Categories
        setSelectedCategory={setSelectedCategory}
        setView={setView}
        view={view}
      />
      <br />
      <div className='snacks-index'>
        <Snacks
          selectedCategory={selectedCategory}
          REACT_APP_API_URL={REACT_APP_API_URL}
        />
      </div>
    </div>
  );
}

export default Index;
