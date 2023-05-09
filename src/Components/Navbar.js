import './navbar.css'
import logo from '../assets/snackalog-icon-v1.svg'
export default function Navbar() {
  return (
    <nav>
      <header>
       <img src={logo} alt='snackalog logo'/>
      </header>
      <aside>
        <button className='add-btn'> ＋ Snack </button>
      </aside>
    </nav>
  )
}
