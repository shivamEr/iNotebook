import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  // Create a Host variable to store host origin
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);
  

  // Fetch all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/getallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });

    const json = await response.json();
    console.log("Get all notes: ", json);
    setNotes(json);

  }

  // Add a Notes
  const addNote = async (title, description, tag) => {
    // Api call to add a note 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')      },
      body: JSON.stringify({ "title": title, "description": description, "tag": tag })

    });
    const note = await response.json();
    console.log("addNOte Api : ", note);

    // just for testing in frontend
    setNotes(notes.concat(note));
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // Api call to delete a note by using note id
    const response = await fetch(`${host}/api/notes/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });

    setNotes(notes.filter((note) => note._id !== id));
    console.log("Deleted " + id);

  }

  // Update a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')      },
      body: JSON.stringify({ title, description, tag })

    });
    const json = response.json();
    console.log("update Api : ", json);


    // // use loop to find the note to be updated
    // getNotes();

    // for (let i = 0; i < notes.length; i++) {
    //   if (notes[i]._id === id) {
    //     notes[i].title = title
    //     notes[i].description = description
    //     notes[i].tag = tag
    //     break;
    //   }
    // }
    // setNotes(notes);
  }
  return (
    <NoteContext.Provider value={{ notes, setNotes ,addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
}
export default NoteState;