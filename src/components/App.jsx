import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios"; 

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/noteapp");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const addNote = async (newNote) => {
    try {
      console.log(newNote)
      await axios.post("http://localhost:3000/noteapp", newNote);
      setNotes((prevNotes) => [...prevNotes, newNote]); 
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };
  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/noteapp/${id}`);
      console.log("Eliminando nota con id:", id);
      setNotes((prevNotes) => {
        console.log("Notas previas:", prevNotes);
        return prevNotes.filter((note) => note.id !== id);
      });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((item) => (
        <Note
          key={item.id} 
          id={item.id} 
          title={item.title}
          content={item.content}
          onDelete={() => deleteNote(item.id)} 
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
