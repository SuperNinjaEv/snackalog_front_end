import './categories.css';

export default function Categories(props) {

    function Handlebutton(event) {
        //event.preventDefault();

        props.setSelectedCategory(event.target.name);
        //SUCCESFULLY SETTING 
    }

    return (
        <div className='categories'>
            {/* how to make a toggle button */}
            <h2 className='all-snacks' name='all-snacks' onClick={(event) => Handlebutton(event)}> All Snacks </h2>
            {/* on click all snacks to show all snacks */}
            <section className="category-btns">
                <button onClick={(event) => Handlebutton(event)} name='Other'> Other </button>
                <button onClick={(event) => Handlebutton(event)} name='Fruits/Veggies'> Fruits/Veggies </button>
                <button onClick={(event) => Handlebutton(event)} name='Proteins'> Proteins </button>
                <button onClick={(event) => Handlebutton(event)} name='Grains'> Grains </button>
                <button onClick={(event) => Handlebutton(event)} name='Sweet/Savory'> Sweet/Savory </button>
                <button onClick={(event) => Handlebutton(event)} name='Dairy'> Dairy </button>
            </section>
            <br />
        </div>
    )
}