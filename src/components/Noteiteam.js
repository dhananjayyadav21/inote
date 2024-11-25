import React, { useContext } from "react";
import NoteContext from "../context/note/NoteContext";

const Noteiteam = (props) => {
  const context = useContext(NoteContext);

  const { deleteNote } = context;

  const { note, noteUpdate } = props;

  return (
    <>
      <div className="card my-2">
        <div className="card-body">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div>
              <i
                className="fa-solid fa-delete-left mx-2"
                onClick={() => {
                  deleteNote(note._id);
                }}
              ></i>
              <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{noteUpdate(note)}}></i>
            </div>
          </div>
          <h6 className="card-text">{note.discription}</h6>
          <p className=" fw-bold">#{note.tag}</p>
          <h6 className="card-text">{note.Date}</h6>
        </div>
      </div>
    </>
  );
};

export default Noteiteam;
