import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const S1 = {
    name: "neelbhai",
    work: "devloper",
  };

  return (
    <NoteContext.Provider value={S1}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
