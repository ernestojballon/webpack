import { hot } from 'react-hot-loader'
import React,{useState} from 'react'
import { v4 as uuid } from 'uuid'
import Notes from './Notes'
import NoteStore from '../store/NoteStore'
import NoteActions from '../actions/NoteActions'
import useStore from '../services/customHooks/useStore'

const App = ()=>{
  const noteStore = useStore(NoteStore)
  // const [notes,setNotes] = useState(NoteStore.getState().notes)
  const addNote = () => {
    NoteActions.create({
      id :uuid(),
      task : 'New Note'
    })
  }
  const updateNote = ( id, task ) => {
    NoteActions.update({id,task})
  }
  const deleteNote = ( id ) => {
    NoteActions.delete(id)
  }
  
  return (
    <div>
      <button onClick={addNote}>+</button>
        <Notes 
          notes={noteStore.notes} 
          updateNote={updateNote}
          deleteNote={deleteNote}/>
    </div>
  )
}
export default hot(module)(App);
