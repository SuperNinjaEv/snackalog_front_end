import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export default function Snack(props) {

    let navigate = useNavigate();
    const [snack, setSnack] = useState({});
    let { id } = useParams();

    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/snacks/${id}`)
        .then((response) => {
            setSnack(response.data)
        }).catch((e) => {
            console.error("catch", e)
            navigate("*" || "/not-found")
            //update to working route after testing
        })
    }, [id, navigate]);

    return (
        <>
        <div className="snack-card" key={props.id}>
            {/* make img and name links for clicanle to more details page  */}
            <img style={{"height": 250, "width": 250}} src={props.url} />
            <p> {props.name} </p>
        </div>
        </>
    )
}

//include button to go back to homepage of lists of snacks