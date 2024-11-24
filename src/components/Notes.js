import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/note/NoteContext";
import Noteiteam from "./Noteiteam";
import Addnote from "./Addnote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;

  //use navigate
  const navigate = useNavigate();


  //useEffect run before the whole program
  useEffect(() => {
    //if user note login
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  // Update note to the modal ====================================================
  const ref = useRef(null);
  const refClose = useRef(null);

  // state for the note details
  const [note, setNote] = useState({
    eid: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  //handle noteUpdate function of the form
  const noteUpdate = (currentNote) => {
    ref.current.click();
    setNote({
      eid: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.discription,
      etag: currentNote.tag,
    });
    console.log("updatenote", currentNote, ref);
  };

  //handle handleSavChanges function of the form
  const handleSavChanges = () => {
    editNote(note.eid, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };

  //handle handleonchange function of the form
  const handleonchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="d-flex">
        <Addnote />

        <button
          type="button"
          ref={ref}
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#editNote"
        ></button>

        <div
          className="modal fade"
          id="editNote"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="editNoteTitle">
                  Edit Note
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      {" "}
                      Title{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="etitle"
                      aria-describedby="emailHelp"
                      onChange={handleonchange}
                      value={note.etitle}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="discription" className="form-label">
                      {" "}
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="discription"
                      name="edescription"
                      aria-describedby="emailHelp"
                      onChange={handleonchange}
                      value={note.edescription}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                      {" "}
                      #Tag
                    </label>
                    <input
                      type="tex"
                      className="form-control"
                      id="tag"
                      name="etag"
                      onChange={handleonchange}
                      value={note.etag}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  ref={refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  disabled={
                    note.etitle.length < 5 || note.edescription.length < 5
                  }
                  onClick={handleSavChanges}
                  type="button"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 col-4" style={{ maxHeight: "92vh" }}>
          <div className="my-4">
            <h3>Your notes</h3>
            <div className="container">
              {notes.map((note) => {
                return (
                  <Noteiteam
                    note={note}
                    noteUpdate={noteUpdate}
                    key={note._id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
