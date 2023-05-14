import './categories.css';

export default function Categories(props) {
  function Handlebutton(event) {
    props.setSelectedCategory(event.target.name);
  }

  return (
    <div className='categories'>
      <div className='cat-row'>
        <button
          className='cat-btn'
          onClick={event => Handlebutton(event)}
          name='Sweet/Savory'
        >
          {' '}
          Sweet/Savory{' '}
        </button>
        <button
          className='cat-btn'
          onClick={event => Handlebutton(event)}
          name='Fruits/Veggies'
        >
          {' '}
          Fruits/Veggies{' '}
        </button>
        <button
          className='cat-btn'
          onClick={event => Handlebutton(event)}
          name='Grains'
        >
          {' '}
          Grains{' '}
        </button>
      </div>
      <div className='cat-row'>
        <button
          className='cat-btn'
          onClick={event => Handlebutton(event)}
          name='Proteins'
        >
          {' '}
          Proteins{' '}
        </button>
        <button
          className='cat-btn'
          onClick={event => Handlebutton(event)}
          name='Dairy'
        >
          {' '}
          Dairy{' '}
        </button>
        <button
          className='cat-btn'
          onClick={event => Handlebutton(event)}
          name='Other'
        >
          {' '}
          Other{' '}
        </button>
      </div>
    </div>
  );

}
