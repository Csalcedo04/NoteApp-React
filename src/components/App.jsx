import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, newNote] = React.useState([]);
  function Clicked(nota) {
    newNote((prev) => {
      console.log(nota);
      return [...prev, nota];
    });
  }
  function Deleted(nota) {
    newNote((prev) => {
      return prev.filter((item, index) => {
        console.log(!index);
        return index !== nota;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={Clicked} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={Deleted}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
