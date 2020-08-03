import { v4 as uuid } from 'uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';

class NoteStore {
  constructor() {
    this.bindActions(NoteActions);
    this.notes = [
      {
        id: uuid(),
        task: 'Learn Webpack!',
      },
      {
        id: uuid(),
        task: 'Learn React',
      },
      {
        id: uuid(),
        task: 'Do laundry',
      },
    ];
  }

  create(note) {
    this.setState({
      notes: [...this.notes, note],
    });
  }

  update(updateNote) {
    const notes = this.notes.map((note) => {
      if (note.id === updateNote.id) return {
        ...note,
        ...updateNote,
      };
      return note;
    });
    // console.log(notes);
    this.setState({
      notes,
    });
  }

  delete(id) {
    this.setState({
      notes: this.notes.filter((note) => note.id !== id),
    });
  }
}

export default alt.createStore(NoteStore, 'NoteStore');
