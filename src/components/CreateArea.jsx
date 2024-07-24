import React, { useState } from "react";

function CreateArea(prop) {
  const [note, newNote] = useState({
    title: "",
    content: "",
  });

  function submitNote(event) {
    prop.onAdd(note);
    newNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  }
  function HandleChange(e) {
    const { name, value } = e.target;
    newNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function no(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={no}>
        <input
          name="title"
          placeholder="Title"
          onChange={HandleChange}
          value={note.title}
        />
        <textarea
          name="content"
          onChange={HandleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
