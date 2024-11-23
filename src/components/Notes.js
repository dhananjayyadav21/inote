import React, { useContext } from "react";
import NoteContext from "../context/note/NoteContext";
import Noteiteam from "./Noteiteam";

const Notes = () => {
  const context = useContext(NoteContext);

  const {note , setNotes} = context;
  console.log("context", context)
  console.log("note",note);

  return (
    <div className="my-4">
      <h3>Your notes</h3>
      <div className="container">
      {note.map((note)=>{
          return <Noteiteam note={note}/>;
        })}
        </div>
    </div>
  );
};

export default Notes;
