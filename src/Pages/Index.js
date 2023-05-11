import Snacks from "../Components/Snacks";
import Categories from '../Components/Categories';
import { useState, useEffect } from 'react';

function Index() {

  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="Index">
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <h2>Snacks-A-Hoy!</h2>
      <Snacks selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </div>
  );
}

export default Index;
