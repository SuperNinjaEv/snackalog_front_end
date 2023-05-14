import Snacks from "../Components/Snacks";
import Categories from '../Components/Categories';
import { useState } from 'react';

function Index() {

  const [view, setView] = useState();

  const [selectedCategory, setSelectedCategory] = useState("all-snacks");

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  return (
    <div className="Index">
      <Categories setSelectedCategory={setSelectedCategory} setView={setView} view={view} />
      <h2>Snacks-A-Hoy!</h2>
      <br />
      <Snacks selectedCategory={selectedCategory} REACT_APP_API_URL={REACT_APP_API_URL} />
    </div>
  );
}

export default Index;
