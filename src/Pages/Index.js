import Snacks from '../Components/Snacks';
import Categories from '../Components/Categories';
import { useState } from 'react';
import ReactSwitch from 'react-switch';

function Index() {

  const [viewMode, setViewMode] = useState("inline-grid");

  const [gridOrList, setGridorList] = useState("grid view")

  function handleViewMode() {

    if (viewMode === "inline-grid") {

      setViewMode("grid");
      setGridorList("list");
    }

    else if (viewMode === "grid") {

      setViewMode("inline-grid");
      setGridorList("Grid");
    } 
  }

  const [selectedCategory, setSelectedCategory] = useState('all-snacks');

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  return (
    <div className="Index">
      <h2>Snacks-A-Hoy!</h2>
      <Categories setSelectedCategory={setSelectedCategory} setView={setView} view={view} />
      <br />
      <Snacks selectedCategory={selectedCategory} REACT_APP_API_URL={REACT_APP_API_URL} />
    </div>
  );
}

export default Index;
