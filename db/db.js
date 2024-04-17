const data = {
  notes: [
    {
      id: '1',
      content: 'text',
    },
    {
      id: '2',
      content: 'text2',
    },
  ],

  addNote(note) {
    this.notes.push(note);
  },

  deleteNote(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
  },
};

module.exports = data;
