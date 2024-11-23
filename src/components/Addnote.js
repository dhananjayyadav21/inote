import React, { useContext, useState } from "react";
import NoteContext from "../context/note/NoteContext";
const Addnote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", discription: "", tag: "" });

  const addnotehandle = (e) => {
    e.preventDefault();
    addNote(note.title, note.discription, note.tag);
  };

  const handleonchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container col-7 my-4 ">
        <h2 className="mt-2 mb-5">Add New Note </h2>
        <form >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Note Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={handleonchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="discription" className="form-label">
              Note Description
            </label>
            <input
              type="text"
              className="form-control"
              id="discription"
              name="discription"
              aria-describedby="emailHelp"
              onChange={handleonchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Note #Tag
            </label>
            <input
              type="tex"
              className="form-control"
              id="tag"
              name="tag"
              onChange={handleonchange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={addnotehandle}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default Addnote;
