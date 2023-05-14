import './categories.css';

export default function Categories(props) {

    function Handlebutton(event) {

        props.setSelectedCategory(event.target.name);
    }

    return (
        <div className='categories'>
            {/* how to make a toggle button */}
            <br />
            <h2 className='all-snacks' name='all-snacks' onClick={(event) => Handlebutton(event)}> All Snacks </h2>
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

//first we make the list view a state and we make it the default 

//then we change the state based on the botton click and therfore the view as well. 

//lets start with putting css whitin a state 