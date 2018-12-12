function SpecSetup() {
  note = new Note("Hello World");
  notes = new NoteList();
  view = new ListView(notes);
}

function MultiNote() {
  notes.notes.push(new Note("A"));
  notes.notes.push(new Note("B"));
  notes.notes.push(new Note("C"));
}