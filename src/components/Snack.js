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
        <div className="snack-card" key={props.indSnack.id}>
            {/* make img and name links for clicackle to more details page  */}
            <img src={props.indSnack.url} />
            <p> {props.indSnack.name} </p>
        </div>
    )
}

//include button to go back to homepage of lists of snacks

// let name = indSnack.name;
// let category = indSnack.category;
// let fiber = indSnack.fiber;
// let id = indSnack.id;
// let favorite = indSnack.is_favorite;
// let gluten = indSnack.is_glutenfree;
// let vegan = indSnack.is_vegan;
// let vegetarian = indSnack.is_vegetarian;
// let protein = indSnack.protein;
// let sugar = indSnack.sugar;
// let url = indSnack.url