
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export default function Snack(props) {

    let navigate = useNavigate();

    const [theSnack, setTheSnack] = useState({});

    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/snacks/${props.snack.id}`)
        .then((response) => {
            setTheSnack(response.data)
            //not sure what this data will be used for or if it will even be used at all honestly it 
            //the purpose might just be succesfull redirecting or sumn 
        }).catch((e) => {
            console.error("catch", e)
            navigate("*" || "/not-found")
        })
    }, []);

    return (
        <div className="snack-card" >
            <img style={{"height": 250, "width": 250}} src={props.snack.url} onClick={() => navigate(`/snacks/${props.snack.id}`)} />
            <p onClick={() => navigate(`/snacks/${props.snack.id}`)} > {props.snack.name} </p>
        </div>

    )
}

