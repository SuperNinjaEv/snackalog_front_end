import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SnackEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [snack, setSnack] = useState({
        name: "",
        category: "",
        url: "",
        sugar: 0,
        protein: 0,
        fiber: 0,
        is_vegan: false,
        is_vegetarian: false,
        is_glutenfree: false,
        is_favorite: false,
    });

    const updateSnack = (updatedSnack) => {
        axios
            .put(`${API}/snacks/${id}`, updatedSnack)
            .then(
                () => {
                    navigate(`/snacks/${id}`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };

    const handleTextChange = (event) => {
        setSnack({ ...snack, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = (event) => {
        // console.log(event.target.id, event.target.checked)
        setSnack({ ...snack, [event.target.id]: event.target.checked });
    };

    useEffect(() => {
        axios.get(`${API}/snacks/${id}`)
            .then(
                (response) => setSnack(response.data),
                (error) => navigate(`/not-found`)
            );
    }, [id, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSnack(snack, id);
    };

    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={snack.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Snack"
                    required
                />
                <label htmlFor="category">Category:</label>
                <select
                    name="category"
                    id="category"
                    value={snack.category}
                    onChange={handleTextChange}
                >
                    <option>Please Select a Category...</option>
                    <option value="fruits/veggies" >Fruits/Veggies</option>
                    <option value="proteins" >Proteins</option>
                    <option value="dairy" >Dairy</option>
                    <option value="starches" >Starches</option>
                    <option value="sweet/savory" >Sweet/Savory</option>
                </select>
                <label htmlFor="url">URL:</label>
                <input
                    id="url"
                    type="text"
                    pattern="http[s]*://.+"
                    required
                    value={snack.url}
                    placeholder="http://"
                    onChange={handleTextChange}
                />
                <label htmlFor="sugar">Sugar:</label>
                <input
                    id="sugar"
                    value={snack.sugar}
                    type="text"
                    pattern="[0-9]*"
                    onChange={handleTextChange}
                    placeholder="Amount of Sugar"
                />
                <label htmlFor="sugar">Protein:</label>
                <input
                    id="protein"
                    value={snack.protein}
                    type="text"
                    pattern="[0-9]*"
                    onChange={handleTextChange}
                    placeholder="Amount of Protein"
                />
                <label htmlFor="sugar">Fiber:</label>
                <input
                    id="fiber"
                    value={snack.fiber}
                    type="text"
                    pattern="[0-9]*"
                    onChange={handleTextChange}
                    placeholder="Amount of Fiber"
                />
                <br />
                <label htmlFor="is_vegan">Vegan:</label>
                <input
                    id="is_vegan"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={snack.is_vegan}
                />
                <label htmlFor="is_vegetarian">Vegetarian:</label>
                <input
                    id="is_vegetarian"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={snack.is_vegetarian}
                />
                <label htmlFor="is_glutenfree">Gluten Free:</label>
                <input
                    id="is_glutenfree"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={snack.is_glutenfree}
                />
                <label htmlFor="is_favorite">Favorite:</label>
                <input
                    id="is_favorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={snack.is_favorite}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

