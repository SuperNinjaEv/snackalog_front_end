import Snacks from "../Components/Snacks";
import Categories from '../Components/Categories';
import { useState } from 'react';
import ReactSwitch from 'react-switch';

function Index() {

  //const [viewMode, setViewMode] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("all-snacks");

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  return (
    <div className="Index">
      <Categories setSelectedCategory={setSelectedCategory} />
      <br />
      <h2>Snacks-A-Hoy!</h2>
      <br />
      <Snacks selectedCategory={selectedCategory} REACT_APP_API_URL={REACT_APP_API_URL} />
    </div>
  );
}

export default Index;
