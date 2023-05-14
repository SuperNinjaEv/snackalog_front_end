import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Snack(props) {

    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

    let navigate = useNavigate();

    const [theSnack, setTheSnack] = useState({});

    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/snacks/${props.snack.id}`)
            .then((response) => {
                setTheSnack(response.data)
                console.log(response.data);
            }).catch((e) => {
                console.error("catch", e)
                navigate("*" || "/not-found")
            })
    }, []);

    return (
        <div className="snack-card" >
            <img style={{ "height": 250, "width": 250 }} src={theSnack.url} onClick={() => navigate(`/snacks/${theSnack.id}`)} />
            <p onClick={() => navigate(`/snacks/${theSnack.id}`)} > {theSnack.name} </p>
        </div>

    )
}

