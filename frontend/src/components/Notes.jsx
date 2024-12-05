import React, { useEffect, useContext, useRef, useState } from 'react'
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote} = context;

  let navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else{
      console.log("Logged In Successfuly!");
      navigate('/login');
    }
  }, [])

  const ref = useRef(null);
  const [note, setNote] = useState({id:"", etitle: "", edescription:"", etag:""});

  const updateNote = (currNote) => {
    ref.current.click();
    setNote({id:currNote._id, etitle:currNote.title, edescription: currNote.description, etag: currNote.tag});
  }

  // for closing modal after clicking on update
  const refClose = useRef(null);

  const handleUpdate = (e) => {
    console.log("Updating a Node with  " + note)
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  }

  const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value});
  }

  return (
    <>
      <AddNote />

      {/* Toggle Button */}
      <button ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>

      {/* Modal for adding note */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Notes</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            {/* Form for Updates */}
            <div className="modal-body">
              <form className='my-3'>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Note Title</label>
                  <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tags</label>
                  <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row my-3'>
        <h4>Your Note</h4>
        {
          notes.map((note) => {
            return <NoteItem key={note._id} note={note} updateNote={updateNote} />;
          })
        }

      </div>
    </>
  )
}
export default Notes;
