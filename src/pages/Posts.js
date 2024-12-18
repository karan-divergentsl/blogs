import React, { useState } from 'react'
import Header from "../components/Header";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";

function Posts() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <>
      <Header />
      <CreatePost onAdd={addNote} />
      <div className="posts-list">
      {notes.map((noteItem, index) => {
        return (
          <Post
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      </div>
    </>
  )
}

export default Posts