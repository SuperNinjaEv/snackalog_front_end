import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export default function Snack(props) {

    let navigate = useNavigate();
    const [snack, setSnack] = useState({});

    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/snacks/${props.indSnack.id}`)
        .then((response) => {
            setSnack(response.data)
        }).catch((e) => {
            console.error("catch", e)
            navigate("*" || "/not-found")
        })
    }, []);

    return (
        <div className="snack-card" >
            <img style={{"height": 250, "width": 250}} src={snack.url} onClick={() => navigate(`/snacks/${snack.id}`)} />
            <p onClick={() => navigate(`/snacks/${snack.id}`)} > {snack.name} </p>
        </div>
    )
}

