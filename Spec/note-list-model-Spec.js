describe("NoteList", function() {
  describe(".notes", function() {
    it("Should return an empty array", function() {
      var notes = new NoteList();
      expect(notes.notes).isArray(true);
    })
  })

  describe(".returnNotes()", function() {
    it("Should return an empty array", function() {
      var notes = new NoteList();
      expect(notes.returnNotes()).isArray(true);
    })
  })

  describe(".createNote()", function() {
    it("Should create a note and add it to the notes array", function() {
      var notes = new NoteList();
      notes.createNote("Hello World");
      expect(notes.notes[0].text).toEqual("Hello World");
    })
  })
})
