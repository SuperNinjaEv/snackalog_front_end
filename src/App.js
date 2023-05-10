import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Snacks from './Components/Snacks';
//import useState here since it will affect the list or grid view IN THE HOMEPAGE...perhaps 
//might need to add lazyloading for faster website data display

function App() {
  return (
    <div className="App">
      <Snacks />
    </div>
  );
}

export default App;
