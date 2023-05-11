import axios from "axios";
import Snack from "./Snack";
import { useState, useEffect } from "react";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export default function Snacks(props) {

    const [snacks, setSnacks] = useState([]);

    const [theSnack, setTheSnack] = useState([]);

    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/snacks`)
            .then((response) => setSnacks(response.data))
            .catch((e) => console.error("catch", e))
    }, []);

    useEffect(() => {

        //the issue is that we are dealing with individuals instead of all hence why only one was showing for a while 

        snacks.map((snack) => {

            if (snack.category === props.selectedCategory) {

                setTheSnack(snack);
                console.log(theSnack)

                //console.log(snack.category, snack.name)
                //this is succesfully logging INDIVIDUAL SNACK that matches the selected category 
            }

            else {
                snacks.map((snack) => {
                    setTheSnack(snack)
                })
            }
        })
    }, [props.selectedCategory])

    return (
        <div>
            {/* <Snack theSnack={theSnack} />
            try doing it like normall than see what works cause you migth be getting messed up ccause 
            its a diff component */}
            <p> {theSnack.name} </p>
        </div>
    )
}
