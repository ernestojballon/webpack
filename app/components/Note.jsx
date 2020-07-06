import React, {useState} from 'react'

const Note = ({note,updateNote,deleteNote})=>{
  const [editing,setEditing] = useState(false)

  const editFinish = (e) => {
    updateNote(note.id,e.target.value)
    setEditing(false)
  }
  const isRender = ()=>{
    return (
      <div>
        <div
          onClick = {()=>setEditing(true)}>
          {note.task}
        </div>
        <button onClick={()=>deleteNote && deleteNote(note.id)}>X</button>
      </div>
    )
  }
  const isEditing = ()=>{
    
    return (
      <div>
        <input type='text'
            autoFocus= {true}
            defaultValue={note.task}
            onBlur={editFinish}
            onKeyPress={(e) => e.key === 'Enter' && editFinish(e)}
            />
      </div>
    )
  }
  if(editing){
    return isEditing()
  }
  return isRender()
  
}
export default Note;
