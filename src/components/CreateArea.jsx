import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const submitNote = (event) => {
    event.preventDefault();
    const noteWithId = {
      ...note,
      id: Math.floor(Math.random() * 1000000),
    };
    props.onAdd(noteWithId);
    setNote({ title: "", content: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
