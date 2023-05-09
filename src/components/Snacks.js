import axios from "axios";
import Snack from "./Snack";
import { useState, useEffect } from "react";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export default function Snacks() {

    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/snacks`)
            .then((response) => setSnacks(response.data))
            .catch((e) => console.error("catch", e))
    }, []);

    return (
        <>
            {
                snacks.map((indSnack) => {

                    let name = indSnack.name;
                    let category = indSnack.category;
                    let fiber = indSnack.fiber;
                    let id = indSnack.id;
                    let favorite = indSnack.is_favorite;
                    let gluten = indSnack.is_glutenfree;
                    let vegan = indSnack.is_vegan;
                    let vegetarian = indSnack.is_vegetarian;
                    let protein = indSnack.protein;
                    let sugar = indSnack.sugar;
                    let url = indSnack.url

                    return (
                        <>
                            <br />
                            <Snack name={name} category={category} fiber={fiber} id={id} favorite={favorite} gluten={gluten} vegan={vegan}
                                vegetarian={vegetarian} protein={protein} sugar={sugar} url={url} />
                        </>
                    )
                })
            }
        </>
    )
}
