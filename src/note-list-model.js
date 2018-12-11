function NoteList() {
  this.notes = [];
}

NoteList.prototype.returnNotes = function() {
  return this.notes;
}

NoteList.prototype.createNote = function(string) {
  this.notes.push(new Note(string))
}
