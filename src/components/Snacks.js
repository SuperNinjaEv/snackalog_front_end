import Snack from "./Snack";
import axios from "axios";
import { useState, useEffect } from "react";
import './snack.css';

export default function Snacks(props) {

    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios.get(`${props.REACT_APP_API_URL}/snacks`)
            .then((response) => setSnacks(response.data))
            .catch((e) => console.error("catch", e))
    }, []);

    return (
        <>
        {
               snacks.map((snack) => {

                if (props.selectedCategory === "all-snacks") {

                    return (
                        <div key={snack.id}>
                        <Snack snack={snack} />
                        </div> 
                    )
                }

                else if (props.selectedCategory === snack.category) {

                    return (
                        <div key={snack.id}>
                        <Snack snack={snack} />
                        </div> 
                    )
                } 
            })
        }
        </>
    )
}
