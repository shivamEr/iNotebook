import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  // Create a Host variable to store host origin
  const host = "http://localhost:5000";

  // Create a state variable to store notes
  const [notes, setNotes] = useState([]);

  // Fetch all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/getallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0MmZlMGNhYzg2ZjYwMDMzZjc2MmE5In0sImlhdCI6MTczMzA0MzI5OSwiZXhwIjoxNzMzMDQ2ODk5fQ.WM-rZdwQ7xFqM4ToEYXzii8kb0nfcaj5tfcAfnAdUCQ"
      }
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);

  }

  // Add a Notes
  const addNote = async (title, description, tag) => {
    // Api call to add a note 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0MmZlMGNhYzg2ZjYwMDMzZjc2MmE5In0sImlhdCI6MTczMzA0MzI5OSwiZXhwIjoxNzMzMDQ2ODk5fQ.WM-rZdwQ7xFqM4ToEYXzii8kb0nfcaj5tfcAfnAdUCQ"
      },
      body: JSON.stringify({ "title": title, "description": description, "tag": tag })

    });
    const json = await response.json();

    // just for testing in frontend
    const note = {
      "_id": "67485c96c1ed095e2a4ffe",
      "user": "6742fcac86f60033f762a9",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-11-28T12:04:57.157Z",
      "__v": 0
    }
    setNotes(notes.concat(note));
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // Api call to delete a note by using note id
    const response = await fetch(`${host}/api/notes/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0MmZlMGNhYzg2ZjYwMDMzZjc2MmE5In0sImlhdCI6MTczMzA0MzI5OSwiZXhwIjoxNzMzMDQ2ODk5fQ.WM-rZdwQ7xFqM4ToEYXzii8kb0nfcaj5tfcAfnAdUCQ"
      }
    });

    setNotes(notes.filter((note) => note._id !== id));
    console.log("Deleted " + id);

  }

  // Update a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0MmZlMGNhYzg2ZjYwMDMzZjc2MmE5In0sImlhdCI6MTczMzA0MzI5OSwiZXhwIjoxNzMzMDQ2ODk5fQ.WM-rZdwQ7xFqM4ToEYXzii8kb0nfcaj5tfcAfnAdUCQ"
      },
      body: JSON.stringify({ title, description, tag })

    });
    const json = response.json();


    // use loop to find the note to be updated
    for (let i = 0; i < notes.length; i++) {
      if (notes[i]._id === id) {
        notes[i].title = title
        notes[i].description = description
        notes[i].tag = tag
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
}
export default NoteState;