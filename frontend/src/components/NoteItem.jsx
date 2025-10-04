import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';
import modeContext from '../context/mode/modeContext';


const NoteItem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { mode } = useContext(modeContext);

  // const handleDelete = (id)=>{
  //   deleteNote();
  // }
  return (
    <div className='col-md-3' style={{color : mode==='dark'?'white':'black'}}>
      <div className="card my-3">
        <div className={`card-body bg-${mode == "dark" ? "secondary" : "light"}`}>
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id) }}></i>
            <i className="far fa-edit mx-2" onClick={() => updateNote(note)}></i>
          </div>
          <p className="card-text">{note.description}</p>
          {note.tag && (
            <span className="badge bg-light text-secondary align-self-start">
              #{note.tag}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
export default NoteItem;
