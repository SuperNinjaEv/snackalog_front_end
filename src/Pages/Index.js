import Snacks from "../Components/Snacks";
import axios from "axios";
import Categories from '../Components/Categories';
import { useState, useEffect } from 'react';

function Index() {

  const [snacks, setSnacks] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all-snacks");

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
      axios.get(`${REACT_APP_API_URL}/snacks`)
          .then((response) => setSnacks(response.data))
          .catch((e) => console.error("catch", e))
  }, []);

  return (
    <div className="Index">
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSnacks={setSnacks} snacks={snacks} />
      <h2>Snacks-A-Hoy!</h2>
      <Snacks selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} snacks={snacks} REACT_APP_API_URL={REACT_APP_API_URL} />
    </div>
  );
}

export default Index;
