import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import Categories from "../Components/Categories";

export default function Home() {

    const navigate = useNavigate();

    return(
        <div> 
            <h1>Snackalog Log</h1>
            <button onClick={()=>navigate('/snacks')}>See All Snacks</button>
        </div>
    )
};
