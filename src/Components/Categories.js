import './categories.css';
import axios from "axios";
import { useState, useEffect } from "react";

export default function Categories(props) {

    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

    const [category, setCategory] = useState("");

    useEffect(() => {
        
        axios.get(`${REACT_APP_API_URL}/snacks`)
        .then((response) => {
            response.data.map((snack) => {
                setCategory(snack.category)
            })
        }).catch((e) => console.error("catch", e))
    }, [Handlebutton])

    function Handlebutton(event) {
        event.preventDefault();

        if (event.target.name === category) {
            props.setCategorizeSnacks(event.target.name);
        }
    }

    //this code is successfull so far

    return (
        <div className='categories'>
            {/* how to make a toggle button */}
            <h2 className='all-snacks'> All Snacks </h2>
            {/* on click all snacks to show all snacks */}
            <section className="category-btns">
                <button className='cat-btn' onClick={(event) => Handlebutton(event)} name='Chips'> Chips </button>
                <button className='cat-btn' onClick={(event) => Handlebutton(event)} name='Fruit'> Fruit </button>
                <button className='cat-btn' onClick={(event) => Handlebutton(event)} name='Nuts'> Nuts </button>
                <button className='cat-btn' onClick={(event) => Handlebutton(event)} name='Starch'> Starch </button>
                <button className='cat-btn' onClick={(event) => Handlebutton(event)} name='Meat'> Meat </button>
                <button className='cat-btn' onClick={(event) => Handlebutton(event)} name='Dairy'> Dairy </button>
            </section>
            <br />
        </div>
    )
}