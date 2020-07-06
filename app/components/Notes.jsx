import React from 'react'
import Note from './Note'

const Notes = ({notes,updateNote,deleteNote})=>{
  return (
    <div>
      <ul>{
          notes.map(note =>(
            <li key= {note.id}>
              <Note 
                updateNote={updateNote} 
                note={note}
                deleteNote={deleteNote}
              />
            </li>
          ))
          }   
        </ul>
    </div>
  )
}
export default Notes;
