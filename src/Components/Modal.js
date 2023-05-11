import { useEffect, useRef } from 'react';
import './modal.css'
export default function Modal({ handleDelete, handleClose, snack }) {
    const ref = useRef()
    useEffect(()=>{
        const handleClickOutside=(event)=>{
            if(!ref.current.contains(event.target)){
                handleClose()
            }
        }
        document.addEventListener('click',handleClickOutside,true);
        return ()=>{
            document.removeEventListener('click', handleClickOutside,true);
        }
    },)
  return (
    <div className='modal-outer'>
      <div className='modal' ref={ref}>
        <h1>Are you sure you want to delete {snack.name} from your snacks?</h1>
        <img className='modal-img' src={snack.url} alt={snack.name}/>
        <div className='modal-buttons'>
          <button className='modal-btn cancel-btn' onClick={handleClose}>Cancel</button>
          <button className='modal-btn confirm-delete-btn' onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
