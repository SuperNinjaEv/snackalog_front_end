import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
const API = process.env.REACT_APP_API_URL
export default function SnackDetails() {
  const { id } = useParams()
    const [snack, setSnack] = useState({})
    useEffect(()=>{
      axios.get(`${API}/snacks/${id}`)
      .then(res=>console.log(res.data))
    })
  return (
    <div>
      <h2>bam</h2>
    </div>
  )
}
