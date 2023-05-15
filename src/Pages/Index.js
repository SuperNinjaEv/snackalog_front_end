import Snacks from '../Components/Snacks';
import Categories from '../Components/Categories';
import { useState } from 'react';

function Index() {

   const [viewMode, setViewMode] = useState("inline-grid");

   const [backgroundGridColor, setBackgroundGridColor] = useState("darkgrey");

   const [backgroundListColor, setBackgroundListColor] = useState("white");

   const [selectedCategory, setSelectedCategory] = useState('all-snacks');

   const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  function handleViewMode() {

    if (viewMode === "inline-grid") {

      setViewMode("grid");
      setBackgroundGridColor("white");
      setBackgroundListColor("darkgrey");
      console.log("check")
    }

    else if (viewMode === "grid") {

      setViewMode("inline-grid");
      setBackgroundGridColor("darkgrey");
      setBackgroundListColor("white");
      console.log("check");
    } 
  }

  return (
    <div className="Index">
      <button className='viewMode-btn' style={{float: "left", backgroundColor: "white", border: "none"}} onClick={event => handleViewMode(event)}> 
      <svg xmlns="http://www.w3.org/2000/svg" name='grid' width="16" height="16" viewBox="0 0 16 16" style={{float: "left", backgroundColor: backgroundGridColor}}>
        <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" name='list' width="16" height="16" viewBox="0 0 16 16" style={{float: "left", backgroundColor: backgroundListColor}}>
        <path d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
        <path d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
      </svg>
      </button>
      <h2>Snacks-A-Hoy!</h2>
      <Categories setSelectedCategory={setSelectedCategory} />
      <br />
      <Snacks selectedCategory={selectedCategory} REACT_APP_API_URL={REACT_APP_API_URL} viewMode={viewMode} />
    </div>
  );
}

export default Index;
