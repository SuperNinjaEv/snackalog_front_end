import './navbar.css'
import logo from '../assets/snackalog-icon-v1.svg'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav>
      <header>
       <img onClick={()=>navigate('/')} src={logo} alt='snackalog logo'/>
      </header>
      <aside>
        <button onClick={()=>navigate('/snacks/new')} className='add-btn'> ＋ Snack </button>
      </aside>
    </nav>
  )
}
