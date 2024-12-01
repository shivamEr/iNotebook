import React, {useEffect, useContext } from 'react'
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    console.log("effect hai");
    getNotes();
  }, [])
  
  return (
    <>
      <AddNote/>
      <div className='row my-3'>
        <h4>Your Note</h4>
        {
          notes.map((note) => {
            return <NoteItem key={note._id} note={note} />;
          })
        }

      </div>
    </>
  )
}
export default Notes;
