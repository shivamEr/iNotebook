import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';
import modeContext from '../context/mode/modeContext';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const { mode } = useContext(modeContext);

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className='container my-3' style={{ background: mode === 'dark' ? 'transparent' : 'white', color: mode === 'dark' ? 'white' : 'black' }}>
                <h2>Add Your Note</h2>

                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Note Title</label>
                        <input type="text" className="form-control" id="title" name='title' onChange={onChange} aria-describedby="emailHelp" style={{ background: mode === 'dark' ? 'transparent' : 'white', color: mode === 'dark' ? 'white' : 'black' }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' onChange={onChange}
                            style={{ background: mode === 'dark' ? 'transparent' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tags</label>
                        <input type="text" className="form-control" id="tag" name='tag' onChange={onChange}
                            style={{ background: mode === 'dark' ? 'transparent' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                </form>

            </div>
        </div>
    )
}
export default AddNote;