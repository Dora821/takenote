import React from 'react';
import Notes from './Notes.jsx';

const Note = (props) => {
  return(
    <div className="noteView">
          <div className="noteViewTitle">
            <h1>{props.eachNote.title}</h1>
          </div>
          <div className="noteViewCategory">
            <h3>{props.eachNote.category}</h3>
          </div>
          <div className="note-tagline"><h4>{props.eachNote.tagline}</h4></div>
          <div className="note-desc">{props.eachNote.note}</div>
    </div>
  )


};

export default Note;
