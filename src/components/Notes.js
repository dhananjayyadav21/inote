import React, { useContext, useEffect } from "react";
import NoteContext from "../context/note/NoteContext";
import Noteiteam from "./Noteiteam";
import Addnote from "./Addnote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { note, getNotes } = context;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className=" d-flex">
        <Addnote />

        <div className="px-5 col-4" style={{ height: "92vh" }}>
          <div className="my-4">
            <h3>Your notes</h3>
            <div className="container">
              {note.map((note) => {
                return <Noteiteam note={note} key={note._id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
