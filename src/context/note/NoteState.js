import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  let initialnotes = [
    {
      _id: "673f92c4e4b22e44c60e7c020",
      user: "673f7e68d534d03320688e07",
      title: "my title ",
      discription: "it is a discription part",
      tag: "gernal",
      Date: "2024-11-21T20:06:28.904Z",
      __v: 0,
    },
    {
      _id: "673f92c4e4b22e4c60e7c020",
      user: "673f7e68d534d03320688e07",
      title: "my title ",
      discription: "it is a discription part",
      tag: "gernal",
      Date: "2024-11-21T20:06:28.904Z",
      __v: 0,
    },
  ];

  //add note() using this function
  const addNote = (title,discription,tag)=>{

    let anote ={
      _id: "673f92c4e4b222e4c60e7c020",
      user: "673f7e68d534d03320688e07",
      title:title,
      discription:discription,
      tag: tag,
      Date: "2024-11-21T20:06:28.904Z",
      __v: 0,
    }

    setNote(note.concat(anote));
  }

  //update note() using this function
  const editNote = ()=>{

  }

  //delete note() using this function
  const deleteNote = (id)=>{
     const newNotes = note.filter((note)=> note._id!==id);
     setNote(newNotes);
  }

  const [note, setNote] = useState(initialnotes);

  return (
    <NoteContext.Provider value={{ note, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
