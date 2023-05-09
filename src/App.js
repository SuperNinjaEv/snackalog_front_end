import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Snacks from './components/Snacks'
//import useState here since it will affect the list or grid view IN THE HOMEPAGE

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/snacks' element={<Snacks />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
