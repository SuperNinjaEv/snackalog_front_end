import Snack from "./Snack";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Snacks(props) {

    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios.get(`${props.REACT_APP_API_URL}/snacks`)
            .then((response) => setSnacks(response.data))
            .catch((e) => console.error("catch", e))
    }, []);

    return (
        <div >
        {
               snacks.map((snack) => {

                if (props.selectedCategory === "all-snacks") {

                    return (
                        <div key={snack.id} className="snacks" style={{display: props.viewMode}} >
                        <Snack snack={snack} />
                        </div> 
                    )
                }

                else if (props.selectedCategory.toLowerCase() === snack.category.toLowerCase()) {

                    return (
                        <div key={snack.id} className="snacks" style={{display: props.viewMode}}>
                        <Snack snack={snack} />
                        </div> 
                    )
                } 
            })
        }
        </div>
    )
}
