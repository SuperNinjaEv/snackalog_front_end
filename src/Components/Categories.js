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
                <button className='cat-btn' onClick={(event) => Handlebutton(event)} name='Sweet/Savory'> Sweet/Savory </button>
                <button className='cat-btn' onClick={(event) => Handlebutton(event)} name='Fruits/Veggies'> Fruits/Veggies </button>
                <button className='cat-btn' onClick={(event) => Handlebutton(event)} name='Grains'> Grains </button>
                <button className='cat-btn' onClick={(event) => Handlebutton(event)} name='Proteins'> Proteins </button>
                <button className='cat-btn' onClick={(event) => Handlebutton(event)} name='Dairy'> Dairy </button>
                <button className='cat-btn' onClick={(event) => Handlebutton(event)} name='Other'> Other </button>
            </section>
            <br />
        </div>
    )
}