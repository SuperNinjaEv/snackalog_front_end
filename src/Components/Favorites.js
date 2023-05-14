import {useState, useEffect} from 'react'
import axios from "axios"
const API = process.env.REACT_APP_API_URL
export default function Favorites(){
    const [favorites, setFavorites] = useState([])
    useEffect(()=>{
        axios.get(`${API}/snacks?favorite=true`)
        .then(res=>setFavorites(res.data))
    }, [])

    return (
        <div className='favorite-snacks'>
            {favorites&&favorites.map(snack=>(
               <div className='snack-card' onClick={()=>navigate(`/snacks/${snack.id}`)} key={`favorite-${snack.id}`}>
               <p>{snack.name}</p>
               <img src={snack.url} alt={snack.name} />
             </div>
            ))
            }
        </div>
    )
}