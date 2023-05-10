import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()
    return(
        <div>
            <h1>Home</h1>
            <button onClick={()=>navigate('/snacks')}>See All Snacks</button>
        </div>
    )
};
