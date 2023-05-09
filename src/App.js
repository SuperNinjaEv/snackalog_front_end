import './App.css';
import { Route, Routes } from 'react-router-dom';
import Snacks from './components/Snacks';
//import useState here since it will affect the list or grid view IN THE HOMEPAGE 

function App() {
  return (
    <div className="App">
      <Snacks />
    </div>
  );
}

export default App;
