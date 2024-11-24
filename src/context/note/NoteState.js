import NoteContext from "./NoteContext";
import { useState } from "react";

const HOST = "http://localhost:5000/";
const NoteState = (props) => {
  let initialnotes = [];

  // Get All notes using api request =================================================================================
  const getNotes = async () => {
    //API CALL
    try {
      const responce = await fetch(`${HOST}api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczZjdlNjhkNTM0ZDAzMzIwNjg4ZTA3In0sImlhdCI6MTczMjIxNDM3Nn0.Ar1T-ECh3x13qlabqGJmaHzOC7i9QU4aGv3XJ9aArS8",
        },
      });
      const json = await responce.json();
      setNote(json);
      //if accured error
    } catch (err) {
      console.log(err);
    }
  };

  //Add note() using this function =================================================================================
  const addNote = async (title, discription, tag) => {
    //API CALL
    try {
      const responce = await fetch(`${HOST}api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczZjdlNjhkNTM0ZDAzMzIwNjg4ZTA3In0sImlhdCI6MTczMjIxNDM3Nn0.Ar1T-ECh3x13qlabqGJmaHzOC7i9QU4aGv3XJ9aArS8",
        },
        body: JSON.stringify({ title, discription, tag }),
      });
      //Add note on db
      const json = await responce.json();
      console.log(json);
      setNote(notes.concat(json));
      //if accured error
    } catch (err) {
      console.log(err);
    }
  };

  //Update note() using this function =============================================================================
  const editNote = async (id, title, discription, tag) => {
    //API CALL
    try {
      const responce = await fetch(`${HOST}api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczZjdlNjhkNTM0ZDAzMzIwNjg4ZTA3In0sImlhdCI6MTczMjIxNDM3Nn0.Ar1T-ECh3x13qlabqGJmaHzOC7i9QU4aGv3XJ9aArS8",
        },
        body: JSON.stringify({ title, discription, tag }),
      });
      //Update note on db
      const json = await responce.json();
      console.log(json);
      setNote(notes.concat(json));
      //if accured error
    } catch (err) {
      console.log(err);
    }
    
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.discription = discription;
        element.tag = tag;
      }
    }
  };

  //Delete note() using this function =============================================================================
  const deleteNote = async (id) => {
    try {
      //API CALL
      const responce = await fetch(`${HOST}api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczZjdlNjhkNTM0ZDAzMzIwNjg4ZTA3In0sImlhdCI6MTczMjIxNDM3Nn0.Ar1T-ECh3x13qlabqGJmaHzOC7i9QU4aGv3XJ9aArS8",
        },
      });
      const json = await responce.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
    //Delete note fron db
    const newNotes = notes.filter((note) => note._id !== id);
    setNote(newNotes);
  };

  const [notes, setNote] = useState(initialnotes);

  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
