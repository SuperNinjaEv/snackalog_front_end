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
               snacks.map((snack) => {

                return (
                    //input Snack component here 
                    <div key={snack.id}>
                    <Snack snack={snack} />
                    {/* <p> {snack.name} </p> */}
                    </div> 
                )
            })
        }
        </>
    )
}
