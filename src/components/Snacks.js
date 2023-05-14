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

    //style={{"height": 250, "width": 250}}
//style={{"display": props.snackView}}
    return (
        <div >
        {
               snacks.map((snack) => {

                if (props.selectedCategory === "all-snacks") {

                    return (
                        <div key={snack.id} className="snacks" >
                        <Snack snack={snack} />
                        </div> 
                    )
                }

                if (props.selectedCategory === snack.category) {

                    return (
                        <div key={snack.id} className="snacks">
                        <Snack snack={snack} />
                        </div> 
                    )
                } 
            })
        }
        </div>
    )
}
