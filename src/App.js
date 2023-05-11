import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {

  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="/*" element={<FourOFour />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
