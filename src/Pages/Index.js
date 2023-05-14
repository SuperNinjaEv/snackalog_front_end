import Snacks from '../Components/Snacks';
import Categories from '../Components/Categories';
import { useState } from 'react';
import './index.css';

function Index() {

   const [viewMode, setViewMode] = useState("inline-grid");

  const [gridOrList, setGridorList] = useState("grid view")

  function handleViewMode() {

    if (viewMode === "inline-grid") {

      setViewMode("grid");
      setGridorList("List");
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
      <button onClick={handleViewMode} className='viewMode-btn' style={{float: "left"}}> {gridOrList} </button>
      <h2>Snacks-A-Hoy!</h2>
      <Categories setSelectedCategory={setSelectedCategory} />
      <br />
      <Snacks selectedCategory={selectedCategory} REACT_APP_API_URL={REACT_APP_API_URL} viewMode={viewMode} />
    </div>
  );
}

export default Index;
